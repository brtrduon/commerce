const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const adminSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});

adminSchema.pre('save', (next) => {
    const admin = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        };

        bcrypt.hash(admin.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }

            admin.password = hash;
            next();
        });
    });
});

adminSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        };

        callback(null, isMatch);
    });
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;