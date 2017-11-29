import { Number } from 'core-js/library/web/timers';

// server/models/Event.js
/*
 |--------------------------------------
 | Event Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    block: { type: Number, required: true },
    flat: { type: Number, required: true },
    owner: { type: Boolean, required: true },
    phone: { type: String, required: false },
    viewPublic: { type: Boolean, required: true }
});

module.exports = mongoose.model('Resident', eventSchema);