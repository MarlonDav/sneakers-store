import { User } from '../models/index.js'
import { userServi } from '../services/index.js'



export async function getPriceForProduct(req, res) {
    const { user_id, nombre_producto } = req.params;
  
    try {
      
      const result = await userServi.getIdUserProducts(user_id, nombre_producto);
  
      
      if (result.error) {
        return res.status(404).json({ message: result.error });
      }
  
     
      return res.json({ precio: result.precio, metadata: result.metadata });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor.' });
    }
  }
export async function getAllUser(req, res) {
    try{
      const alluser = await userServi.getAllUser()
      return res.status(200).json({message: alluser})
    }catch (error){
      console.log(error)
      return res.status(400).json({ error })
    }
  }



const userControl = {
    getPriceForProduct,
    getAllUser,
   
}

export default userControl