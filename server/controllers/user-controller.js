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

    async createEval({ body }, res) {
        const eval = await Evaluation.create(body);

        if (!eval) {
            return res.status(400).json({ message: 'Something went wrong submitting eval!' });
        }

    },

    async login({ body }, res) {
        const user = await User.findOne({ email: body.email });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    async findAllUsers({ body }, res){
        const allUser = await User.find();
        if (!allUser){
            return res.status(400).json({ message: "can't find all users"});
        }
    },
};