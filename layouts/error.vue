<template>
    <div class="wrapper">
		<div class="container wrapper__page">
			<div class="row">
				<div class="col-12 justify-content-center text-center">
					<img src="~/assets/images/empty.png" alt="" class="wrapper__page--img">
					<h1 v-if="error.statusCode === 404" class="wrapper__page--title">Page not found</h1>
					<h1 v-else class="wrapper__page--title">An error occurred</h1>
					<NuxtLink to="/" class="btn">Home page</NuxtLink>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss" scoped>
	.wrapper{
		&__page{
			padding: 3rem 1rem;

			&--img{
				width: 12rem;
				display: inline-block;
				margin-bottom: 5rem;
			}

			&--title{
				font-size: $font-hd;
				font-weight: bold;
				margin-bottom: 2rem;
			}

			.btn{
				@include button;
			}
		}
	}

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
		.wrapper{
            &__page{
				padding: 5rem 1rem;

				&--img{
					width: 15rem;
					margin-bottom: 7rem;
				}

				&--title{
					font-size: $font-md;
				}
			}
        }
	}
</style>