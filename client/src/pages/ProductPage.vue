<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { productsApi } from '../api/products';
import {useRoute} from 'vue-router';

const productsStore = productsApi()
const route = useRoute()


const product = ref()

onMounted(async() => {
    try {
        product.value = await productsStore.getSingleProduct(route.params.productId as string)
    } catch (error) {
        throw new Error(error as string)
    }
})
</script>
<template>
    <div class="product">
        {{ product }}
    </div>
</template>

<style scoped>

</style>