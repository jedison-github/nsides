"""
query_nsides_mongo.py

Connects to MongoDB and extracts records for API's usage

@author Victor Nwankwo, 2017
@author Tal Lorberbaum, 2017
@author Joe Romano, 2017
@author: Kai Xiang Chen, 2018

USAGE:

Ensure that nsides-mongo.cnf file exists


"""

import sys
import pymongo
from operator import itemgetter
import json
import query_nsides_mysql
from nsides_helpers import allIngredientRxnormToName, mongodbRxnormToName

import ipdb

EXTRACTED_DIR = './results/extracted'
REFERNCE_DIR = './reference'
MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017

# Document Structure
# {
#     'rxnorm': 0,
#     'snomed': 0,
#     'model': 'none',
#     'estimates': [
#         {'year': 1990,
#         'prr': 1.5,
#         'ci': 0.1},
#         {'year': 1991,
#         'prr': 1.6,
#         'ci': 0.2}
#     ],
#     'nreports': 0
# }

def main():
    
    print >> sys.stderr, "Loading password from ./nsides-mongo.cnf..."
    MONGODB_HOST, MONGODB_UN, MONGODB_PW = open('./nsides-mongo.cnf').read().strip().split('\n')
    
    client = pymongo.MongoClient('mongodb://%s:%s@%s:%s/nsides_in?authSource=admin' % (MONGODB_UN, MONGODB_PW, MONGODB_HOST, MONGODB_PORT))
    db = client.nsides_in
    estimates = db.estimates

    print >> sys.stderr, "%s" % db.collection_names()
    print >> sys.stderr, "%s" % str(estimates.count())

    query_db('nsides', 'estimateForDrug_Outcome', {'drugs': '19097016', 'model': 'dnn', 'outcome': '4294679'})

    return True

def connect():
    print "Connecting to the API..."

    # Connect to MongoDB database
    print "Connecting to database"

    print >> sys.stderr, "Loading password from ./nsides-mongo.cnf..."
    MONGODB_HOST, MONGODB_UN, MONGODB_PW = open('./nsides-mongo.cnf').read().strip().split('\n')

    # print 'MongoDB host: ', MONGODB_HOST
    # print 'MongoDB username: ', MONGODB_UN
    # print 'MongoDB password: ', MONGODB_PW
    
    client = pymongo.MongoClient('mongodb://%s:%s@%s:%s/nsides_in?authSource=admin' % (MONGODB_UN, MONGODB_PW, MONGODB_HOST, MONGODB_PORT))
    return client


