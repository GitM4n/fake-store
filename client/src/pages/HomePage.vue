<script setup lang="ts">
import {watch} from 'vue'
import HomeBanner from '../components/sections/HomeBanner.vue'
import ProductsSection from '../components/sections/ProductsSection.vue';
import { useLoader } from '../composables/useLoader';




const loader = useLoader().loader


watch(loader, ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})





</script>

<template>
    <HomeBanner />
    <ProductsSection />

</template>




<style scoped>



</style>