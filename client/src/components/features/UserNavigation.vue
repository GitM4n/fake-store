<script setup lang="ts">
import UserIcon from '../UI/UserIcon.vue';
import { useGradientColor } from '../../gradients';
import CartIcon from '../UI/CartIcon.vue';
import FavIcon from '../UI/FavIcon.vue';
const gradientColor = useGradientColor().gradientColor




</script>
<template>
    <nav class="navigation">
        <ul class="nav-list">
            <li class="nav-li" :style="{background:gradientColor}">
                <FavIcon class="fav-icon" />
            </li>
            <li class="nav-li" :style="{background:gradientColor}">
                <UserIcon class="user-icon" />
            </li>
            <li class="nav-li" :style="{background:gradientColor}">   
                <CartIcon class="cart-icon" main />
            </li>
        </ul>
    </nav>
</template>

<style scoped>


.navigation{
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    background-color: var(--background);
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 -1px 15px var(--card-box-shadow);
}

.nav-list{
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    padding: 10px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 0 2px 8px var(--card-box-shadow);

}

.nav-li:last-child{
    order: 2;
    width: 80px;
    position: relative;
 
    
}

.nav-li:last-child::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 15px solid var(--background);
    border-radius: 50%;
    box-shadow: 0 -2px 8px var(--card-box-shadow);
}

.nav-li:nth-child(2){
    order: 3;
}

.cart-icon{
    width: 50px;
   
}

.user-icon,
.fav-icon{
    width: 30px;
}



@media (min-width:999px){

    .navigation{
        background-color:transparent;
        width: auto;
        min-width: 0;
        display: inline;
        bottom: 40px;
        right: 40px;
        left: auto;
        box-shadow: none;
       
    }

    .nav-list{
        flex-direction: column;
        gap: 20px;
    }
    
    .nav-li{
        cursor: pointer;
        transition: all .3s ease;
    }
    
    .nav-li:last-child{
        order: 3;
        width: 80px;
        
        
    }

    .nav-li:last-child::after{
        content: none;
    }
    
    .cart-icon{
        width: 50px;
    }
    
    .user-icon,
    .fav-icon{
        width: 30px;
    }


    .nav-li:hover{
        transform: scale(1.1);
    }
}


</style>