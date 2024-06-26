<script setup lang="ts">

import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {computed, onMounted, ref} from 'vue'



const props = defineProps({
    rating:{
        type:Number,
        default:0
    }
})


const ratingPercent = computed(()=>{

    if(!props.rating ||props.rating===0) return 0
    return (props.rating/5)*100
})



</script>

<template>
    <div class="general-rating">
        <div class="general-rating__stars" :style="{background:`linear-gradient(90deg, var(--star-active) ${ratingPercent}%, var(--star-inactive) ${ratingPercent}%)`}">
          
        </div>
        <div class="general-rating__text">
            
        </div>

    </div>
</template>

<style scoped>

input::before{
    content: '\f005';

    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
}



.general-rating__stars{
    position: relative;
    width: 100px;
    aspect-ratio: 5/1;
    mask-image: url('../assets/icons/stars.svg');
  
}


.full,
.half{
 
    position: absolute;
    color: gray;

    
}

.active{
    color: yellow
}



</style>