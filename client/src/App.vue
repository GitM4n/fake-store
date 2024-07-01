<script setup lang="ts">
import UserNavigation from './components/features/UserNavigation.vue';
</script>

<template>
 
<div class="wrapper">
  <UserNavigation />
  <main class="main">
    <router-view></router-view>
  </main>
</div>
 
  

 

</template>

<style scoped>


</style>
