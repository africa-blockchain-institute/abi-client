<template>
    <div class="container">
        <div class="row">
            <div class="countdown">
                <div class="countdown__time">
                    <h1 class="countdown__time--num">{{ days }}</h1>
                    <p class="countdown__time--desc">DAYS</p>
                </div>
                <span>:</span>
                <div class="countdown__time">
                    <h1 class="countdown__time--num">{{ hours }}</h1>
                    <p class="countdown__time--desc">HOURS</p>
                </div>
                <span>:</span>
                <div class="countdown__time">
                    <h1 class="countdown__time--num">{{minutes}}</h1>
                    <p class="countdown__time--desc">MINS</p>
                </div>
                <span>:</span>
                <div class="countdown__time">
                    <h1 class="countdown__time--num">{{seconds}}</h1>
                    <p class="countdown__time--desc">SECS</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdown: 0, // Initial countdown value in seconds
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    },

    mounted() {
        this.startCountdown();
    },

    methods: {
        startCountdown() {
            const futureDate = new Date("2024-01-31T00:00:00"); // Set your future date here
            const currentTime = new Date();
            const timeDifference = futureDate - currentTime;
            if (timeDifference > 0) {
                this.countdown = Math.floor(timeDifference / 1000);
                let timer = setInterval(() => {
                    if (this.countdown > 0) {
                        this.days = Math.floor(this.countdown / 86400);
                        this.hours = Math.floor((this.countdown % 86400) / 3600);
                        this.minutes = Math.floor((this.countdown % 3600) / 60);
                        this.seconds = this.countdown % 60;
                        this.countdown--;
                    } else {
                        clearInterval(timer);
                    }
                }, 1000);
            }
        }
    }
};
</script>

<style scoped lang="scss">
    .countdown {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 1rem 0 2rem;
        border-radius: 4px;

        &__time {
            width: 3.5rem;
            height: 3.5rem;
            margin: 0 .5rem;
            border-radius: 6rem;
            background-color: $secondary;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;    

            &--num {
                font-size: 1.1rem;
                font-weight: bold;
                margin-bottom: 0;
                color: #fff;
            }
            
            &--desc {
                color: #fff;
                font-size: .6rem;
                margin-bottom: 0;
                font-family: 'Inter', sans-serif;
            }
        }
    }

    @media (min-width: 768px) {
        .countdown {
            &__time {
                width: 5rem;
                height: 5rem;

                &--num {
                    font-size: 1.5rem;
                }
                
                &--desc {
                    font-size: .75rem;
                }
            }
        }
    }
</style>
