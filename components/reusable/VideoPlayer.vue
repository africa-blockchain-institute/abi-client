<template>
    <div class="wrapper">
        <div class=""
            @ended="onPlayerEnded($event)"
            v-video-player:myVideoPlayer="playerOptions">
        </div>
    </div>
</template>

<script>
    export default {

        props: ['source', 'poster'],

        data(){
            return{
                // component options
                playsinline: true,
                
                // videojs options
                playerOptions: {
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: ""
                    }],
                    poster: "",
                }
            }
        },

        mounted(){
            this.playerOptions.sources[0].src = this.source;
            this.playerOptions.poster = this.poster;
            // console.log(this.source, "video");
        },

        methods: {
            onPlayerEnded(player){
                console.log("Player ended")
            }
        }
    }
</script>

<style lang="scss" scoped>

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>