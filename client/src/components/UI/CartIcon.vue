

<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faCartShopping, faCartPlus, faCheck} from '@fortawesome/free-solid-svg-icons';

import {ref} from 'vue'

const props = defineProps<{
    main?:boolean
}>()

const isAdded = ref(false)
</script>

<template>
    <div class="add-to-cart" @click="isAdded = !isAdded">
        <FontAwesomeIcon class="cart" :icon="props.main ? faCartShopping : faCartPlus" v-if="!isAdded"/>
        <FontAwesomeIcon class="check" :icon="faCheck" v-else/>
    </div>
</template>

<style scoped>
.add-to-cart{
    position: relative;
    z-index: 99;
    width: 20px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

 
}


.cart,
.check{ 
    width: 100%;
    height: 100%;
    color: var(--light);
    stroke: var(--black) ;
    stroke-width: 15;
  
}


@media(hover:hover){
    .cart:hover{
        opacity: 1;
    }
}

</style>