<script setup lang="ts">
import { useRandomColor } from '../../composables/useRandomColor';

const props = defineProps<{
    isActive: boolean
}>()

const randomColor = useRandomColor()




</script>


<template>
    <div class="loader_wrapper" :class="{active: props.isActive}">
        <span class="loader" :style="{color:randomColor}"></span>
    </div>
    
</template>

<style>
body:has(.loader_wrapper.active){
    overflow: hidden;
}
</style>


<style scoped>

.loader_wrapper{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: var(--light);
    z-index: 999;
   
 

}


.loader_wrapper.active{
    display: flex;
}


.loader, .loader:before, .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  .loader {
    position: relative;
    z-index: 1000;
    font-size: 7px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }
  
  @keyframes bblFadInOut {
    0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
    40% { box-shadow: 0 2.5em 0 0 }
  }

</style>