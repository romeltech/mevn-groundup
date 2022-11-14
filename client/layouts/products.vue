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

        <div>
            <slot />
        </div>

        <footer>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
        </footer>
    </div>
</template>
  
<style scoped>
.container {
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
}
</style>