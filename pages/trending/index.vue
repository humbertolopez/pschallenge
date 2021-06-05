<template>
    <section class="ps-body">
        <div class="w-full">
            <h1 class="search-title">GIFS Trending now</h1>
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
            gifs: []
        }
    },
    head: {
        title: 'GIFs Trending now ─ '+title
    },
    async fetch(){
        const gifscall = await fetch(
            api_url+'trending?api_key='+api_key+'&limit=48'
        ).then(res => res.json())
        this.gifs = gifscall.data
    }
}
</script>