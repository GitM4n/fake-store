<script setup lang="ts">
import ProductCard from '../ProductCard.vue'
import { onMounted, ref } from 'vue';
import { productsApi } from '../../api/products';
import type { IProduct } from '../../api/products';
import { useTouchEvents } from '../../composables/useTouchEvents';

const touchEvents = useTouchEvents()

const emit = defineEmits<{
    (e: 'onLoad'): void
}>()

const products = ref<IProduct[] | null>([])


onMounted(async() => {
    products.value = await productsApi().getProductsForHome()
    emit('onLoad')
})

</script>

<template>
    <div class="products">
        <div class="container">
            <div class="products__content">
                <ul class="product-cards" v-if="products && products.length">
                      <ProductCard
                                    @touchstart="touchEvents.onTouchStart" 
                                    @touchmove.prevent="touchEvents.onTouchMove" 
                                    @touchend="touchEvents.onTouchEnd" 
                                    v-for="product in products" 
                                    :key="product.id" 
                                    :title="product.title" 
                                    :images="product.images" 
                                    :price="product.price" 
                                    :rating="product.rating"
                                    :discount-percentage="product.discountPercentage"
                                    :id="product.id"
                                    :show-sale="true" />
                                    
                  </ul>
                  <h3 class="no-products" v-else>
                      <span class="mark">...Oops!</span> 
                      No products found.
                  </h3>
            </div>
        </div>
    </div>
</template>

<style scoped>

.products__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
}

.product-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
}


.no-products{
    display: flex;
    flex-direction: column;
    max-width: 500px;
    text-transform: uppercase;
    text-align: center;
    font-size: 7rem;
    line-height: 1;
}

</style>