<script setup>
import { reactive, onMounted } from 'vue'
import { useManufacturerStore } from '@/stores/manufacturer'

const manufacturerStore = useManufacturerStore()
const newManufacturer = reactive({
  name: '',
})

async function addManufacturer() {
  await manufacturerStore.createManufacturer(newManufacturer)
  newManufacturer.name = ''
}

onMounted(async () => {
  await manufacturerStore.getManufacturers()
})
</script>

<template>
  <div class="container">
    <div class="manufacturer-add">
      <input type="text" v-model="newManufacturer.name" placeholder="Nome" />
      <button @click="addManufacturer">Adicionar</button>
    </div>

    <div class="manufacturer-list">
      <div v-if="manufacturerStore.manufacturers.length === 0">
        <p>Fabricantes não encontradas!!!</p>
      </div>
      <table class="manufacturer-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="manufacturer in manufacturerStore.manufacturers" :key="manufacturer.id">
            <td>{{ manufacturer.id }}</td>
            <td>{{ manufacturer.name }}</td>
            <td><span class="mdi mdi-delete" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.manufacturer-list {
  width: 30vw;
  border-collapse: collapse;

  & th {
    font-weight: bold;
  }

  & tr:nth-child(odd) {
    background-color: beige;
  }
}
</style>
