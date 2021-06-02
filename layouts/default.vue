<template>
    <div id="whole">
        <SearchLightbox
            :searchlighbox="searchlighbox"
            v-on:close-search="closeSearch"
        />
        <Header
            v-on:show-search="showSearch"
        />
        <Nuxt />
    </div>
</template>
<script>
export default {
    data(){
        return {
            searchlighbox: false
        }
    },
    methods: {
        showSearch(){
            this.searchlighbox = true
        },
        closeSearch(){
            this.searchlighbox = false
        }
    }
}
</script>