def query_db(service, method, query=False, cache=False):

    print "Connecting to the API..."

    # Connect to MongoDB database
    print "Connecting to database"

    print >> sys.stderr, "Loading password from ./nsides-mongo.cnf..."
    MONGODB_HOST, MONGODB_UN, MONGODB_PW = open('./nsides-mongo.cnf').read().strip().split('\n')

    # print 'MongoDB host: ', MONGODB_HOST
    # print 'MongoDB username: ', MONGODB_UN
    # print 'MongoDB password: ', MONGODB_PW
    
    client = pymongo.MongoClient('mongodb://%s:%s@%s:%s/nsides_in?authSource=admin' % (MONGODB_UN, MONGODB_PW, MONGODB_HOST, MONGODB_PORT))
    # db = client.nsides_in
    db = client.nsides_in
    estimates = None
    if type(query["drugs"]) == 'string':
        estimates = db.estimates_agave
    else: 
        estimates = db.estimates
    gpcr = db.gpcr
    
    
    druginfo_db = client.nsides
    druginfo = druginfo_db.druginfo

    json_return = []
    if service == 'nsides':
        print "  Service: ",service
        print "  Method: ", method
        print "  Query : ", query

        if method == 'estimateForDrug_Outcome':
            if query["model"] == 'all':
                estimate_records = estimates.find(
                                    { '$and':
                                        [ { 'rxnorm': query["drugs"] },
                                        { 'snomed': int(query["outcome"]) }
                                        ]
                                    });
                
                if estimate_records is None:
                    print "  No record found"

                else:
                    for estimate_record in estimate_records:
                        # Sort estimates by year and remove unicode from estimate keys
                        sorted_estimates = sorted(estimate_record[u"estimates"], key=lambda k: k[u'year'])
                        sorted_nreports = sorted(estimate_record[u"nreports"], key=lambda k: k[u'year'])

                        model_type = estimate_record[u"model"]

                        processed_estimates = []
                        for s in sorted_estimates:
                            processed_year_estimate = dict()
                            for k in s.keys():
                                processed_year_estimate[k.encode('ascii','ignore')] = s[k]
                            processed_estimates.append( processed_year_estimate )
                        # print s.keys()
                        # print estimate_record[u"estimates"], '\n'

                        processed_nreports = []
                        for r in sorted_nreports:
                            nreport_for_year = dict()
                            for k in r.keys():
                                nreport_for_year[k.encode('ascii', 'ignore')] = r[k]
                            processed_nreports.append(nreport_for_year)

                        #print "  ", processed_estimates
                        #print "  ", sorted_nreports

                        #processed_nreports = []
                        #for r in sorted_nreports:
                        #    processed_

                        json_return.append({ 
                            # "effect_string" : "estimateForDrug_Outcome",
                            "outcome" : int(estimate_record[u"snomed"]), #query["outcome"],
                            "drug" : estimate_record[u"rxnorm"], #query["drugs"],
                            "estimates": processed_estimates, #estimate_record[u"estimates"]
                            "nreports": processed_nreports,
                            "model": model_type
                        })
            else:
                estimate_record = estimates.find_one(
                                    { '$and':
                                        [ { 'rxnorm': query["drugs"] },
                                        { 'snomed': int(query["outcome"]) },
                                        { 'model': query["model"] }
                                        ]
                                    })
            
                if estimate_record is None:
                    print "  No record found"

                else:
                    # Sort estimates by year and remove unicode from estimate keys
                    sorted_estimates = sorted(estimate_record[u"estimates"], key=lambda k: k[u'year'])
                    sorted_nreports = sorted(estimate_record[u"nreports"], key=lambda k: k[u'year'])

                    processed_estimates = []
                    for s in sorted_estimates:
                        processed_year_estimate = dict()
                        for k in s.keys():
                            processed_year_estimate[k.encode('ascii','ignore')] = s[k]
                        processed_estimates.append( processed_year_estimate )
                    # print s.keys()
                    # print estimate_record[u"estimates"], '\n'

                    processed_nreports = []
                    for r in sorted_nreports:
                        nreport_for_year = dict()
                        for k in r.keys():
                            nreport_for_year[k.encode('ascii', 'ignore')] = r[k]
                        processed_nreports.append(nreport_for_year)

                    #print "  ", processed_estimates
                    #print "  ", sorted_nreports

                    #processed_nreports = []
                    #for r in sorted_nreports:
                    #    processed_

                    json_return.append({ 
                        # "effect_string" : "estimateForDrug_Outcome",
                        "outcome" : int(estimate_record[u"snomed"]), #query["outcome"],
                        "drug" : estimate_record[u"rxnorm"], #query["drugs"],
                        "estimates": processed_estimates, #estimate_record[u"estimates"]
                        "nreports": processed_nreports,
                        "model": query["model"]
                    })

        
        elif method == 'topOutcomesForDrug_old': #'get_top_10_effects':
            # Given drug and model, return top 10 outcomes ordered by 2016 CI
            # For now, fetch all documents and process in Python
            # Also check if we are looking for a subset or ALL results
            if query["numResults"] == 'all':
                num_results = 'all'
            else:
                num_results = int(query["numResults"])
            # print num_results, "number of results"
            
            estimate_record = estimates.find(
                                { '$and':
                                    [ { 'rxnorm': query["drugs"] },
                                      { 'model': query["model"] },
                                      { 'snomed': {'$ne':None} }
                                    ]
                                });
            
            all_outcomes = []
            
            for record in estimate_record:
                #pprint(record)
                for estimate in record[u'estimates']:
                    if estimate[u'year'] == 2016:
                        #all_outcomes.append( (int(record[u'snomed']), estimate[u'ci'], estimate[u'prr']) )
                        all_outcomes.append( (int(record[u'snomed']) ) )
                        # print record[u'snomed'], estimate[u'prr']
                        # all_outcomes.append((record[u'snomed'], estimate[u'prr']))
                        
            print "  ", len(all_outcomes), "total outcomes"

            # sorted(all_outcomes,key=itemgetter(1), reverse=True)[:num_results]
            # Check if we should show all or just a limited number of sorted results
            #ipdb.set_trace()
            if num_results == 'all':
                top_results = sorted(all_outcomes)
            else:
                top_results = sorted(all_outcomes)[:num_results]
            top_outcome_ids = [str(r) for r in top_results]

            if len(top_outcome_ids) == 0:
                return []

            ipdb.set_trace()

            concept_mappings = query_nsides_mysql.query_db(service='omop', method='conceptsToName',
                                                           query= ",".join(top_outcome_ids) )

            concept_id2name = dict()
            for m in concept_mappings:
                concept_id2name[ str(m['concept_id']) ] = m['concept_name']

            outcome_options = []
            for position, concept_id in enumerate(top_outcome_ids): # Added enumeration to list
                if concept_id in concept_id2name:
                    outcome_options.append( { 'value': concept_id, 'label': str(position + 1) + " - " + concept_id2name[concept_id].replace("'", "") } )
            #print("OUTCOME OPTIONS:")
            #print outcome_options

            
            json_return.append({
                    # "effect_string" : "estimateForDrug_Outcome",
                    "topOutcomes" : outcome_options, #top_outcome_ids,
                    "drug" : query["drugs"],
                }) 

            ## Use aggregate to count number of instances of unique drugs
            # estimates_aggregate = estimates.aggregate([
            #     { "$group": {
            #         "_id": "$rxnorm",
            #         "count": { "$sum": 1 }
            #     }}
            # ])
            # 
            # OR 
            #
            # print(record_aggregate)
            # record_aggregate = db.estimates.aggregate([
            #     {"$group":{"_id":"$rxnorm","count":{"$sum":1}}},
            #     {"$sort":{"count":-1}},
            #     {"$limit":1}
            # ])
            # print(record_aggregate)

            ## Use aggregate to get 10 effects
            # for doc in estimates.aggregate([
            #     {'$match': {'estimates.rxnorm': '19097016'}}, 
            #     {'$group': {'_id': '$estimates.snomed', 'snomed_count': {'$sum': 1}}}, 
            #     {"$sort":{"count":-1}},
            #     {"$limit":10}
            # ]):
            # print(doc)

            ## This does not print out correctly
            ## Consider using this: https://stackoverflow.com/questions/8782136/how-to-log-pymongo-queries
            #print >> sys.stderr, "%s" % record_aggregate

            ## Now set aggregate to results and iterate
            # results = record_aggregate
            # count = 1
            
            # for result in results:
            #     json_return.append({
            #         "effect": str(result['pt']),
            #         "rank": int(count)
            #     })
            #     count++

            # Comment the next 6 lines out ... Uncomment out everything above
            # json_return.append({ 
            #     "effect_string" : "Example Effect",
            #     "effect_rank" : "10",
            #     "effect_snomed" : "435459",
            #     "effect_rxnorm" : "19097016"
            # })
        # print(json.dumps(json_return, indent=2))
        return json.dumps(json_return)

    elif service == 'druginfo':
        if method == 'jobIndexes':
            # query e.g.,: {'drugs': u'19097016'}
            drugs = [int(x)for x in query['drugs'].split(',')]
            drugs.sort()
            job_indexes = list()
            for d in drugs:
                single_drug = druginfo.find_one({'rxnorm': d})
                job_indexes.append(str(single_drug['run_index']))
            job_indexes.sort()
            job_index_string = '_'.join(job_indexes)
            json_return = {'job_indexes': job_indexes,
                           'job_index_string': job_index_string}
            return json.dumps(json_return)

    elif service == 'gpcr':
        if method == 'gpcrFromUniprot':
            # query e.g.,: {'uniprot': }
            all_gpcrs = list(gpcr.find({'GPCR_uniprot_': query['uniprot']}, 
                                       {'_id': 0, 'cell_line_ID': 0}))
            return json.dumps(all_gpcrs)

