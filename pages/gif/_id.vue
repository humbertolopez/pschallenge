<template>
    <section class="ps-body">
        <SocialHead
            :title="title"
            :image="images.original.url"
        />
        <div id="single-gif-body">
            <UserInfo
                v-if="user"
                :user="user"
            />
            <div v-else class="user-info">
                <p class="text-sm">No user info :(</p>
            </div>
            <div class="gif-main">
                <h2><a :href="url">{{title}}</a></h2>
                <div id="gif-item-mp4">
                    <video :alt="title" :src="images.original.mp4" autoplay loop playsinline></video>
                </div>
            </div>
            <GifInfo
                :images="images"
                :url="url"
            />
        </div>
    </section>
</template>
<script>
import {api_key,api_url,title} from '~/conf/conf'

export default {
    head(gif){
        return {
            title: gif.title+' ─ '+title
        }
    },
    async asyncData({params}){
        const id = params.id
        const data = await fetch(
            api_url+id+'?api_key='+api_key
        ).then(
            (res)=>res.json()
        )
        const gif = data.data
        return gif
    }
}
</script>