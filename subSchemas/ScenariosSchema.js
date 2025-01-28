const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScenariosSchema = new Schema({
    plausible: String,
    pessimistic: String,
    optimistic: String,
    plausibleGenerated: String,
    pessimisticGenerated: String,
    optimisticGenerated: String
});

module.exports = ScenariosSchema;