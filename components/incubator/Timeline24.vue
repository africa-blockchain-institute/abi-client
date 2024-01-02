<template>
    <div class="container">
        <div class="tl">
            <div class="tl-row">
                <div class="tl-time">
                    1st – 31st January 2024
                </div>
                <div class="tl-content shadow">
                    <div class="tl-shape"></div>
                    <div class="tl-text">
                        <h4>Applications Opens</h4>
                        <p>Apply Now: Open Enrollment for a Limited Time. Don't Miss Out!</p>
                    </div>
                </div>
            </div>

            <div class="tl-row">
                <div class="tl-time"> 1st - 28th February 2024 </div>
                <div class="tl-content shadow">
                    <div class="tl-shape"></div>
                    <div class="tl-text">
                        <h4>Selection and Notification</h4>
                        <p>Applicants who successfully qualify will receive notification of their selection by this deadline.</p>
                    </div>
                </div>
            </div>

            <div class="tl-row">
                <div class="tl-time"> 1st March 2024 - 30th June 2024 </div>
                <div class="tl-content shadow">
                    <div class="tl-shape"></div>
                    <div class="tl-text">
                        <h4>Incubation Program</h4>
                        <p>Experience a 4-month program crafting and launching your blockchain projects.</p>
                    </div>
                </div>
            </div>

            <div class="tl-row">
                <div class="tl-time"> June 2024 </div>
                <div class="tl-content shadow">
                    <div class="tl-shape"></div>
                    <div class="tl-text">
                        <h4>Demo Day</h4>
                        <p>The program ends with Demo Day, allowing startups to showcase to the ecosystem.</p>
                    </div>
                </div>
            </div>

            <div class="tl-row">
                <div class="tl-time"> July 2024 </div>
                <div class="tl-content shadow">
                    <div class="tl-shape"></div>
                    <div class="tl-text">
                        <h4>Post-Incubation</h4>
                        <p>After the incubation, candidates enjoy post-incubation supports.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .tl {
        position: relative;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        padding: 5rem 11rem;
        margin: 0 auto 1rem auto;
        overflow: hidden;
    }
    
    .tl:after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -2px;
        border-right: 1px solid #000;
        height: 100%;
        display: block;
    }

    .tl-row {
        padding-left: 50%;
        position: relative;
        margin-bottom: 2.5rem;
    }

    .tl-row .tl-time {
        position: absolute;
        right: 50%;
        top: 45%;
        text-align: right;
        margin-right: 3rem;
        color: #000;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .tl-row .tl-content {
        position: relative;
        background: #fff;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;

        display: flex;
        align-items: center;
        padding-right: 3.5rem;
    }

    
    .tl-row .tl-content .tl-shape {
        position: relative;
        width: 3rem;
        height: 8.5rem;
        background-color: #F68634;
        border-radius: 0 50% 50% 0;
        margin-right: 2rem;
    }

    .tl-row .tl-content:before {
        content: "";
        position: absolute;
        top: 50%;
        right: -49px;
        width: 20px;
        height: 20px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        z-index: 10;
        background: #F68634;
    }

    .tl-row .tl-content h4 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1.1rem;
        font-weight: bold;
        color: #000;
    }
    
    .tl-row .tl-content p {
        color: #000;
        font-size: .9rem;
        margin-bottom: 0;
    }

    .tl-row:nth-child(even) .tl-content {
        margin-left: 40px;
        text-align: left;
    }

    .tl-row:nth-child(even) .tl-content:after {
        left: -8px;
        right: initial;
        border-bottom: 0;
        border-left: 0;
        transform: rotate(-135deg);
    }

    .tl-row:nth-child(even) .tl-content:before {
        left: -52px;
        right: initial;
    }

    .tl-row:nth-child(odd) {
        padding-left: 0;
        padding-right: 50%;
    }

    .tl-row:nth-child(odd) .tl-time {
        right: auto;
        left: 50%;
        text-align: left;
        margin-right: 0;
        margin-left: 2.5rem;
    }

    .tl-row:nth-child(odd) .tl-content {
        margin-right: 40px;
    }

    .tl-row:nth-child(odd) .tl-content:after {
        right: -8px;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(45deg);
    }

    @media (max-width: 1200px) {
        .tl {
            padding: 15px;
        }
        .tl:after {
            border: 0;
        }
        .tl .tl-row:nth-child(odd) {
            padding: 0;
        }
        .tl .tl-row:nth-child(odd) .tl-time {
            position: relative;
            top: 0;
            left: 0;
            margin: 0 0 10px 0;
        }
        .tl .tl-row:nth-child(odd) .tl-content {
            margin: 0;
        }
        .tl .tl-row:nth-child(odd) .tl-content:before {
            display: none;
        }
        .tl .tl-row:nth-child(odd) .tl-content:after {
            display: none;
        }
        .tl .tl-row:nth-child(even) {
            padding: 0;
        }
        .tl .tl-row:nth-child(even) .tl-time {
            position: relative;
            top: 0;
            left: 0;
            margin: 0 0 10px 0;
            text-align: left;
        }
        .tl .tl-row:nth-child(even) .tl-content {
            margin: 0;
        }
        .tl .tl-row:nth-child(even) .tl-content:before {
            display: none;
        }
        .tl .tl-row:nth-child(even) .tl-content:after {
            display: none;
        }
    }
</style>
