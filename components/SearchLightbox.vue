<template>
    <div id="search-whole" v-show="searchlighbox">
        <div id="search-lightbox" v-on:click="$emit('close-search')"></div>
        <div class="search-box-container">
            <input ref="searchinput" id="search-box-input" placeholder="Search for GIFs" v-on:keyup.enter="sendSearch" v-on:keyup.esc="$emit('close-search')" v-model="query"></input>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            query: []
        }
    },
    props: {
        searchlighbox: Boolean
    },
    methods: {
        sendSearch(){
            if(this.query.length){
                this.$emit('close-search')
                const searchroute = this.$router.push('/?search='+this.query)
                return searchroute
            }
        }
    }
}
</script>