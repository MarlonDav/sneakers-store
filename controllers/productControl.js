import { productServi } from '../services/index.js'


export async function getInStockProducts(req, res) {
  try{
    const allproducts = await productServi.getInStockProducts()
    return res.status(200).json({message: allproducts})
  }catch (error){
    console.log(error)
    return res.status(400).json({ error })
  }
}
export async function getAllProducts(req, res) {
  try{
    const allproducts = await productServi.getAllProducts()
    return res.status(200).json({message: allproducts})
  }catch (error){
    console.log(error)
    return res.status(400).json({ error })
  }
}

const productControl = {
  getInStockProducts,
  getAllProducts,
  
}

  export default productControl  
