const express = require("express");
const path = require('path');
const app = express();
// const port = process.env.PORT || 8080;
const port = 3000;
const mongoose = require('mongoose');
const mongoDB = 'mongodb://eladh:tkgs1981@ds157422.mlab.com:57422/mortgagedb';
mongoose.connect(mongoDB);
const utility = require('./Utility');

const mortgageModel = require('./models/mortgageSchema.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));
// json parser middleware
app.use(express.json());
// static files middleware
app.use(express.static(path.join(__dirname, 'public')));

app.route("/api/mortgage-plan")
    .post((req, res) => {
        const mortgageMix = utility.getMortgageMix(req.body);
        const financingPercent = req.body.mortgageSum / req.body.propValue;
        console.log(mortgageMix);
        if (mortgageMix) {
            mortgageModel.find({type: mortgageMix}, function (err, docs) {
                console.log(docs);
                const arrMortSamefinancPercent = utility.getarrMortSamefinancPercent(financingPercent, docs); // collect all docs with same finance Percent range as the user mortgage
                const allPlans = utility.getAllMortPlans(arrMortSamefinancPercent); // collect all plans from the relevant mortgages(arrMortSamefinancPercent)
                const InterestCompareObj = utility.getInterestCompareObj(req.body.plans, allPlans);
                res.send(InterestCompareObj);
            });
        }
        else {
            // TBD When the user entered a mix that not exist...
        }

    });

// let newMortgagePlan = new mortgageModel(req.body);
// newMortgagePlan.save();
// res.send(newMortgagePlan);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "Public/index.html"));
});

app.listen(port,
    () => console.log('server listening on port 3000')
);

