const mongoose = require('mongoose');
const { title } = require('process');
const { Schema } = mongoose;

const ScopusResearchSchema = new Schema({
    title: String,
    doi: String,
    pdfLink: String,
    authors: String,
    publicationName: String,
    coverDate: String,
    description: String,
    aggregationType: String,
    citedByCount: String,
    authkeywords: String,
    coverDisplayDate: String,
    volume: String,
    issueIdentifier: String,
    pageRange: String,
    affiliation: [],
    articleNumber: String,
    relatedslinks: [],
    base: String
},{
    toJSON:{virtuals: true},
    toObject:{virtuals: true}
});

// Relação entre Projects e Roadmap pelo mongoose
ScopusResearchSchema.virtual('projects', {
    ref: 'ScopusResearch',
    localField: '_id',
    foreignField: 'scopusResearch'
})

ScopusResearchSchema.pre('save', async function (next) {
    const scopusResearch = this
    next()
})

module.exports = ScopusResearchSchema;