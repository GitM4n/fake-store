

<script setup lang="ts">
const props = defineProps<{
    price:number
}>()

</script>

<template>
    <div class="sale">
        <div class="sale__inner">
            <span class="sale__text">
                ${{ props.price }}
            </span>
        </div>
    </div>
</template>

<style scoped>
.sale{
   /* clip-path: polygon(100% 50%,81.41% 63.01%,85.36% 85.36%,63.01% 81.41%,50% 100%,36.99% 81.41%,14.64% 85.36%,18.59% 63.01%,0% 50%,18.59% 36.99%,14.64% 14.64%,36.99% 18.59%,50% 0%,63.01% 18.59%,85.36% 14.64%,81.41% 36.99%);*/

    padding: 5px;
 
   
}

.sale__inner{
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    color: var(--red);
    line-height: 1;


}

.sale__text{
    position: relative;
    font-size: inherit
}

.sale__text::before{
    position: absolute;
    content: '';
    width: calc(100% + 6px);
    height: 1px;
    top: 50%;
    left: -3px;
    background-color: var(--red);
    transform: translateY(-50%) rotate(-10deg);

}
</style>