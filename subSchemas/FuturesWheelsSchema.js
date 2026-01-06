const mongoose = require('mongoose');
const { Schema } = mongoose;

const FuturesWheelsSchema = new Schema({
    schema: String,
    generatedAt: String,
    wheels: [Schema.Types.Mixed]
},{
    toJSON:{virtuals: true},
    toObject:{virtuals: true}
});

// Relação entre Projects e Futures Wheels pelo mongoose
FuturesWheelsSchema.virtual('projects', {
    ref: 'FuturesWheels',
    localField: '_id',
    foreignField: 'futureswheels'
});

FuturesWheelsSchema.pre('save', async function (next) {
    const futureswheels = this;
    next();
});

module.exports = FuturesWheelsSchema;