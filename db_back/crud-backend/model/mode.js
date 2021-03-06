var mongoose      = require('mongoose');

const dataschema  = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const user = module.exports = mongoose.model('user',dataschema);
