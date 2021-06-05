<template>
    <section class="ps-body">
        <div v-if="searchdata.search">
            <h1 class="search-title">{{searchdata.search}}</h1>
        </div>
        <div v-else class="block overflow-hidden">
            <div class="w-2/4 float-left">
                <h1 class="search-title">Top 12 trending GIFs now</h1>
            </div>
            <div class="w-2/4 float-right text-right text-white">
                <p><NuxtLink to="trending">See all trending GIFs</NuxtLink></p>
            </div>
        </div>
        <div id="gif-grid">
            <div v-if="$fetchState.pending">
                <p class="loading-text">Here comes the GIFs...</p>
            </div>
            <div v-for="gif in gifs" class="gif-item" :key="gif.id">
                <NuxtLink :to="`gif/${gif.id}`">
                    <img :src="gif.images.fixed_width_downsampled.url" class="gif-item-img">
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script>
import {api_key,api_url,title} from '~/conf/conf'

export default {
    data() {
        return {
            gifs: [],
            searchdata: []
        }
    },
    head: {
        title: title
    },
    watch: {
        '$route.query' : '$fetch'
    },
    async fetch(){
        this.cleanBoard()
        if(this.$route.query.search){
            const searchquery = this.$route.query.search
            const searchcall = await fetch(
                api_url+'search?q='+searchquery+'&api_key='+api_key+'&limit=48'
            ).then(res => res.json())
            this.gifs = searchcall.data
            this.searchdata = this.$route.query
        } else {
            const gifscall = await fetch(
                api_url+'trending?api_key='+api_key+'&limit=12'
            ).then(res => res.json())
            this.gifs = gifscall.data
        }
    },
    methods: {
        cleanBoard(){
            this.gifs = []
            this.searchdata = []
        }
    }
}
</script>