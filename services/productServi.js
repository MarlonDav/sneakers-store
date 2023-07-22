import { Product } from '../models/index.js'

export async function getInStockProducts() {
try{
  const products = await Product.find({"existencia":{$gt:0}}) 
  if('existencias' == 0){
    throw new Error("No hay ningun producto en stock")
  }
  return products

}catch (error){
  console.log(error)
  throw new Error(error.message)
}

}


export async function getAllProducts() {
  try{
    const allproducts = await Product.find({  })
    return allproducts

  }catch(error){
    throw new Error(error)

  }
}


const productServi = {
    getInStockProducts,
    getAllProducts,
   
}

export default productServi