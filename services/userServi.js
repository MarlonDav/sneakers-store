import { User } from '../models/index.js'


export async function getIdUserProducts(user_id, nombre_producto) {
  try {
    const cliente = await User.findOne({ id: user_id });

    if (!cliente) {
      return { error: 'Cliente no encontrado' };
    }

    // Verifica si hay metadata y si contiene precios_especiales
    if (cliente.metadata && cliente.metadata.length > 0) {
      for (const metadataObj of cliente.metadata) {
        if (
          metadataObj.precios_especiales &&
          metadataObj.precios_especiales.length > 0
        ) {
          const precioEspecial = metadataObj.precios_especiales.find(
            (precio) => precio.nombre_producto === nombre_producto
          );

          if (precioEspecial) {
            return { precio: precioEspecial.precio_especial_personal, metadata: precioEspecial.metadata };
          }
        }
      }
    }

    return { precio: 'Precio base', metadata: null };
  } catch (error) {
    throw new Error(error);
  }
}


export async function getAllUser() {
  try{
    const alluser= await User.find({  })
    return alluser

  }catch(error){
    throw new Error(error)

  }
}


const userServi = {
  getAllUser,
  getIdUserProducts,
  
}

export default userServi
