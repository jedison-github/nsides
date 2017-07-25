class NsidesApp extends React.Component {
    constructor(props) {
    super(props);
        this.state = {drugs: '',
                      outcome: '',
                      numOutcomeResults: 10,
                      outcomeOptions: []};
                    // plotWidth: window.innerWidth < 625 ? (window.innerWidth-50) : 625,
                    // plotHeight: 350};
    }

    render() {
        return <div>
               <div className='select-row'>
               <section>
               <DrugSelectBox
                      numOutcomeResults={this.state.numOutcomeResults}
                      onDrugChange={(newDrug,topOutcomes) => this.handleDrugChange(newDrug,topOutcomes)}
               />
               <EffectSelectBox
                      outcomeOptions={this.state.outcomeOptions}
                      selectedDrug={this.state.drugs}
                      onDrugOutcomeChange={(newDrug,newOutcome) => this.handleDrugOutcomeChange(newDrug,newOutcome)}
               />
               </section>
               </div>
               </div>;
    }

    handleDrugChange(newDrug,topOutcomes) {      
        this.setState({ drugs: newDrug,
                        outcome: '',
                        outcomeOptions: topOutcomes}, () => {
          debug('drug updated')
        });
    }

    handleDrugOutcomeChange(newDrug,newOutcome) {
        this.setState({ drugs: newDrug,
                        outcome: newOutcome}, () => {
            // debug("newDrug", newDrug, "newOutcome", newOutcome)
            if ( (newDrug == "") || (newOutcome == "") ) {
                title1 = "Select a drug and effect";
                drawTimeSeriesGraph([],title1,dateformat,blank=true);
            }

            else {
                // Fetch from nsides API
                var api_call = "/api/v1/query?service=nsides&meta=estimateForDrug_Outcome&drugs="+newDrug+"&outcome="+newOutcome;

                request = fetch(api_call) // http://stackoverflow.com/a/41059178
                           .then(function(response) {
                               // Convert to JSON
                               // debug("response", response)
                               return response.json();
                           })
                           .then(function(j) {
                               var data = j["results"][0]["estimates"];
                               debug("drug-effect data", data);

                               /* Set variables */
                               var data1 = data;
                               var title1 = "Proportional Reporting Ratio over time";
                               drawTimeSeriesGraph(data1,title1,dateformat);
                           })
                           .catch(function(ex) {
                               debug('Parsing failed', ex);
                               request = null;
                               var title1 = "Select a drug and effect"; //"No results found";
                               drawTimeSeriesGraph([],title1,dateformat,blank=true);
                           })

            }
        });
    }

}

ReactDOM.render(<NsidesApp/>, document.getElementById("container"))