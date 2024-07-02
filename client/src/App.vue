<script setup lang="ts">
import LoaderOverlay from './components/UI/LoaderOverlay.vue';
import UserNavigation from './components/features/UserNavigation.vue';


</script>

<template>
 
<div class="wrapper">
  <LoaderOverlay />
  <UserNavigation />
  <main class="main">
    <router-view></router-view>
  </main>
</div>
 
  

 

</template>

<style scoped>
.wrapper{
  min-height: 100%;
  
}


</style>
