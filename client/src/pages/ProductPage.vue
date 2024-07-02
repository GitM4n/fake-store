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

const props = defineProps<{
    productId:string
    gradientColor:string
    num:number
}>()


console.log(props)

const product = ref<IProduct>()

onMounted(async() => {
    try {
        startLoader()
        const data = await productsStore.getSingleProduct(props.productId as string)
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
        <div class="product-overview" :style="{background:props.gradientColor}">
            <div class="container">
                <h1 class="product-title">{{product.title}}</h1>
                <div class="product-images">
                    <div class="product-images__current">
                        <SimpleSlider class="product-slider" :slides-count="product.images.length">
                            <template #currentSlide="{currentSlide}">
                                <img :src="product.images[currentSlide]" alt="currentSlide" class="current-img">
                            </template>
                            <template #slides="{setCurrentSlide}">
                                <img v-for="image,idx of product.images" class="images"
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
    </div>
    
</template>

<style scoped>

.product-title{
    text-align: center;
    font-size: 7rem;
    margin: 10px 0;
}

.product-slider{
    max-width: 500px;
}

.current-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.images{
    width: 150px;
    aspect-ratio: 1;
    object-fit: cover;
}

</style>