import * as ProductService from '../services/product.service.js'

export const getProducts = async (req, res, next) => {
  try {
    const result = await ProductService.getProducts(req.query)
    res.json(result)
  } catch (err) { next(err) }
}

export const getProductBySlug = async (req, res, next) => {
  try {
    const product = await ProductService.getProductBySlug(req.params.slug)
    res.json(product)
  } catch (err) { next(err) }
}

export const createProduct = async (req, res, next) => {
  try {
    const product = await ProductService.createProduct(req.body, req.files)
    res.status(201).json(product)
  } catch (err) { next(err) }
}

export const updateProduct = async (req, res, next) => {
  try {
    const product = await ProductService.updateProduct(req.params.id, req.body, req.files)
    res.json(product)
  } catch (err) { next(err) }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const result = await ProductService.deleteProduct(req.params.id)
    res.json(result)
  } catch (err) { next(err) }
}

export const getCategories = async (req, res, next) => {
  try {
    const categories = await ProductService.getCategories()
    res.json(categories)
  } catch (err) { next(err) }
}

export const createCategory = async (req, res, next) => {
  try {
    const category = await ProductService.createCategory(req.body)
    res.status(201).json(category)
  } catch (err) { next(err) }
}