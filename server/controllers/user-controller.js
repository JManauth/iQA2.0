// import user model
const { User, Evaluation } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {

    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.sttatus(400).json({ message: 'Something is Wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    async createEval ({body}, res) {
        const eval = await Evaluation.create(body);

        if(!eval) {
            return res.status(400).json({ message: 'Something went wrong submitting eval!' });
        }
        
    },
};