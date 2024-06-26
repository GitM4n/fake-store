<script setup lang="ts">
import {ref} from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const isFav = ref(false)

</script>
<template>
    <div class="add-to-fav">
        <FontAwesomeIcon class="heart" :icon="faHeart"  @click="isFav = !isFav" :class="{faved: isFav}" />
    </div>
</template>
<style scoped>

.add-to-fav{
    position: relative;
    z-index: 99;
    width: 20px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  
 
}


.heart{
    width: 100%;
    height: 100%;
    color: var(--light);
    stroke: var(--black) ;
    stroke-width: 15;
    opacity: .7;
}



.heart.faved{
    color: var(--red);
    stroke: var(--red) ;
    opacity: 1;
}


@media(hover:hover){
    .heart:hover{
        opacity: 1;
    }
}

</style>