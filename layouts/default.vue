<template>
    <div>
        <header class="shadow bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

          <!--BEGIN:: Output the page content-->
                <div class="container mx-auto p-4">
                      <slot />
                </div>
            <!--END:: Output the page content-->

    </div>
</template>
<style scoped>
.router-link-exact-active{
    color:#12b488;
}
</style>