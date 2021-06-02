<template>
    <div class="gif-info">
        <ul class="gif-info-list">
            <li>Width: {{images.original.width}} px</li>
            <li>Height: {{images.original.height}} px</li>
            <li>Frames: {{images.original.frames}}</li>
            <li>Size: {{toMb(images.original.size)}} MB</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: [
        'images'
    ],
    methods: {
        toMb(bytes){
            const mb = bytes / 1000000
            return mb.toFixed(2)
        }
    }
}
</script>