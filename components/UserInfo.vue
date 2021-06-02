<template>
    <div class="user-info">
        <div class="flex">
            <div class="w-12 flex-shrink-0">
                <img :src="user.avatar_url">
            </div>
            <div class="ml-2">
                <h3><a :href="user.profile_url">{{user.username}}</a></h3>
            </div>
        </div>
        <p v-if="user.description" class="user-description">{{user.description}}</p>
        <h3>Social links</h3>
        <ul class="user-social-links">
            <li v-if="user.website_url"><a :href="user.website_url">Website</a></li>
            <li v-if="user.facebook_url"><a :href="user.facebook_url">Facebook</a></li>
            <li v-if="user.tumblr_url"><a :href="user.tumblr_url">Tumblr</a></li>
            <li v-if="user.tiktok_url"><a :href="user.tiktok_url">TikTok</a></li>
            <li v-if="user.youtube_url"><a :href="user.youtube_url">YouTube</a></li>
            <li v-if="user.instagram_url"><a :href="user.instagram_url">Instagram</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    props: [
        'user'
    ]
}
</script>