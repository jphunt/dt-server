const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('User', schema);


