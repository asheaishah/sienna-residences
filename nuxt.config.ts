// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title:'Sienna Residence',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Discover Sienna Residence @ Matang, An affordable apartment with prime locations, All with 3 Bedrooms. Located at Jalan Matang, Petra Jaya, 93050 Kuching, Sarawak.' },
                { hid: 'keywords', name: 'keywords', content: 'Sienna Residence @ Matang, Prime location at affordable prices' },
                { name: 'format-detection', content: 'telephone=no' },
              ],
            script: [
                {
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                  integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
                  crossorigin: 'anonymous',
                },
              ],
        }
    },
    runtimeConfig: {
        email: '', // can be overridden by NUXT_API_SECRET environment variable
        title:'Sienna Residence',
        emailUser: '',
    },
    
})
