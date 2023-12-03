<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products">
                <!-- <NuxtLink :to="`/products/${p.id}`">{{  p.title }}</NuxtLink>-->
                <ProductCard :product="p" />
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout:'products'
    })
    const {data:products}=await useFetch('https://fakestoreapi.com/products')

    useHead({
       title:'Nuxt Dojo | Merch',
       meta:[
        {name:'description',content:'Nuxt 3 Merch'}
       ]
})
</script>

<style  scoped>

</style>