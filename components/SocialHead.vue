<template>
    <span v-if="false" />
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    },
    head(){
        return {
            meta: [
                {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: this.title
                },
                {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: this.image
                },
                {
                hid: 'twitter:image:alt',
                name: 'twitter:image:alt',
                content: this.title
                },
                {
                hid: 'og:title',
                property: 'og:title',
                content: this.title
                },
                {
                hid: 'og:image',
                property: 'og:image',
                content: this.image
                },
                {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: this.image
                },
                {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: this.title
                }
            ]
        }
    }
}
</script>