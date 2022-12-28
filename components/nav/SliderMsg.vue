<template>
    <div class="slider fixed" v-if="msg.length > 0">
        <p class="slider__text" v-html="msg"></p>
    </div>
</template>

<script>
    export default {
        name: 'Slide',
        data(){
            return{
                msg: '',
            }
        },

        created(){
            this.getMsg();
        },

        methods: {
            async getMsg(){
                try {
                    let doc = await this.$axios.$get(`/messages`);
                    this.msg = doc.data.message;

                    console.log(doc.data.message);
                } catch (err) {
                    if (err.response) {
                        // this.doc = err.response.data;
                    }
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .slider {
        background-color: $secondary-2;
        padding: .25rem 1rem;
        text-align: right;

        &__text {
            color: $white;
            margin-bottom: 0;
            font-size: $font-rg;
            font-weight: bold;
            animation: slide-across 30s linear infinite;
        }

        @keyframes slide-across {
            0% {
                transform: translateX(20%);
            }
            100% {
                transform: translateX(-100%);
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>