import { ref } from 'vue'
import { defineStore } from 'pinia'

import ManufacturerService from '@/service/manufacturer'
const manufacturerService = new ManufacturerService()

export const useManufacturerStore = defineStore('manufacturer', () => {
  const manufacturers = ref([])

  async function getManufacturers() {
    manufacturers.value = await manufacturerService.getManufacturers()
  }

  async function createManufacturer(manufacturer) {
    await manufacturerService.createManufacturer(manufacturer)
    getManufacturers()
  }

  async function deleteManufacturer(manufacturer_id) {
    await manufacturerService.deleteManufacturer(manufacturer_id)
    getManufacturers()
  }

  return { manufacturers, getManufacturers, createManufacturer, deleteManufacturer }
})
