const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    },
);

module.exports = mongoose.model('TrainingData', schema);
