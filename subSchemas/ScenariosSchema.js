const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScenariosSchema = new Schema({
    scenarioType: String,
    scenarioText: String,
    positiveImpacts: [Schema.Types.Mixed],
    negativeImpacts: [Schema.Types.Mixed]
});

module.exports = ScenariosSchema;