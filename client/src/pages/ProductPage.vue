<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { productsApi } from '../api/products';
import type { IProduct } from '../api/products';
import {useRoute} from 'vue-router';
import { useLoader } from '../composables/useLoader';
import SimpleSlider from '../components/features/SimpleSlider.vue';
const {startLoader, stopLoader} = useLoader()

const productsStore = productsApi()
const route = useRoute()


const product = ref<IProduct>()

onMounted(async() => {
    try {
        startLoader()
        const data = await productsStore.getSingleProduct(route.params.productId as string)
        if(data){
            product.value = data
        }

    } catch (error) {
        throw new Error(error as string)
    }finally {
        stopLoader()
    }
})
</script>
<template>
    <div class="product-page" v-if="product">
        <div class="product-overview">
            <h1 class="product-title">{{product.title}}</h1>
            <div class="product-images">
                <div class="product-images__current">
                    <SimpleSlider :slides-count="product.images.length">
                        <template #currentSlide="{currentSlide}">
                            <img :src="product.images[currentSlide]" alt="currentSlide" class="current-slide">
                        </template>
                        <template #slides="{setCurrentSlide}">
                            <img v-for="image,idx of product.images"
                                :key="image"
                                :src="image" 
                                @click="setCurrentSlide(idx)"
                                >
                        </template>
                    </SimpleSlider>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

.product-title{
    text-align: center;
    font-size: 7rem;
    margin: 10px 0;
}
.current-slide{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>