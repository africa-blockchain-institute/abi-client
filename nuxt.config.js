import redirectSSL from 'redirect-ssl'

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Africa Blockchain Institute',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Africa Blockchain Institute - a Pan African Institute founded on the premise to promote the adoption, development, and use of Blockchain Technology across Africa.' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel:"preconnect", href: "https://fonts.googleapis.com"},
			{ rel:"preconnect", href: "https://fonts.gstatic.com"},
			{ rel:'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" },
			{ rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300&display=swap"},
			{ rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap"},
		],
		script : [
			{ src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", },
			{ src: "https://kit.fontawesome.com/24b54c8fdd.js", type: 'text/javascript' },
			{ src: "//code.tidio.co/bvlgrr2nu3l3g6zzvkejcdavzcyseijl.js", type: 'text/javascript' },
			{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css',
        "@/assets/css/main.css"
    ],

	loading: {
        color: '#198754',
        height: '2px',
    },

	router:{
		middleware: [
            'clearValidationErrors',
            'courses-redirect',
        ]
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/axios.js' },
		{ src: '~/plugins/disqus.js' },
        { src: '~/plugins/filters.js' },
		{ src: '~/plugins/vue-paginate.js' },
		{ src: '~/plugins/vue-paystack.js',  ssr: false },
		{ src: '~/plugins/vue-flutterwave.js',  ssr: false },
        { src: "~/plugins/vue-player.js", ssr: false },
        { src: "~/plugins/vue-quill-editor.js", ssr: false },
        // { src: "~/plugins/froala.js", ssr: false },
		{ src: '~/plugins/mixins/user.js' },
        { src: '~/plugins/mixins/validation.js' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		'@nuxtjs/auth-next',
        '@nuxtjs/toast',
		'@nuxtjs/style-resources',
		[ 
            'nuxt-sweetalert2', {
                confirmButtonColor : '#F68634',
                cancelButtonColor : '#808080',
            }
        ],
	],
	
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// baseURL: "http://127.0.0.1:8081/api/v1",
		// baseURL: "https://africabi-api.herokuapp.com/api/v1",
		baseURL: "https://abi-api.onrender.com/api/v1",
	},

	auth:{
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
				},
				user: {
					property: 'data.me',
				},
				endpoints: {
					login: { url: '/auth/login', method: 'post' },
					logout: { url: '/auth/logout', method: 'post' },
					user: { url: '/users/me', method: 'get' }
				}
			},

			facebook: {
				endpoints: {
					user: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
				},
				clientId: '978156392736676',
				scope: ['public_profile', 'email']
			},

			google: {
				clientId: '398761984032-prs55rm4sp4eu5uhtna93h2qa7dm03as.apps.googleusercontent.com',
				codeChallengeMethod: '',
				responseType: 'code',
				endpoints: {
					// token: 'http://127.0.0.1:8080/api/v1/auth/google/callback',
					// userInfo: 'http://127.0.0.1:8080/api/v1/users/me',
					token: 'https://africablockchain.institute/api/v1/auth/google/callback',
					userInfo: 'https://africablockchain.institute/api/v1/users/me',
				},
				user: {
					// autoFetch: false
					property: 'data.me'
				},
				token: {
					property: 'token',
					global: true
				}
			},
        },
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en'
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['vue-quill-editor'],
		extend(config, ctx) {
			// Add rule for handling quill
			config.module.rules.push({
				test: /\.js$/,
				loader: 'babel-loader',
				include: [/node_modules\/quill/]
			})
		}
	},

	styleResources: {
        scss: [
            '~assets/scss/main.scss',
        ]
    },

	toast: {
        duration: '5000',
        iconPack: 'fontawesome'
    },

	serverMiddleware: [
        redirectSSL.create({
            enabled: process.env.NODE_ENV === 'production'
        }),
    ],

	publicRuntimeConfig: {
		appUrl: process.env.NODE_ENV === 'production' ? 'https://africablockchain.institute' : 'http://127.0.0.1:3000',
		flwPublicKey: "FLWPUBK_TEST-4b40a5f0241d96e8fe02d9ca468660ca-X",
		flwPublicKeyLive: "FLWPUBK-43d213fafa97b6ae15ded3fe5cad4f9f-X",
		flwSecretKey: "FLWSECK_TEST-07ca0fc094f26d24d65a2175bf5a4dcd-X"
	}
}
