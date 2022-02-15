// Pull in NPM Modules
const {BigQuery} = require('@google-cloud/bigquery');

// Pull in ENV variables
require('dotenv').config();
const bqDataset = process.env.bqDataset || null;
const bqTable = process.env.bqTable || null;
const bqProjectId = process.env.bqProjectId || null;
const kgKey = process.env.kgKey || null;
const gServiceAccount = JSON.parse(process.env.gServiceAccount);

// Create bigQuery Obj
const bigQuery = new BigQuery({
    credentials: gServiceAccount,
    projectId: bqProjectId
});

module.exports = {

    bigAppetite: async(req, res) => {
        try {
            if(req.query.kgKey != kgKey) return res.status(401).send('Not authorized');

            var bqData = {
                source: req.query.source || null,
                date: Date.now(),
                body: JSON.stringify(req.body),
                query: JSON.stringify(req.query),
            }

            await bigQuery
                .dataset(bqDataset)
                .table(bqTable)
                .insert(bqData);
            
            console.log(`Saved to BigQuery: ${bqData}`);
            res.status(200).send();

        } catch (e) {
            console.log(e);
            console.log(JSON.stringify(e));
            res.status(500).send();
        }
    }

};