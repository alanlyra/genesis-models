const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScenariosSchema = new Schema({
    scenarioType: String,
    scenarioText: String,
    positiveImpacts: [Schema.Types.Mixed],
    negativeImpacts: [Schema.Types.Mixed]
},{
    toJSON:{virtuals: true},
    toObject:{virtuals: true}
});

// Relação entre Projects e Scenarios pelo mongoose
ScenariosSchema.virtual('projects', {
    ref: 'Scenarios',
    localField: '_id',
    foreignField: 'scenarios'
});

ScenariosSchema.pre('save', async function (next) {
    const scenarios = this;
    next();
});

module.exports = ScenariosSchema;