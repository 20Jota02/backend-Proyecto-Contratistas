const { httpError } = require("../helpers/hanledeError");
const productModel = require("../models/product");

const getProducts = async (req, res) => {
    console.log('holaaa')
}

const getProduct = async (req, res) => {
    console.log('biene')

}


const createProducts = async (req, res) => {
    try {
        const { name, precio, descripcion } = req.body;
        const resDetail = await productModel.create({name, precio, descripcion });
    
        res.send({ data: resDetail });
      } catch (error) {
        httpError(res, error);
      }
}


const updateProducts = async (req, res) => {}


const deleteProducts = async (req, res) => {}


module.exports = {getProducts,getProduct,createProducts,updateProducts,deleteProducts};
