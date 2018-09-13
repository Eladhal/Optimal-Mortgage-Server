const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

const mortgageModel = require('./models/mortgageSchema.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));
// json parser middleware
app.use(express.json());
// static files middleware
app.use(express.static(path.join(__dirname, 'public')));

app.route("/api/mortgage-plan")
    .post((req, res) => {
        let newMortgagePlan = new mortgageModel(req.body);
        newMortgagePlan.save();
        res.send(newMortgagePlan);
    });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "Public/index.html"));
});

app.listen(port,
    () => console.log('server listening on port 3000')
);
