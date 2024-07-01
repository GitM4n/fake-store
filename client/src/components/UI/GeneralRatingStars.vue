<script setup lang="ts">

import {computed} from 'vue'



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

const ratingText = computed(()=>{
    return (5*ratingPercent.value/100).toFixed(1)
})



</script>

<template>
    <div class="general-rating">
        <div class="general-rating__stars" :style="{background:`linear-gradient(90deg, var(--star-active) ${ratingPercent}%, var(--star-inactive) ${ratingPercent}%)`}">  
        </div>
        <div class="general-rating__text">
            {{ratingText }}
        </div>
    </div>
</template>

<style scoped>

input::before{
    content: '\f005';

    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
}

.general-rating{
    display: flex;
    align-items: center;
    gap: 5px;
}

.general-rating__stars{
    position: relative;
    width: 100px;
    height: 20px;
    mask-image: url('../../assets/icons/stars.svg');
  
}

.general-rating__text{
    font-size: 1.8rem;
    line-height: 1;
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