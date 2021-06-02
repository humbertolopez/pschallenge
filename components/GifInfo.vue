<template>
    <div class="gif-info">
        <ul class="gif-info-list">
            <li>Width: {{images.original.width}} px</li>
            <li>Height: {{images.original.height}} px</li>
            <li>Frames: {{images.original.frames}}</li>
            <li>Size: {{toMb(images.original.size)}} MB</li>
        </ul>
        <p class="font-bold">Share this GIF:</p>
        <div class="input-group">
            <input id="copyurl" class="tocopy" :value="url">
            <button id="copybutton" type="button" v-on:click="copyUrl">Copy URL</button>
        </div>
        <p v-if="iscopied === true" class="copied-alert">Copied!</p>
        <p v-else-if="iscopied === false" class="copied-alert-failed">Oops. Something went wrong</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            iscopied: []
        }
    },
    props: [
        'images',
        'url'
    ],
    methods: {
        toMb(bytes){
            const mb = bytes / 1000000
            return mb.toFixed(2)
        },
        copyUrl(){
            const urlToCopy = document.querySelector('#copyurl')
            urlToCopy.setAttribute('type','text')
            urlToCopy.select()
            try {
                var worked = document.execCommand('copy')
                this.iscopied = true
            } catch (err) {
                this.iscopied = false
            }
        }
    }
}
</script>