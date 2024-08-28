import { ref } from 'vue'
import { defineStore } from 'pinia'

import ProductService from '@/service/product'
const productService = new ProductService()

export const useProductStore = defineStore('product', () => {
  const products = ref([])

  async function getProducts() {
    products.value = await productService.getProducts()
  }

  async function getProductsByManufacturer(manufacturer_id) {
    products.value = await productService.getProductByManufacturer(manufacturer_id)
  }

  async function createProduct(product) {
    await productService.createProduct(product)
    getProducts()
  }

  return { products, createProduct, getProducts, getProductsByManufacturer }
})
