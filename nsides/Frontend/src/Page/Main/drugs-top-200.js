var drugs = [
  { value: "1151789", label: "Etanercept" },
  { value: "1119119", label: "adalimumab" },
  { value: "1112807", label: "Aspirin" },
  { value: "722424", label: "Interferon beta-1a" },
  { value: "1501700", label: "Thyroxine" },
  { value: "1125315", label: "Acetaminophen" },
  { value: "1545958", label: "atorvastatin" },
  { value: "1539403", label: "Simvastatin" },
  { value: "956874", label: "Furosemide" },
  { value: "735843", label: "natalizumab" },
  { value: "923645", label: "Omeprazole" },
  { value: "1503297", label: "Metformin" },
  { value: "1551099", label: "Prednisone" },
  { value: "1332418", label: "Amlodipine" },
  { value: "1305058", label: "Methotrexate" },
  { value: "1307046", label: "Metoprolol" },
  { value: "766814", label: "quetiapine" },
  { value: "937368", label: "infliximab" },
  { value: "19135832", label: "Multivitamin preparation" },
  { value: "1308216", label: "Lisinopril" },
  { value: "904453", label: "Esomeprazole" },
  { value: "1154343", label: "Albuterol" },
  { value: "1310149", label: "Warfarin" },
  { value: "1547504", label: "rosiglitazone" },
  { value: "734354", label: "pregabalin" },
  { value: "1589505", label: "Levonorgestrel" },
  { value: "1549786", label: "Ethinyl Estradiol" },
  { value: "19026972", label: "lenalidomide" },
  { value: "1177480", label: "Ibuprofen" },
  { value: "797399", label: "gabapentin" },
  { value: "1154029", label: "Fentanyl" },
  { value: "1518254", label: "Dexamethasone" },
  { value: "19111620", label: "Folic Acid" },
  { value: "1124957", label: "Oxycodone" },
  { value: "781039", label: "Alprazolam" },
  { value: "1762711", label: "Ribavirin" },
  { value: "780442", label: "varenicline" },
  { value: "1322184", label: "clopidogrel" },
  { value: "1549080", label: "Estrogens" },
  { value: "1502905", label: "Insulin Glargine" },
  { value: "1106776", label: "tiotropium" },
  { value: "1510813", label: "rosuvastatin" },
  { value: "19092849", label: "Magnesium Chloride" },
  { value: "948078", label: "pantoprazole" },
  { value: "40166942", label: "Calcium Chloride / Glucose / Lactate / Magnesium Chloride / Sodium Chloride Intraperitoneal Solution" },
  { value: "739138", label: "Sertraline" },
  { value: "1314002", label: "Atenolol" },
  { value: "744740", label: "zolpidem" },
  { value: "798874", label: "Clonazepam" },
  { value: "1550557", label: "prednisolone" },
  { value: "1524674", label: "zoledronic acid" },
  { value: "1174888", label: "Hydrocodone" },
  { value: "974166", label: "Hydrochlorothiazide" },
  { value: "791967", label: "Lorazepam" },
  { value: "750982", label: "Bupropion" },
  { value: "722031", label: "Paroxetine" },
  { value: "1118084", label: "celecoxib" },
  { value: "1133201", label: "Buprenorphine" },
  { value: "715259", label: "duloxetine" },
  { value: "1583722", label: "exenatide" },
  { value: "1149380", label: "fluticasone" },
  { value: "1189754", label: "rofecoxib" },
  { value: "1308842", label: "valsartan" },
  { value: "743670", label: "venlafaxine" },
  { value: "906780", label: "Metoclopramide" },
  { value: "1110410", label: "Morphine" },
  { value: "1337068", label: "ambrisentan" },
  { value: "929887", label: "lansoprazole" },
  { value: "1310317", label: "Cyclophosphamide" },
  { value: "1521987", label: "Teriparatide" },
  { value: "797617", label: "Citalopram" },
  { value: "1517824", label: "Niacin" },
  { value: "745466", label: "Valproate" },
  { value: "19009405", label: "Vitamin D" },
  { value: "1103314", label: "Tramadol" },
  { value: "19018544", label: "Calcium" },
  { value: "1557272", label: "Alendronate" },
  { value: "1115008", label: "Naproxen" },
  { value: "705103", label: "lamotrigine" },
  { value: "1137529", label: "salmeterol" },
  { value: "1334456", label: "Ramipril" },
  { value: "735979", label: "Risperidone" },
  { value: "1397141", label: "bevacizumab" },
  { value: "1314273", label: "rituximab" },
  { value: "800878", label: "Clozapine" },
  { value: "961047", label: "Ranitidine" },
  { value: "755695", label: "Fluoxetine" },
  { value: "19049105", label: "Potassium Chloride" },
  { value: "715939", label: "Escitalopram" },
  { value: "1167322", label: "Allopurinol" },
  { value: "43526424", label: "dimethyl fumarate" },
  { value: "785788", label: "olanzapine" },
  { value: "723013", label: "Diazepam" },
  { value: "1316262", label: "sildenafil" },
  { value: "40228152", label: "dabigatran etexilate" },
  { value: "1346823", label: "carvedilol" },
  { value: "1506270", label: "Methylprednisolone" },
  { value: "19010482", label: "Cyclosporine" },
  { value: "1326303", label: "Digoxin" },
  { value: "1714165", label: "peginterferon alfa-2a" },
  { value: "1154161", label: "montelukast" },
  { value: "718583", label: "Nicotine" },
  { value: "950637", label: "Tacrolimus" },
  { value: "1129625", label: "Diphenhydramine" },
  { value: "757688", label: "aripiprazole" },
  { value: "1367571", label: "Heparin" },
  { value: "1196677", label: "formoterol" },
  { value: "1367500", label: "Losartan" },
  { value: "1000560", label: "Ondansetron" },
  { value: "970250", label: "Spironolactone" },
  { value: "1124300", label: "Diclofenac" },
  { value: "955632", label: "Fluorouracil" },
  { value: "1328165", label: "Diltiazem" },
  { value: "40241331", label: "rivaroxaban" },
  { value: "19122121", label: "Insulin" },
  { value: "40239330", label: "telaprevir" },
  { value: "1742253", label: "Levofloxacin" },
  { value: "1338512", label: "Doxorubicin" },
  { value: "710062", label: "Amitriptyline" },
  { value: "1107830", label: "Loratadine" },
  { value: "1797513", label: "Ciprofloxacin" },
  { value: "742267", label: "topiramate" },
  { value: "1500211", label: "Medroxyprogesterone" },
  { value: "1337620", label: "capecitabine" },
  { value: "984232", label: "Isotretinoin" },
  { value: "1338005", label: "Bisoprolol" },
  { value: "703547", label: "Trazodone" },
  { value: "715233", label: "Baclofen" },
  { value: "1550023", label: "Insulin Lispro" },
  { value: "1548195", label: "Estradiol" },
  { value: "1341927", label: "Enalapril" },
  { value: "1580747", label: "sitagliptin" },
  { value: "740275", label: "Carbamazepine" },
  { value: "924566", label: "tamsulosin" },
  { value: "711584", label: "Levetiracetam" },
  { value: "19008339", label: "Vitamin A" },
  { value: "1304107", label: "imatinib" },
  { value: "19003999", label: "mycophenolate mofetil" },
  { value: "1321636", label: "bosentan" },
  { value: "1378382", label: "Paclitaxel" },
  { value: "705944", label: "Methylphenidate" },
  { value: "1325363", label: "erlotinib" },
  { value: "1754994", label: "Fluconazole" },
  { value: "1301025", label: "Enoxaparin" },
  { value: "40222444", label: "denosumab" },
  { value: "19035704", label: "Calcium Carbonate" },
  { value: "1309944", label: "Amiodarone" },
  { value: "1149196", label: "Cetirizine" },
  { value: "1351557", label: "candesartan" },
  { value: "953076", label: "Famotidine" },
  { value: "1597756", label: "glimepiride" },
  { value: "1551860", label: "Pravastatin" },
  { value: "1560171", label: "Glipizide" },
  { value: "725131", label: "Mirtazapine" },
  { value: "1551803", label: "Fenofibrate" },
  { value: "1397599", label: "Cisplatin" },
  { value: "1308290", label: "Vincristine" },
  { value: "1344905", label: "Carboplatin" },
  { value: "1703687", label: "Acyclovir" },
  { value: "1525215", label: "pioglitazone" },
  { value: "1797155", label: "peginterferon alfa-2b" },
  { value: "1336539", label: "sunitinib" },
  { value: "1559684", label: "Glyburide" },
  { value: "1361711", label: "Nitroglycerin" },
  { value: "740910", label: "Phenytoin" },
  { value: "1526475", label: "ezetimibe" },
  { value: "19137042", label: "Thalidomide" },
  { value: "1777087", label: "Hydroxychloroquine" },
  { value: "19014878", label: "Azathioprine" },
  { value: "939259", label: "Budesonide" },
  { value: "40165651", label: "onabotulinumtoxinA" },
  { value: "19011773", label: "Ascorbic Acid" },
  { value: "1318011", label: "oxaliplatin" },
  { value: "1748921", label: "Ritonavir" },
  { value: "1315942", label: "docetaxel" },
  { value: "968426", label: "mesalamine" },
  { value: "1398937", label: "Clonidine" },
  { value: "1153428", label: "fexofenadine" },
  { value: "941258", label: "Docusate" },
  { value: "40226742", label: "olmesartan" },
  { value: "1318853", label: "Nifedipine" },
  { value: "778711", label: "cyclobenzaprine" },
  { value: "19080458", label: "eculizumab" },
  { value: "1713332", label: "Amoxicillin" },
  { value: "1351541", label: "Leuprolide" },
  { value: "1734104", label: "Azithromycin" },
  { value: "1388796", label: "Leucovorin" },
  { value: "1336825", label: "bortezomib" },
  { value: "1307863", label: "Verapamil" },
  { value: "1347384", label: "irbesartan" },
  { value: "769935", label: "Sodium Oxybate" },
  { value: "1150345", label: "meloxicam" },
  { value: "1153013", label: "Promethazine" },
  { value: "975125", label: "Hydrocortisone" },
  { value: "1314924", label: "gemcitabine" },
  { value: "1707687", label: "Vancomycin" },
  { value: "1836430", label: "Sulfamethoxazole" },
  { value: "1353766", label: "Propranolol" },
  { value: "1103640", label: "Methadone" },
  { value: "40226579", label: "fingolimod" },
  { value: "19135832", label: "Multivitamin preparation" }
];
// note some drugs have two rxnorm ids, heparin and Vitamin A
var rxnormDrugs = [
  { value: '214555', label: 'Etanercept'},
  { value: '327361', label: 'adalimumab'},
  { value: '1191', label: 'Aspirin'},
  { value: '75917', label: 'Interferon beta-1a'},
  { value: '10582', label: 'Thyroxine'},
  { value: '161', label: 'Acetaminophen'},
  { value: '83367', label: 'atorvastatin'},
  { value: '36567', label: 'Simvastatin'},
  { value:'4603', label: 'Furosemide'},
  { value: '354770', label: 'natalizumab'},
  { value: '7646', label: 'Omeprazole'},
  { value: '6809', label: 'Metformin'},
  { value: '8640', label: 'Prednisone'},
  { value: '17767', label: 'Amlodipine'},
  { value: '6851', label: 'Methotrexate'},
  { value: '6918', label: 'Metoprolol'},
  { value: '51272', label: 'quetiapine'},
  { value: '191831', label: 'infliximab'},
  { value: '29046', label: 'Lisinopril'},
  { value: '283742', label: 'Esomeprazole'},
  { value: '435', label: 'Albuterol'},
  { value: '11289', label: 'Warfarin'},
  { value: '84108', label: 'rosiglitazone'},
  { value: '187832', label: 'pregabalin'},
  { value: '6373', label: 'Levonorgestrel'},
  { value: '4124', label: 'Ethinyl Estradiol'},
  { value: '342369', label: 'lenalidomide'},
  { value: '5640', label: 'Ibuprofen'},
  { value: '25480', label: 'gabapentin'},
  { value: '4337', label: 'Fentanyl'},
  { value: '3264', label: 'Dexamethasone'},
  { value: '4511', label: 'Folic Acid'},
  { value: '7804', label: 'Oxycodone'},
  { value: '596', label: 'Alprazolam'},
  { value: '9344', label: 'Ribavirin'},
  { value: '591622', label: 'varenicline'},
  { value: '32968', label: 'clopidogrel'},
  { value: '4100', label: 'Estrogens'},
  { value: '274783', label: 'Insulin Glargine'},
  { value: '69120', label: 'tiotropium'},
  { value: '301542', label: 'rosuvastatin'},
  { value: '6579', label: 'Magnesium Chloride'},
  { value: '40790', label: 'pantoprazole'},
  { value: '875807', label: 'Calcium Chloride / Glucose / Lactate/ Magnesium Chloride / Sodium Chloride Intraperitoneal Solution'},
  { value: '36437', label: 'Sertraline'},
  { value: '1202', label: 'Atenolol'},
  { value: '39993', label: 'zolpidem'},
  { value: '2598', label: 'Clonazepam'},
  { value: '8638', label: 'prednisolone'},
  { value: '77655', label: 'zoledronic acid'},
  { value: '5489', label: 'Hydrocodone'},
  { value: '5487', label: 'Hydrochlorothiazide'},
  { value: '6470', label: 'Lorazepam'},
  { value: '42347', label: 'Bupropion'},
  { value: '32937', label: 'Paroxetine'},
  { value: '140587', label: 'celecoxib'},
  { value: '1819', label: 'Buprenorphine'},
  { value: '72625', label: 'duloxetine'},
  { value: '60548', label: 'exenatide'},
  { value:'41126', label: 'fluticasone'},
  { value: '232158', label: 'rofecoxib'},
  { value: '69749', label: 'valsartan'},
  { value: '39786', label: 'venlafaxine'},
  { value: '6915', label: 'Metoclopramide'},
  { value: '7052', label: 'Morphine'},
  { value: '358274', label: 'ambrisentan'},
  { value: '17128', label: 'lansoprazole'},
  { value: '3002', label: 'Cyclophosphamide'},
  { value: '32915', label: 'Teriparatide'},
  { value: '2556', label: 'Citalopram'},
  { value: '7393', label: 'Niacin'},
  { value: '40254', label: 'Valproate'},
  { value: '11253', label: 'Vitamin D'},
  { value: '10689', label: 'Tramadol'},
  { value: '1895', label: 'Calcium'},
  { value: '46041', label: 'Alendronate'},
  { value: '7258', label: 'Naproxen'},
  { value: '28439', label: 'lamotrigine'},
  { value: '36117', label: 'salmeterol'},
  { value: '35296', label: 'Ramipril'},
  { value: '35636', label: 'Risperidone'},
  { value: '253337', label: 'bevacizumab'},
  { value: '121191', label: 'rituximab'},
  { value: '2626', label: 'Clozapine'},
  { value: '9143', label: 'Ranitidine'},
  { value: '4493', label: 'Fluoxetine'},
  { value: '8591', label: 'PotassiumChloride'},
  { value: '321988', label: 'Escitalopram'},
  { value: '519', label: 'Allopurinol'},
  { value: '1373478', label: 'dimethyl fumarate'},
  { value: '61381', label: 'olanzapine'},
  { value: '3322', label: 'Diazepam'},
  { value: '136411', label: 'sildenafil'},
  { value: '1037042', label: 'dabigatran etexilate'},
  { value: '20352', label: 'carvedilol'},
  { value: '6902', label: 'Methylprednisolone'},
  { value: '3008', label: 'Cyclosporine'},
  { value: '3407', label: 'Digoxin'},
  { value: '120608', label: 'peginterferon alfa-2a'},
  { value: '88249', label: 'montelukast'},
  { value: '7407', label: 'Nicotine'},
  { value: '42316', label: 'Tacrolimus'},
  { value: '3498', label: 'Diphenhydramine'},
  { value: '89013', label: 'aripiprazole'},
  { value: '235473', label: 'Heparin'},
  { value: '25255', label: 'formoterol'},
  { value: '52175', label: 'Losartan'},
  { value: '26225', label: 'Ondansetron'},
  { value: '9997', label: 'Spironolactone'},
  { value: '3355', label: 'Diclofenac'},
  { value: '4492', label: 'Fluorouracil'},
  { value: '3443', label: 'Diltiazem'},
  { value: '1114195', label: 'rivaroxaban'},
  { value: undefined, label: 'Insulin'},
  { value: '1102261', label: 'telaprevir'},
  { value: '82122', label: 'Levofloxacin'},
  { value: '3639', label: 'Doxorubicin'},
  { value: '704', label: 'Amitriptyline'},
  { value: '28889', label: 'Loratadine'},
  { value: '2551', label:'Ciprofloxacin'},
  { value: '38404', label: 'topiramate'},
  { value: '6691', label: 'Medroxyprogesterone'},
  { value: '194000', label: 'capecitabine'},
  { value: '6064', label: 'Isotretinoin'},
  { value: '19484', label: 'Bisoprolol'},
  { value: '10737', label:'Trazodone'},
  { value: '1292', label: 'Baclofen'},
  { value: '86009', label: 'InsulinLispro'},
  { value: '4083', label: 'Estradiol'},
  { value: '3827', label: 'Enalapril'},
  { value: '593411', label: 'sitagliptin'},
  { value: '2002', label: 'Carbamazepine'},
  { value: '77492', label: 'tamsulosin'},
  { value: '114477', label: 'Levetiracetam'},
  { value: '11246', label: 'Vitamin A'},
  { value: '282388', label: 'imatinib'},
  { value: '68149', label: 'mycophenolate mofetil'},
  { value: '75207', label: 'bosentan'},
  { value: '56946', label: 'Paclitaxel'},
  { value: '6901', label: 'Methylphenidate'},
  { value: '337525', label: 'erlotinib'},
  { value: '4450', label: 'Fluconazole'},
  { value:'67108', label: 'Enoxaparin'},
  { value: '993449', label: 'denosumab'},
  { value: '1897', label: 'Calcium Carbonate'},
  { value: '703', label: 'Amiodarone'},
  { value: '20610', label: 'Cetirizine'},
  { value: '214354', label: 'candesartan'},
  { value: '4278', label: 'Famotidine'},
  { value: '25789', label: 'glimepiride'},
  { value: '42463', label: 'Pravastatin'},
  { value: '4821', label: 'Glipizide'},
  { value: '15996', label: 'Mirtazapine'},
  { value: '8703', label: 'Fenofibrate'},
  { value: '2555', label: 'Cisplatin'},
  { value: '11202', label: 'Vincristine'},
  { value: '40048', label: 'Carboplatin'},
  { value: '281', label: 'Acyclovir'},
  { value: '33738', label: 'pioglitazone'},
  { value: '253453', label: 'peginterferon alfa-2b'},
  { value: '357977', label: 'sunitinib'},
  { value: '4815', label: 'Glyburide'},
  { value: '4917', label: 'Nitroglycerin'},
  { value: '8183', label: 'Phenytoin'},
  { value: '341248', label: 'ezetimibe'},
  { value: '10432', label: 'Thalidomide'},
  { value: '5521', label: 'Hydroxychloroquine'},
  { value: '1256', label: 'Azathioprine'},
  { value: '19831', label: 'Budesonide'},
  { value: '860189', label: 'onabotulinumtoxinA'},
  { value: '1151', label: 'Ascorbic Acid'},
  { value: '32592', label: 'oxaliplatin'},
  { value: '85762', label: 'Ritonavir'},
  { value: '72962', label: 'docetaxel'},
  { value: '52582', label: 'mesalamine'},
  { value: '2599', label: 'Clonidine'},
  { value: '87636', label: 'fexofenadine'},
  { value: '82003', label: 'Docusate'},
  { value: '321064', label: 'olmesartan'},
  { value: '7417', label: 'Nifedipine'},
  { value: '21949', label: 'cyclobenzaprine'},
  { value: '591781', label: 'eculizumab'},
  { value: '723', label: 'Amoxicillin'},
  { value: '42375', label: 'Leuprolide'},
  { value: '18631', label: 'Azithromycin'},
  { value: '6313', label: 'Leucovorin'},
  { value: '358258', label: 'bortezomib'},
  { value: '11170', label: 'Verapamil'},
  { value: '83818', label: 'irbesartan'},
  { value: '9899', label: 'Sodium Oxybate'},
  { value: '41493', label: 'meloxicam'},
  { value: '8745', label: 'Promethazine'},
  { value: '5492', label: 'Hydrocortisone'},
  { value: '12574', label: 'gemcitabine'},
  { value: '11124', label: 'Vancomycin'},
  { value: '10180', label: 'Sulfamethoxazole'},
  { value: '8787', label: 'Propranolol'},
  { value: '6813', label: 'Methadone'},
  { value:'1012892', label: 'fingolimod'},
  { value: undefined, label: 'Multivitamin preparation'}
]
export default rxnormDrugs;