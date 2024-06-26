

<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

import {ref} from 'vue'

const isAdded = ref(false)
</script>

<template>
    <div class="add-to-cart">
        <FontAwesomeIcon class="cart" :icon="faCartPlus" @click="isAdded = !isAdded" :class="{added: isAdded}"/>
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


.cart{
    width: 100%;
    height: 100%;
    color: var(--light);
    stroke: var(--black) ;
    stroke-width: 15;
  
}



.cart.added{
    color: var(--red);
    stroke: var(--red) ;
    opacity: 1;
}


@media(hover:hover){
    .cart:hover{
        opacity: 1;
    }
}

</style>