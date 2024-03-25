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
});


module.exports = RoadmapSchema;