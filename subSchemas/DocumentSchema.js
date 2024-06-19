const mongoose = require('mongoose');
const { Schema } = mongoose;

const PreProcessingService = require('../services/PreProcessingService')

const DocumentSchema = new Schema({
    name: String,
    title: String,
    description: String,
    uploadDate: Date,
    URL: String,
    author: String,
    doi: String,
    publisher: String,
    subject: String,
    issn: String,
    creator: String,
    producer: String,
    roadmapStatus: String,
    preprocessing: {
        text: String,
        nerTaggedText: String,
        sentences: [Schema.Types.Mixed]
    }
},{
    toJSON:{virtuals: true},
    toObject:{virtuals: true}
});

// Relação entre Projects e Document pelo mongoose
DocumentSchema.virtual('projects', {
    ref: 'Document',
    localField: '_id',
    foreignField: 'bibliometrics.documents'
})

// Relação entre Roadmap e Document pelo mongoose
DocumentSchema.virtual('roadmap', {
    ref: 'RoadmapDocument',
    localField: '_id',
    foreignField: 'roadmap.document'
})

DocumentSchema.pre('save', async function (next) {
    const document = this
    next()
})

DocumentSchema.methods.preProcessing = PreProcessingService.preProcessing;

const Document = mongoose.model('Document', DocumentSchema, 'Documents')

module.exports = Document