def query_nsides_in(function, request):
    client = connect()
    db = client.nsides_in
    return function(db, request)

def drugs_from_effect(effect):
    client = connect()
    db = client.nsides_in
    estimates = db.estimates

    num_results = 10000
    effect = int(effect)

    pipeline = [
        {"$match": {"snomed": effect}},
        {"$unwind": "$nreports"},
        {"$group": {"_id": "$rxnorm", "totalnreports": { "$sum": "$nreports.nreports" }} },
        {"$match": {"totalnreports": {"$gte": 1} } },  # $gte selects greater than or equal to 
        {"$sort": {"totalnreports": -1} },  # descending order
        {"$limit": num_results}
    ]

    estimate_records = estimates.aggregate(pipeline)
    # ipdb.set_trace()
    # print len(estimate_records)
    listOptions = []

    for record in estimate_records:
        rxnormId = record['_id']
        listOptions.append({
            'value': str(rxnormId),
            'label': mongodbRxnormToName[rxnormId]
        })
    print len(listOptions)
    
    return json.dumps({
                "topOutcomes" : listOptions,
                "effect" : effect,
            })

def effects_from_ingredients(drugs):
    client = connect()
    db = client.nsides_in
    estimates = db.estimates
    estimates_agave = db.estimates_agave
    num_results = 10000
    collection = None
    drugs = str(drugs)
    print drugs, len(drugs.split(',')), type(drugs), type(drugs) == 'string'

    if len(drugs.split(',')) == 1:
        drugs = int(drugs)
        collection = estimates
    else:
        drugs = str(drugs)
        collection = estimates_agave

    pipeline = [
        {"$match": {"rxnorm": drugs}},
        {"$unwind": "$nreports"},
        {"$group": {
            "_id": "$snomed", 
            "totalnreports": { "$sum": "$nreports.nreports" }
            }
        },
        {"$match": {"totalnreports": {"$gte": 1} } },  # $gte selects greater than or equal to 
        {"$sort": {"totalnreports": -1} },  # descending order
        {"$limit": num_results}
    ]

    estimate_records = collection.aggregate(pipeline)
    # ipdb.set_trace()

    outcomes = []
    estimate_records = list(estimate_records)

    if len(estimate_records) != 0:
        for record in estimate_records:
            # print record
            outcomes.append(str(record['_id']))
    else:
        return json.dumps({ 'topOutcomes': [] })

    concept_mappings = query_nsides_mysql.query_db(service='omop', method='conceptsToName',
                                                    query= ",".join(outcomes) )

    concept_id2name = dict()
    for m in concept_mappings:
        concept_id2name[ str(m['concept_id']) ] = m['concept_name']

    outcome_options = []
    for position, concept_id in enumerate(outcomes): # Added enumeration to list
        if concept_id in concept_id2name:
            outcome_options.append( { 'value': concept_id, 'label': str(position + 1) + " - " + concept_id2name[concept_id].replace("'", "") } )

    return json.dumps({
            "topOutcomes" : outcome_options,
            "drug" : drugs,
        })

