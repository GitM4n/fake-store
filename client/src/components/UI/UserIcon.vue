

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

</script>

<template>
    <div class="user-icon">
        <FontAwesomeIcon class="user" :icon="faUser" />
    </div>
</template>

<style scoped>

.user-icon{
    width: 30px;
    aspect-ratio: 1;
}


.user{
    width: 100%;
    height: 100%;
    color: var(--light);
    stroke: var(--black) ;
    stroke-width: 15;
}

</style>