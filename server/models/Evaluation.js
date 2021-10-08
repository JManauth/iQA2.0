const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const evaluationSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        agentName: {
            type: String,
            required: true,
            trim: true
        },

        author: {
            type: String,
            required: true,
            trim: true
        },

        teamleadName: {
            type: String,
            required: true,
            trim: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },

        empathyAndPassion: {
            type: String,
            required: true,
            trim: true,
        },
        empathyAndPassionFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        commitment: {
            type: String,
            required: true,
            trim: true,
        },
        commitmentFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        anticipation: {
            type: String,
            required: true,
            trim: true,
        },
        anticipationFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        clarity: {
            type: String,
            required: true,
            trim: true,
        },
        clarityFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        everyCustomerMatters: {
            type: String,
            required: true,
            trim: true,
        },
        everyCustomerMattersFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        finalScore: {
            type: String,
            required: true,
            trim: true,
        }

    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

const Evaluation = model('Evaluation', evaluationSchema);

module.exports = Evaluation;