def drugs_and_effect_result(db, request):
    drugs = request.args.get('drugs')
    outcome = request.args.get('outcome')
    if ()

    estimate_records = estimates.find(
                        { '$and':
                            [ { 'rxnorm': drugs },
                            { 'snomed': int(outcome) }
                            ]
                        })
    
    if estimate_records is None:
        print "  No record found"

    else:
        for estimate_record in estimate_records:
            # Sort estimates by year and remove unicode from estimate keys
            sorted_estimates = sorted(estimate_record[u"estimates"], key=lambda k: k[u'year'])
            sorted_nreports = sorted(estimate_record[u"nreports"], key=lambda k: k[u'year'])

            model_type = estimate_record[u"model"]

            processed_estimates = []
            for s in sorted_estimates:
                processed_year_estimate = dict()
                for k in s.keys():
                    processed_year_estimate[k.encode('ascii','ignore')] = s[k]
                processed_estimates.append( processed_year_estimate )
            # print s.keys()
            # print estimate_record[u"estimates"], '\n'

            processed_nreports = []
            for r in sorted_nreports:
                nreport_for_year = dict()
                for k in r.keys():
                    nreport_for_year[k.encode('ascii', 'ignore')] = r[k]
                processed_nreports.append(nreport_for_year)

            #print "  ", processed_estimates
            #print "  ", sorted_nreports

            #processed_nreports = []
            #for r in sorted_nreports:
            #    processed_

            json_return.append({ 
                # "effect_string" : "estimateForDrug_Outcome",
                "outcome" : int(estimate_record[u"snomed"]), #query["outcome"],
                "drug" : estimate_record[u"rxnorm"], #query["drugs"],
                "estimates": processed_estimates, #estimate_record[u"estimates"]
                "nreports": processed_nreports,
                "model": model_type
            })

def get_all_ingredients():
    client = connect()
    db = client.nsides_in
    estimates = db.estimates
    
    all_ingredients = estimates.distinct("rxnorm")
    holder = {}
    for rxnorm in all_ingredients:
        rxnorm = rxnorm
        strRxnorm = str(rxnorm)
        if strRxnorm in allIngredientRxnormToName:
            ingredient_name = allIngredientRxnormToName[strRxnorm]
            # holder.append([rxnorm, ingredient_name])
            holder[rxnorm] = ingredient_name
        else:
            print rxnorm
    print holder

    return json.dumps(holder)

if __name__ == '__main__':
    main()
