<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
         <p class="mt-7 text-7xl font-bold">{{  error.statusCode }}</p>
         <p class="mt-7 text-6xl">Ooops.</p>
         <p class="mt-7">{{ error.message }}</p>
         <button @click="handleError">Clear errors</button>
    </div>
</template>

<script setup>
    const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style  scoped>

</style>