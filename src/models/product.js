const moongose = require('mongoose');

const productSchema = new moongose.Schema({
    name: {
        type: String
    },
    precio: {
        type: String
    },

    descripcion: {
        type: String
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = moongose.model('Product', productSchema);