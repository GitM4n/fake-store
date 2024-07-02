<script setup lang="ts">
import ProductCard from '../ProductCard.vue'
import { onMounted, ref, computed } from 'vue';
import { productsApi } from '../../api/products';
import type { IProduct } from '../../api/products';
import { useAddCartTouchEvents } from '../../composables/useAddCartTouchEvents';
import { useLoader } from '../../composables/useLoader';

const {startLoader, stopLoader} = useLoader()

const touchEvents = useAddCartTouchEvents()

const isDrag = computed(()=>{
  return touchEvents.isDrag.value
})

const emit = defineEmits<{
    (e: 'onLoad'): void
}>()

const products = ref<IProduct[] | null>([])


onMounted(async() => {
    startLoader()
    products.value = await productsApi().getProductsForHome()
    stopLoader()
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
    <div class="drop-zone" :class="{active: isDrag}"></div>
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


.drop-zone{
    position: sticky;
    bottom: 0;
    height: 0;
    z-index: 800;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0% ;
    background-color: aquamarine;
    transition: height .3s ease;
    opacity: .9;
}
.drop-zone.active{
  height: 150px;
}

</style>