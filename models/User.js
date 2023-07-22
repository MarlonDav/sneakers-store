import { Schema, model } from 'mongoose'

const PrecioEspecialSchema = new Schema({
  nombre_producto: String,
  precio_especial_personal: Number,
  metadata: {
    campo1: String,
    campo2: Number,
  },
});

const userSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    nombre: {
        type: String,
        required: true
    },
    metadata:[
      {
        
       precios_especiales: [PrecioEspecialSchema],
      }
    ]
   
  
}, {
    timestamps: true
})


const User = model('User', userSchema)

export default  User 