<script setup lang="ts">
import SaleIcon from './UI/SaleIcon.vue';
import noImage from '../assets/no_image.png'
import AddToCart from './features/AddToCart.vue';
import AddToFav from './features/AddToFav.vue'
import type { IProduct } from '../api/products';
import GeneralRatingStars from './GeneralRatingStars.vue';
import { ref, computed } from 'vue';

type Props = Partial<IProduct> & {
  showSale?: boolean
}


const props = defineProps<Props>()

const gradientObj = ref({
  decent:{
    background: "linear-gradient(to right, var(--card-color-1), #c4e0e5)", 

  },
  sylvia:{
    background: "linear-gradient(to right, var(--card-color-2), #ff9068)",
  },
  deepSea:{
    background: "linear-gradient(to right, var(--card-color-3), #4ca1af)",
  },
  flush:{
    background: "linear-gradient(to right, var(--card-color-4), #a8e063)",
  },
  scarlet:{
    background: "linear-gradient(to right, var(--card-color-5), #ff6d6d)",
  },
  sun:{
    background: "linear-gradient(to right, var(--card-color-6), #ff8800)",
  }

})


const shortTitle = computed(()=>{
    if(!props.title) return ''

    if(props.title.split(' ').length > 2){
        return props.title.split(' ').splice(0, 3).join(' ')
    }else{
        return props.title
    }
})


const gradientColor = computed(()=>{
     const key =Object.keys(gradientObj.value)[Math.floor(Math.random() * Object.keys(gradientObj.value).length)]

    return gradientObj.value[key as keyof typeof gradientObj.value]
})

</script>

<template>
    <li class="product-card">
        <div class="content-top" :style="gradientColor" >
           <SaleIcon class="sale"  :percentage="props.discountPercentage" v-if="props.discountPercentage && props.showSale"/>
          <div class="image">
            <img :src="props.images ? props.images[0] : noImage" alt=""/>
          </div>
          <div class="actions">
            <AddToFav />
            
          </div>
           <div class="price__wrapper">
              <span class="price" :style="gradientColor">${{props.price}}</span>
           </div>
           <router-link class="link" :to="{name: 'product', params: {productId: props.id}}"></router-link>
        </div>
        <div class="content-bottom">
            <h5 class="title">{{ shortTitle }}</h5>
            <div class="info">
              <div class="rating">
                <GeneralRatingStars :rating="props.rating"/>
              </div>
              <div class="buy" :style="gradientColor">
                <AddToCart class="add-to-cart" />
              </div>
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

.price{
  text-shadow: 0px 0px 4px var(--black);
}


.content-top{
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  padding: 5px;
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
  justify-content: space-between;
  min-height: 120px;
  padding: 0 15px;
}


.title, .price{
    font-size: 2rem;
    font-weight: 500;
  
   
}

.info{
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
}


.price__wrapper{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 5px;
  bottom: 0;
  right: 0;
  z-index: 5;
  border-top-left-radius: 10px;
  background-color: var(--background);

}



.price{
  position: relative;
  font-weight: 600;
  border-radius: 5px;
  color: var(--light);
  padding: 0  0.5rem;
  z-index: 2;
}



.sale{
  position: absolute;
  top: -30px;
  left: -30px;
 


}




.buy{
  position: relative;
  z-index: 5;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.add-to-cart{
  position: relative;
 
}





@media(hover:hover){
  .content-top:hover{
      cursor: pointer;
      
  }

  .content-top:hover .image{
    transform: scale(1.1);
  }

  .buy:hover{
    transform: scale(1.1);
  }
}

</style>