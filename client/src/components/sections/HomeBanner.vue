<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { productsApi } from '../../api/products';
import type { IProduct } from '../../api/products';
import { useRandomColor } from '../../composables/useRandomColor';

const isLoad = ref<boolean>(false)
const randomColor = useRandomColor()

const shirtImageUrl = ref<string>('')
const laptopImageUrl = ref<string>('')
const sportAccessoriesImageUrl = ref<string>('')


const getRandomIdx = (arr:IProduct[]):number => {
    return Math.floor(Math.random() * arr.length)
}


const setProductsImage = (data:Array<IProduct[] | null>) => {
  
    const hasData = data.every(item => item !== null)

    if(hasData) {
        shirtImageUrl.value = data[0][getRandomIdx(data[0])].images[0]
        laptopImageUrl.value = data[1][getRandomIdx(data[1])].images[1]
        sportAccessoriesImageUrl.value = data[2][getRandomIdx(data[2])].images[0]
    }



}


const getProductsImage = async() => {
    const shirtImages = await productsApi().getProductsByCategory('mens-shirts')
    const laptopImages = await productsApi().getProductsByCategory('laptops')
    const sportAccessoriesImages = await productsApi().getProductsByCategory('sports-accessories')
   
    const promiseData = await Promise.all([shirtImages, laptopImages, sportAccessoriesImages])
   
    if(promiseData) {
      setProductsImage(promiseData)
    }
 
}


onMounted(async() => {
    await getProductsImage();
    setTimeout(() => {
        isLoad.value = true
    }, 1000)

})



</script>

<template>
    <section class="home-banner">
        <div class="container">
            <div class="home-banner__content">
                <div class="home-banner__left">
                    <h1 class="home-banner__title"><span class="mark">FAKE</span> STORE</h1>
                    <p class="home-banner__subtitle">
                        Store of fake products
                    </p>
                </div>
                <div class="home-banner__right">
                    <div class="home-banner__picture">
                        <img class="shirt" :src="shirtImageUrl">
                        <img class="laptop" :src="laptopImageUrl">
                        <img class="sport-accessories" :src="sportAccessoriesImageUrl">
                        <div class="home-banner__picture_bg" :style="{background:randomColor}"></div>
                    </div>
                </div>
            </div>      
        </div>
    </section>
</template>

<style scoped>

.home-banner{
    padding: 90px 0 40px 0;
    min-height: 100vh;
    width: 100%;

}


.home-banner__content{
    display: flex;
}

.home-banner__left{
    display: flex;
    flex-direction: column;
  
}


.home-banner__title{
    font-family: 'Bevan';
    font-size: 9rem;
    line-height: 1;
    margin: 0;
    margin-top: 20%;
}

.home-banner__subtitle{
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 500;
    margin: 0;
}


.home-banner__right{
    flex: 0 0 60%;
}


.home-banner__picture{
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
   
}

.home-banner__picture_bg{
    position: absolute;
    width: 100%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    mask-image: url('../../assets/shape_1.svg');
}


.shirt,
.laptop,
.sport-accessories{
    position: absolute;
    width: 80%;
}

.shirt{
    z-index: 4;
    top: -10%;
    left: -10%;
    transform: rotate(-10deg);
}

.laptop{
    z-index: 3;
    top: -5%;
    right: -10%;
}

.sport-accessories{
    z-index: 5;
    bottom: 10%;
    left: 50%;
    width: 60%;
    transform: translateX(-50%)
}


@media(max-width:999px){
   

    .home-banner__content{
        flex-direction: column;
        
    }

    .home-banner__left{
        align-items: center;
    }

    .home-banner__title{
        margin-top: 10px;
        text-align: center;
        font-size: 6;
    }

    .home-banner__subtitle{
        text-align: center;
    }



    
}

</style>