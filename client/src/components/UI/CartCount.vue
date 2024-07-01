<script setup lang="ts">



</script>

<template>
    <div class="edit-count">
        <div class="increase-count"></div>
        <div class="input-count">
            <input type="number" min="0" max="99" maxlength="2" step="1" >
        </div>
        <div class="decrease-count"></div>

    </div>
</template>

<style scoped>

.increase-count, .decrease-count{
    position: relative;
    width: 20px;
    aspect-ratio: 1;
    clip-path: polygon(50% 0, 100% 100%, 50% 80%, 0% 100%);
    background-color: inherit;
}

.decrease-count{
    transform: rotate(180deg);
}

input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input{
    outline: none;
    background-color: var(--background);
    color:var(--text-color);
}


</style>