const db = require('../config/connection');
const { User, Evaluation } = require('../models');

const userData = require('./userData.json');
const evaluationData = require('./evaluationData.json');

db.once('open', async () => {
    await User.deleteMany({});
    await Evaluation.deleteMany({});

    const users = await User.insertMany(userData);
    const evals = await Evaluation.insertMany(evaluationData);
    console.log('all done!');
    process.exit(0);
})