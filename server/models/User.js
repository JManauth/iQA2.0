const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
        userType: {
            type: String,
            required:true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },

        teamLead: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

//hash user password

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// use this code to query amount of teamm mates / evaluations
// userSchema.virtual('bookCount').get(function () {
//     return this.savedBooks.length;
// });

const User = model('User', userSchema);

module.exports = User;