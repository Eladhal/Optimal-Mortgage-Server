const mongoose = require('mongoose');

const schema = mongoose.Schema;
const mortgageSchema = new schema({
    Id: schema.Types.ObjectId,
    mortgageSum: Number,
    propValue: Number,
    netIncome: Number,
    plans: [{plan: String, sum: Number, period: String, interest: Number}]
});
module.exports = mongoose.model("mortgageModel", mortgageSchema);