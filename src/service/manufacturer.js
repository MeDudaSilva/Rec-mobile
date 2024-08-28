import axios from 'axios'

export default class ManufacturerService {
    async getManuFacturers() {
        const response = await axios.get('/manuFacturers/')
        return response.data.results
    }

    async createManufacturer(manufacturer) {
        const response = await axios.post('/manuFacturers/', manufacturer)
        return response.data
    }

    async deleteManufacturer(manufacturer_id) {
        await axios.delete(`/manuFacturers/${manufacturer_id}`)
    }
}
