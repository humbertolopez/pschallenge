export default {
    components: true,
    modules: [
        '@nuxt/http',
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    css: [
        '~/assets/css/style.css',
    ]
}