import axios from 'axios'

export default class ProductService {
  async getProducts() {
    const response = await axios.get('/products/')
    return response.data.results
  }

  async getProductByManufacturer(manufacturer_id) {
    const response = await axios.get(`/products/?manufacturer__id=${manufacturer_id}`)
    return response.data.results
  }

  async createProduct(product) {
    const response = await axios.post('/products/', product)
    return response.data
  }
}
