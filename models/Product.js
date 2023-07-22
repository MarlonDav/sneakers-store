import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio_base: {
        type: Number,
        required: true 

    },
    existencia:  {
        type: Number,
        required: true
    },
    
   
        

}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export  default  Product  
