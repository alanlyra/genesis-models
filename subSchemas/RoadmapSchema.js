const mongoose = require('mongoose');

const DocumentSchema = require('./DocumentSchema');
const { Schema } = mongoose;

const RoadmapSchema = new Schema({
    document: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document'
    },
    sentence: String,
    forecast: String,
    forecastDate: String,
    explicitDate: String
},{
    toJSON:{virtuals: true},
    toObject:{virtuals: true}
});

// Relação entre Projects e Roadmap pelo mongoose
RoadmapSchema.virtual('projects', {
    ref: 'Roadmap',
    localField: '_id',
    foreignField: 'roadmap'
})

RoadmapSchema.pre('save', async function (next) {
    const roadmap = this
    next()
})

module.exports = RoadmapSchema;