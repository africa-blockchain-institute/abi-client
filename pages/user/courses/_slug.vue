<template>
    <div class="wrapper">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-7 col-lg-8 order-2 order-md-1 wrapper__body">
                    <div class="row">
                        <div class="col-12 wrapper__title">
                            <h2 class="wrapper__title--head">{{ course.title  }} </h2>
                        </div>

                        <div class="col-12 wrapper__video">
                            <div class="wrapper__video--video"
                                :playsinline="playsinline"
                                @play="onPlayerPlay($event)"
                                @ended="onPlayerEnded($event)"
                                v-video-player:myVideoPlayer="playerOptions">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 wrapper__head">
                            <ul class="nav wrapper__head--links">
                                <li class="nav-item link">
                                    <a class="nav-link active" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab">Overview</a>
                                    <a class="nav-link" id="pills-conversation-tab" data-bs-toggle="pill" data-bs-target="#pills-conversation" type="button" role="tab">Conversation</a>
                                    <a class="nav-link" id="pills-project-tab" data-bs-toggle="pill" data-bs-target="#pills-project" type="button" role="tab">Project</a>
                                    <a class="nav-link" id="pills-certification-tab" data-bs-toggle="pill" data-bs-target="#pills-certification" type="button" role="tab" v-if="checkCompleted" >Certification</a>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-overview" role="tabpanel">
                                <div class="row">
                                    <div class="col-12 wrapper__overview">
                                        <h2 class="wrapper__overview--title">Course Description</h2>
                                        <div class="wrapper__overview--desc" v-html="course.description"></div>
                                    </div>
                                    
                                    <div class="col-12 wrapper__overview">
                                        <h2 class="wrapper__overview--title">Requirements</h2>
                                        <div class="wrapper__overview--desc" v-html="course.requirements"></div>
                                    </div>
                                    
                                    <div class="col-12 wrapper__overview">
                                        <h2 class="wrapper__overview--title">Learning Outcomes</h2>
                                        <div class="wrapper__overview--desc" v-html="course.learning_outcome"></div>
                                    </div>

                                    <div class="col-12 wrapper__overview">
                                        <h2 class="wrapper__overview--title">Certification</h2>
                                        <div class="wrapper__overview--desc" v-html="course.certification"></div>
                                    </div>

                                    <div class="col-12 wrapper__overview">
                                        <h2 class="wrapper__overview--title">Career Prospects</h2>
                                        <div class="wrapper__overview--desc" v-html="course.career_prospect"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-conversation" role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="wrapper__conversation--title">Join the Conversation</h2>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <div class="my-2">
                                            <Disqus :identifier="this.$route.path" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-project" role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="wrapper__project--title">Project</h2>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 wrapper__overview">
                                        <div class="wrapper__overview--desc" v-html="course.project"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-certification" role="tabpanel" v-if="checkCompleted">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="wrapper__project--title">Certification</h2>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 wrapper__overview">
                                        <div class="wrapper__overview--desc">
                                            <p> Having Completed the <b> {{ course.title | capitalize }} </b> you've earned the certification. </p>
                                            <p> Click the button below to get your certificate directly into your email address.</p>
                                        </div>
                                    </div>
                                    <div class="col-12 wrapper__overview">
                                        <div class="wrapper__overview--desc text-center">
                                            <button class="btn wrapper__overview--btn" @click="getCertificate()">Get Certification</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-5 col-lg-4 order-1 order-md-2 wrapper__list">
                   <div class="card border-0 shadow sticky-md-top">
                        <div class="text-start border-0 card-header">
                            <h6 class="title">{{ course.title }} </h6>
                            <small class="time">{{ user_lessons.length }}/{{ course.lessons_count }} | {{ course.duration | secondsToHours  }} Hours </small>
                        </div>
                        <div class="card-body">
                            <ul class="list-group" v-for="(lesson, index) in course.lessons" :key="index">
                                <li class="text-break" @click="switchNextLesson(lesson.url, lesson.id)">
                                    <label class="wrap">
                                        <input type="checkbox" :checked="checkCompletedLesson(lesson.id)" disabled>
                                        <span class="checkmark"></span>
                                    </label>
                                    <p class="text-break"><span>{{ index + 1 }}.</span> {{ lesson.title }} </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        layout: 'user',

        head(){
            return{
                title: `${this.course.title} -  Africa Blockchain Institute`,
                meta: [
                    {
                        name: `${this.course.title}`,
                        content: `${this.course.title}`
                    }
                ],
            }
        },

        data(){
            return{
                currentTab: "Overview",
                tabs: [
                    "Overview", "Conversation", "Project"
                ],

                tab: "collapseOne",

                pageConfig: {
                    title: '',
                    slug: '',
                    identifier: this.$route.path,
                },

                course: {},
                user_lessons: [],
                lesson_id: "",
                checkCompleted: false,

                // component options
                playsinline: true,
                
                // videojs options
                playerOptions: {
                    muted: false,
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

        computed:{
            ...mapGetters({
                user: 'loggedInUser'
            })
        },

        created(){
            this.checkUser();
            this.getCourse();
            this.getLessons();
        },

        mounted(){
            this.checkCompletedLesson();
            this.checkUserHasCompletedLessons();
        },

        methods: {
            async checkUser(){
                const user = (this.user.me) ? this.user.me : this.user;
                let status = await this.$axios.$post(`/users/courses/check-user`, { user: user.id, slug: `${this.$route.params.slug}` });
                
                if(status.data == false){
                    this.$router.push({ name: "user-courses" });
                }
            },

            async getCourse(){
                let doc = await this.$axios.$get(`/courses/${this.$route.params.slug}`);
                this.course = doc.data;

                //you should get this from the local storage;
                this.playerOptions.sources[0].src = doc.data.lessons[0].url;
                this.playerOptions.poster = doc.data.image;
                this.lesson_id = doc.data.lessons[0].id;

                this.pageConfig.title = this.course.title;
                this.pageConfig.slug = this.course.slug;
            },

            async getLessons(){
                const user = (this.user.me) ? this.user.me : this.user;
                let docs = await this.$axios.$get(`/users/${user.id}`)
                
                docs.data.lessons.find(el => {
                    const [curr] = Object.keys(el);

                    if(curr == this.course.id ){
                        this.user_lessons = el[curr];
                    }
                });
            },

            checkCompletedLesson(lesson_id){
                let checkCompleted;

                this.user_lessons.find(el => {
                    if( el.lesson_id == lesson_id && el.completed == true ){
                        checkCompleted = true
                        return;
                    }
                });

                return checkCompleted;
            },

            switchNextLesson(url, lesson_id){
                this.playerOptions.sources[0].src = url;
                this.playerOptions.autoplay = true;
                this.lesson_id = lesson_id;
            },

            async onPlayerEnded(player){
                const user = (this.user.me) ? this.user.me : this.user;

                const userInfo = {
                    course_title: this.$route.params.slug,
                    user_id: user.id,
                    lesson_id: this.lesson_id
                }

                const res = await this.$axios.$post(`/users/courses/update-user-lesson`, userInfo);

                this.getLessons();
                this.checkCompletedLesson(userInfo.lesson_id);
            },

            async onPlayerPlay(player) {
            },

            async checkUserHasCompletedLessons(){
                try {
                    let doc = await this.$axios.$get(`/users/courses/check-user-completed-course/${this.$route.params.slug}`);
                    this.checkCompleted = doc.data;
                } catch (err) {
                    console.log(err);
                }
            },

            async getCertificate(){
                try {    
                    const user = (this.user.me) ? this.user.me : this.user;

                    const userInfo = {
                        course_title: this.$route.params.slug,
                        user_id: user.id,
                    }

                    let doc = await this.$axios.$post(`/users/courses/get-certificate`, userInfo);

                    this.$swal.fire({
                        title: 'Certificate Awarded!',
                        text: "Your certificate has been sent to your email address.",
                        type: 'success',
                        confirmButtonText: 'Okay!'

                    }).then((result) => {
                        if (result.value) {
                            
                        }
                    })

                } catch (err) {
                    this.$swal.fire({
                        title: 'Certificate Award Failed!',
                        text: "certificate can not be awarded at this time. Please try later.",
                        type: 'error',
                        confirmButtonText: 'Okay!'

                    }).then((result) => {
                        if (result.value) {
                            
                        }
                    })
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        margin: 2rem 0;

        &__title{
            margin-bottom: 1rem;
            
            &--head{
                font-weight: bold;
                font-size: $font-hd;
            }
        }

        &__video{
            margin-bottom: 2rem;
        }

        &__head{
            margin-bottom: 2rem;

            &--links{
                .link{
                    a{
                        display: inline;
                        font-weight: bold;
                        color: $secondary-2;
                        margin-right: .5rem;
                        padding: .5rem .75rem;
                        
                        &.active{
                            color: #fff;
                            border-radius: .5rem;
                            background: $secondary;
                        }
                    }
                }
            }
        }

        &__overview{
            margin-bottom: 1rem;

            &--title{
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            &--desc{
                font-size: .9rem;   
                overflow: auto;
            }

            &--check{
                padding-left: 0;

                li{
                    display: inline-block;
                    margin-bottom: .5rem;
                    font-size: .9rem;

                    .fas{
                        color: $secondary;
                    }
                }
            }

            &--btn{
                @include button();
            }
        }

        &__project{
            &--title{
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 2rem;
            }
        }

        &__conversation{
            &--title{
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 2rem;
            }
        }

        &__list{
            margin-bottom: 2rem;

            .card{
                margin-bottom: 2rem;

                &-header{
                    background: $primary-light;
                    padding: 1rem;

                    .title{
                        font-size: $font-rg;
                        font-weight: bold;
                        margin-bottom: 0;
                    }

                    .time {
                        font-size: .75rem;
                    }
                }

                &-body{
                    padding: 1rem;

                    ul.list-group {
                        li {
                            display: block;
                            margin-bottom: .65rem;

                            p {
                                color: $dark;
                                text-decoration: none;
                                font-size: .9rem;
                                position: relative;
                                left: 2rem;
                                bottom: .2rem;
                                margin-bottom: 0;
                                cursor: pointer;

                                &:hover, &.active {
                                    color: $primary;
                                }
                            }
                            
                            .wrap {
                                display: block;
                                position: relative;
                                margin-bottom: 0;
                                cursor: pointer;
                                font-size: 1rem;
                                user-select: none;
                            
                                /* Hide the browser's default checkbox */
                                input {
                                    cursor: pointer;
                                    position: absolute;
                                    opacity: 0;
                                    height: 0;
                                    width: 0;
                                }

                                /* Create a custom checkbox */
                                .checkmark {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    bottom: 0;
                                    height: 1.1rem;
                                    width: 1.2rem;
                                    border-radius: .2rem;
                                    background-color: lightgray;
                                }

                                /* On mouse-over, add a grey background color */
                                &:hover input ~ .checkmark {
                                    background-color: #ccc;
                                }

                                /* When the checkbox is checked, add a blue background */
                                input:checked ~ .checkmark {
                                    background-color: $secondary;
                                }

                                /* Create the checkmark/indicator (hidden when not checked) */
                                .checkmark:after {
                                    content: "";
                                    position: absolute;
                                    display: none;
                                }

                                /* Show the checkmark when checked */
                                input:checked ~ .checkmark:after {
                                    display: block;
                                }

                                /* Style the checkmark/indicator */
                                .checkmark:after {
                                    left: 5.5px;
                                    top: 1.2px;
                                    width: 7px;
                                    height: 12px;
                                    border: solid white;
                                    border-width: 0 3px 3px 0;
                                    -webkit-transform: rotate(45deg);
                                    -ms-transform: rotate(45deg);
                                    transform: rotate(45deg);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            &__title{
                margin-bottom: 1rem;
                
                &--head{
                    font-weight: bold;
                    font-size: $font-md;
                }
            }

            &__list{
                .card{
                    margin-bottom: 2rem;
                    margin-top: 3rem;
                    top: 1rem;

                    &-header{
                        padding: 1.5rem;

                        .title{
                            font-size: $font-rg;
                        }

                        .time {
                            font-size: .85rem;
                        }
                    }

                    &-body{
                        padding: 1.5rem;

                        ul.list-group {
                            li {
                                display: block;
                                margin-bottom: 1rem;

                                a {
                                    font-size: 1rem;
                                    left: 2rem;
                                    bottom: .2rem;
                                }
                                
                                .wrap {
                                    .checkmark {
                                        height: 1.15rem;
                                        width: 1.2rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .wrapper{
            margin: 3rem 1rem;

            &__title{
                margin-bottom: 1rem;
                
                &--head{
                    font-weight: bold;
                    font-size: $font-md;
                }
            }

            &__overview{
                margin-bottom: 2rem;

                &--title{
                    font-size: 1.2rem;
                }

                &--desc{
                    font-size: $font-rg;   
                }

                &--check{
                    padding-left: 0;

                    li{
                        font-size: $font-rg;  
                        margin-bottom: .75rem;

                        .fas{
                            margin-right: .75rem;
                            color: $secondary;
                        }
                    }
                }
            }

            &__project{
                &--title{
                    font-size: $font-hd;
                }
            }

            &__conversation{
                &--title{
                    font-size: $font-hd;
                }
            }

            &__project{
                &--title{
                    font-size: $font-hd;
                }
            }

            &__list{
                .card{
                    margin-bottom: 2rem;

                    &-header{
                        padding: 1.5rem;

                        .title{
                            font-size: $font-rg;
                        }

                        .time {
                            font-size: .85rem;
                        }
                    }

                    &-body{
                        padding: 1.5rem;

                        ul.list-group {
                            li {
                                display: block;
                                margin-bottom: 1rem;

                                a {
                                    font-size: 1rem;
                                    left: 2rem;
                                    bottom: .2rem;
                                }
                                
                                .wrap {
                                    .checkmark {
                                        height: 1.15rem;
                                        width: 1.2rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>