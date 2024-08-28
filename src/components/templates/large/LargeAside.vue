<script setup>
import { onMounted } from 'vue'

import LogoTitle from '@/components/templates/LogoTitle.vue'

import { useManufacturerStore } from '@/stores/manufacturer'
const manufacturerStore = useManufacturerStore()

onMounted(async () => {
  await manufacturerStore.getManufacturers()
})
</script>
<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/"> <i class="icon mdi mdi-home-outline" /> Home </router-link>
      <router-link to="/categorias">
        <p>Categorias</p>
      </router-link>
      <router-link to="/fabricantes">
        <p>Fabricantes</p>
      </router-link>
      <router-link
        v-for="manufacturer in manufacturerStore.manufacturers"
        :key="manufacturer.id"
        :to="`/produtos/categoria/${manufacturer.id}`"
      >
        <i class="icon mdi" :class="manufacturer.icon"></i> {{ manufacturer.name }}
      </router-link>
    </div>
    <div class="divider" />
    <div class="menu">
      <router-link to="/login"> <i class="icon mdi mdi-account" /> Login </router-link>
    </div>
  </div>
  <logo-title />
</template>
<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  align-self: center;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #eeeeee;
}

.menu {
  padding: 3rem;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}
</style>
