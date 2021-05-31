<template>
    <section class="ps-body">
        <div id="gif-grid">
            <div v-for="gif in gifs" class="gif-item">
                <NuxtLink :to="gif.id">
                    <img :src="gif.images.fixed_height_downsampled.url" class="gif-item-img">
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script>
import {api_key,title} from '~/conf/conf'

export default {
    data() {
        return {
            gifs: []
        }
    },
    head: {
        title: title
    },
    async fetch(){
        const gifscall = await fetch(
            'http://localhost:3000/_content/response'
        ).then(res => res.json())
        this.gifs = gifscall.data
    }
}
</script>