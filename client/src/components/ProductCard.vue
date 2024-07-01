<script setup lang="ts">
import SaleIcon from './UI/SaleIcon.vue';
import noImage from '../assets/no_image.png'
import CartIcon from './UI/CartIcon.vue';
import FavIcon from './UI/FavIcon.vue'
import type { IProduct } from '../api/products';
import GeneralRatingStars from './UI/GeneralRatingStars.vue';

import { computed } from 'vue';
import {useGradientColor} from '../gradients'

type Props = Partial<IProduct> & {
  showSale?: boolean
}


const props = defineProps<Props>()




const shortTitle = computed(()=>{
    if(!props.title) return ''

    if(props.title.split(' ').length > 2){
        return props.title.split(' ').splice(0, 3).join(' ')
    }else{
        return props.title
    }
})


const gradientColor = useGradientColor().gradientColor



const getSalePrice = computed(()=>{
  if(!props.discountPercentage) return props.price 
  if(!props.price) return 'Price not specified'
  return (props.price - (props.price*props.discountPercentage/100)).toFixed(2)
})


</script>

<template>
    <li class="product-card">
        <div class="content-top" :style="{background:gradientColor}" >
          <div class="image">
            <img :src="props.images ? props.images[0] : noImage" alt=""/>
          </div>
          <div class="actions">
            <FavIcon class="fav-icon"/>
            
          </div>
           <div class="cost">
              <div class="sale__wrapper">
                <SaleIcon class="sale" :price="props.price" v-if="props.price && props.showSale"/>
              </div>
              <div class="price__wrapper">
                <span class="price" :style="{background:gradientColor}">${{getSalePrice }}</span>
              </div>
           </div>
           <router-link class="link" :to="{name: 'product', params: {productId: props.id}}"></router-link>
        </div>
        <div class="content-bottom">
          <h5 class="title">{{ shortTitle }}</h5>
            <div class="info">
              <div class="rating">
                <GeneralRatingStars :rating="props.rating"/>
              </div>
              <CartIcon class="add-to-cart" :style="{background:gradientColor}" />
              
            
            </div>
           
        </div>
      
    </li>
</template>

<style scoped>
.link{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;
}

.image{
  position: relative;
  width: 250px;
  height: 250px;
  transition: all 0.3s ease;
  
 
}

.image img{
  position: absolute;
  z-index: 1;
  transform: translate(-20%, -15%);
  width: 140%;

  pointer-events: none;
 
 

}


.product-card{  
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px var(--card-box-shadow);
    max-width: 280px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
   
}

.content-top{
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  padding: 5px;
}

.fav-icon{
  opacity: .7;
}

.actions{
  display: flex;
  flex-direction: column;
  gap: 10px;
 
 
}

.actions div{
  width: 25px;
  height: 25px;

}



.content-bottom{
  flex-grow: 1;
  background-color: var(--background);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  padding: 10px 15px;
}




.info{
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
}


.title, .price{
  font-size: 2rem;
  font-weight: 500;

 
}

.cost{
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: flex-end;
  padding: 5px;
  border-top-left-radius: 10px;
  background-color: var(--background);
}

.price__wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}



.price{
  position: relative;
  font-weight: 600;
  border-radius: 5px;
  color: var(--light);
  padding: 0  0.5rem;
  z-index: 2;
  text-shadow: 0px 0px 4px var(--black);
}



.sale{
 color:var(--red);
 font-size: 1.7rem;

}






.add-to-cart{
  position: relative;
  border-radius: 5px;
  transition: all 0.3s ease;
  z-index: 5;
  width: 40px;
  padding: 5px; 
}


.edit-cart{
  position: absolute;
  left: 0;
  bottom: 0;
}







@media(hover:hover){
  .content-top:hover{
      cursor: pointer;
      
  }

  .content-top:hover .image{
    transform: scale(1.1);
  }

  .add-to-cart:hover{
    transform: scale(1.1);
  }

  .fav-icon:hover{
    opacity: 1;
  }
}

</style>