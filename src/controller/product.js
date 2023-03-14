const { httpError } = require("../helpers/hanledeError");
const productModel = require("../models/product");
const resposeApi = require("../helpers/responseApi");

const getProducts = async (req, res) => {
   const apiResponse = new resposeApi()
  try {
    const listProducts = await productModel.find();
    if (listProducts.length > 0) {
      res.json(listProducts);

    } else {
      res.json('no existe nigun producto');

    }
  } catch (error) {
    httpError(res, error);

  }
}

const getProduct = async (req, res) => {
  try {
    const oneProduct = await productModel.findById(req.params.id);
    res.send({ data: oneProduct });

  } catch (error) {
    httpError(res, error);
  }

}


const createProducts = async (req, res) => {
  try {
    const { name, precio, descripcion } = req.body;
    const resDetail = await productModel.create({ name, precio, descripcion });

    res.send({ data: resDetail });
  } catch (error) {
    httpError(res, error);
  }
}


const updateProducts = async (req, res) => { }


const deleteProducts = async (req, res) => { }


module.exports = { getProducts, getProduct, createProducts, updateProducts, deleteProducts };
