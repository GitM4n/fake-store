

<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps<{
    slidesCount:number
}>()


const currentSlide = ref(0)
const touchStartX = ref(0);
const touchEndX = ref(0)




function setCurrentSlide(idx:number) {
    currentSlide.value=idx
}

function onTouchStart(event: TouchEvent) {
    touchStartX.value = event.touches[0].clientX;
}

function onTouchMove(event: TouchEvent) {
    touchEndX.value = event.touches[0].clientX;
}

function onTouchEnd() {
    if (touchEndX.value < touchStartX.value - 50) {  // -50 для чувствительности свайпа
        nextSlide();
    } else if (touchEndX.value > touchStartX.value + 50) {  // +50 для чувствительности свайпа
        prevSlide();
    }
}

function nextSlide() {
    if (currentSlide.value < props.slidesCount - 1) {
        currentSlide.value++;
    }else{
        currentSlide.value = 0
    }
}

function prevSlide() {
    if (currentSlide.value > 0) {
        currentSlide.value--;
    }else{
        currentSlide.value = props.slidesCount - 1
    }
}

</script>

<template>
    <div class="simple-slider">
        <div class="simple-slider__inner">
            <div class="current-slide" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
                <slot name="currentSlide" :current-slide="currentSlide">CURRENT SLIDE</slot>
            </div>
            <div class="slides">
                <slot name="slides" :set-current-slide="setCurrentSlide"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>

.current-slide{
    width: 200px;
    height: 200px;
}

</style>