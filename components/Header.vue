<template>
    <header>
        <div class="head-logo">
            <NuxtLink to="/"><img src="~/assets/img/logo.svg"></NuxtLink>
        </div>
        <div class="head-medium-area">
            <a class="search-a" v-on:click="$emit('show-search')">Click for search</a>
        </div>
    </header>
</template>