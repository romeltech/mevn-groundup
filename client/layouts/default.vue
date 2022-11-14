<template>
    <div class="container">
        <header>
            <NuxtLink to="/">The Home</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </header>
        <!-- Output Page Content -->
        <div>
            <slot />
        </div>
    </div>
</template>
  
<style scoped>
.container {
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
}
</style>