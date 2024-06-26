<script setup lang="ts">

interface Props {
    label: string
}

const props = defineProps<Props>()


</script>

<template>
    <button class="button">
        <span class="label">{{ label }}</span>
    </button>
</template>

<style scoped>

.label{
    position: relative;
    left: -2px;
    transition: all .2s ease;
   
}

.button{
    position: relative;
    margin-top: 50px;
    margin-left: 50px;
    background-color: transparent;
    color:var(--button-primary) ;
    border: 2px solid var(--button-primary);
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: -2px -2px 1px var(--button-primary) inset;
    cursor: pointer;
    transition: all .2s ease;
}

.button:hover{
    box-shadow: -3px -3px 1px var(--button-primary) inset;
}

.button:hover .label{
    left: -3px;
}


.button:active{
    box-shadow: -1px -1px 0px var(--button-primary) inset;
}

.button:active .label{
    left: -1px;
}

</style>