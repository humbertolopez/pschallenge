export default {
    components: true,
    modules: [
        '@nuxt/http',
        '@nuxtjs/tailwindcss',
    ],
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    css: [
        '~/assets/css/style.css',
    ]
}