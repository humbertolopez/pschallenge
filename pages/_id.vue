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
            </div>
            <div class="gif-info">
                <ul class="gif-info-list">
                    <li>Width: {{images.original.width}}</li>
                    <li>Height: {{images.original.height}}</li>
                    <li>Frames: {{images.original.frames}}</li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import {api_key,api_url,title} from '~/conf/conf'

export default {
    head(gif){
        return {
            title: title+' ─ '+gif.title
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