<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import Loader from '../components/UI/Loader.vue'
import HomeBanner from '../components/sections/HomeBanner.vue'
import ProductsSection from '../components/sections/ProductsSection.vue';
import { useTouchEvents } from '../composables/useTouchEvents';


const touchEvents = useTouchEvents()

const isDrag = computed(()=>{
  return touchEvents.isDrag.value
})

const isLoad = ref<boolean>(false)


watch(isLoad, ()=>{
  if(isLoad.value) {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }
})

</script>

<template>
    <Loader :isActive="!isLoad" />
    <HomeBanner />
    <ProductsSection @onLoad="isLoad = true"/>
    <div class="drop-zone" :class="{active: isDrag}"></div>
</template>




<style scoped>

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