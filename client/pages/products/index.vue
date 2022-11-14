<template>
    <div class="container">
        <h2>All Products</h2>
        <div class="products-wrapper">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'products'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
}

.products-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
}
</style>