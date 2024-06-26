

<script setup lang="ts">
const props = defineProps<{
    percentage:number
}>()

</script>

<template>
    <div class="sale">
        <div class="sale__inner">
            <span class="sale__text_sale">SALE</span>
            <span class="sale__text_discount">
                {{ props.percentage }}%
            </span>
        </div>
    </div>
</template>

<style scoped>
.sale{
    aspect-ratio: 1;
    clip-path: polygon(100% 50%,81.41% 63.01%,85.36% 85.36%,63.01% 81.41%,50% 100%,36.99% 81.41%,14.64% 85.36%,18.59% 63.01%,0% 50%,18.59% 36.99%,14.64% 14.64%,36.99% 18.59%,50% 0%,63.01% 18.59%,85.36% 14.64%,81.41% 36.99%);
    background-color: var(--background);
    padding: 3px;
 
   
}

.sale__inner{
    clip-path: polygon(100% 50%,81.41% 63.01%,85.36% 85.36%,63.01% 81.41%,50% 100%,36.99% 81.41%,14.64% 85.36%,18.59% 63.01%,0% 50%,18.59% 36.99%,14.64% 14.64%,36.99% 18.59%,50% 0%,63.01% 18.59%,85.36% 14.64%,81.41% 36.99%);
    padding: 15px;
    width: 100%;
    height: 100%;
    background-color: var(--red);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--light);
    line-height: 1;


}

.sale__text_sale{
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;

}

.sale__text_discount{
    font-size: 1.5rem;
    font-weight: 700;
   
}
</style>