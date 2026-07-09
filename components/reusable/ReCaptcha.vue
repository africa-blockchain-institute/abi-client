<template>
  <div class="recaptcha-wrapper" v-if="!hideRecaptcha">
    <div 
      :id="`turnstile-${_uid}`" 
      class="cf-turnstile"
      data-sitekey="0x4AAAAAADyovV4Fph6cYj5t"
      data-theme="light"
    ></div>
    <div v-if="error" class="alert alert-danger mt-2" role="alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReCaptcha',
  props: {
    hideRecaptcha: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      token: null,
      error: null,
      containerId: null,
      widgetId: null,
    }
  },
  mounted() {
    this.containerId = `turnstile-${this._uid}`
    
    // Ensure DOM is ready before rendering
    this.$nextTick(() => {
      this.renderWidget()
    })
  },
  methods: {
    renderWidget() {
      const attemptRender = () => {
        if (!window.turnstile) {
          setTimeout(attemptRender, 500)
          return
        }

        try {
          // Make sure container exists in DOM before rendering
          const container = document.getElementById(this.containerId)
          if (!container) {
            setTimeout(attemptRender, 500)
            return
          }

          // Only render if not already rendered
          if (container.children.length === 0) {
            window.turnstile.render(`#${this.containerId}`, {
              sitekey: '0x4AAAAAADyovV4Fph6cYj5t',
              theme: 'light',
              callback: (token) => this.onVerify(token),
              'error-callback': () => this.onError(),
              'expired-callback': () => this.onExpire(),
            })
          }
        } catch (err) {
          console.error('Turnstile render error:', err)
        }
      }

      attemptRender()
    },
    async getToken() {
      try {
        this.error = null
        
        // Get token from Turnstile
        if (!window.turnstile) {
          throw new Error('Turnstile not loaded yet')
        }

        // If widget hasn't been rendered yet, try rendering it now
        const container = document.getElementById(this.containerId)
        if (container && container.children.length === 0) {
          this.renderWidget()
          // Wait for render to complete
          await new Promise(resolve => setTimeout(resolve, 1000))
        }

        // Get the response token
        const token = window.turnstile.getResponse(this.containerId)
        
        if (!token) {
          throw new Error('Please complete the Turnstile challenge')
        }
        return token
      } catch (err) {
        this.error = err.message || 'Turnstile verification failed. Please try again.'
        console.error('Turnstile error:', err)
        throw err
      }
    },
    onVerify(token) {
      this.token = token
      window.__turnstileToken = token
      this.error = null
    },
    onError() {
      this.error = 'Turnstile encountered an error. Please try again.'
    },
    onExpire() {
      this.token = null
      window.__turnstileToken = null
    },
  },
}
</script>

<style scoped>
.recaptcha-wrapper {
  margin-bottom: .5rem;
}
</style>
