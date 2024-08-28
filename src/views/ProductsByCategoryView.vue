<script setup>
import ProductList from '@/components/ProductList.vue'
defineProps(['manufacturer_id'])
</script>

<template>
  <product-list :manufacturer_id="manufacturer_id" />
</template>
