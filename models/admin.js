const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const adminSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});

adminSchema.pre('save', function(next) {
    const admin = this;

    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return next(err);
        };

        bcrypt.hash(admin.password, salt, null, function(err, hash) {
            if (err) {
                return next(err);
            }
            console.log(hash);
            admin.password = hash;
            next();
        });
    });
});

adminSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        };

        cb(null, isMatch);
    });
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;