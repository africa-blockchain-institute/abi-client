<template>
  <div class="recaptcha-wrapper" v-if="!hideRecaptcha">
    <div 
      :id="`recaptcha-${_uid}`" 
      class="g_recaptcha"
      data-sitekey="6LcyC0otAAAAANUykd-b_5WVc5EGy7gAQ40B1HQe"
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
    this.containerId = `recaptcha-${this._uid}`
    
    // Ensure DOM is ready before rendering
    this.$nextTick(() => {
      this.renderWidget()
    })
  },
  methods: {
    renderWidget() {
      const attemptRender = () => {
        if (!window.grecaptcha) {
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
            this.widgetId = window.grecaptcha.render(this.containerId, {
              sitekey: '6LcyC0otAAAAANUykd-b_5WVc5EGy7gAQ40B1HQe',
              callback: () => this.onVerify(),
              'expired-callback': () => this.onExpire(),
            })
          }
        } catch (err) {
          console.error('reCAPTCHA render error:', err)
        }
      }

      attemptRender()
    },
    async getToken() {
      try {
        this.error = null
        
        // Get token from grecaptcha
        if (!window.grecaptcha) {
          throw new Error('reCAPTCHA not loaded yet')
        }

        // If widget hasn't been rendered yet, try rendering it now
        const container = document.getElementById(this.containerId)
        if (container && container.children.length === 0) {
          this.renderWidget()
          // Wait for render to complete
          await new Promise(resolve => setTimeout(resolve, 1000))
        }

        // Try to get response (use 0 for first widget if widgetId is null)
        const token = window.grecaptcha.getResponse(this.widgetId || 0)
        
        if (!token) {
          throw new Error('Please complete the reCAPTCHA challenge')
        }
        return token
      } catch (err) {
        this.error = err.message || 'reCAPTCHA verification failed. Please try again.'
        console.error('reCAPTCHA error:', err)
        throw err
      }
    },
    onVerify() {
      this.token = window.grecaptcha.getResponse(this.widgetId || 0)
      window.__recaptchaToken = this.token
    },
    onExpire() {
      this.token = null
      window.__recaptchaToken = null
    },
  },
}
</script>

<style scoped>
.recaptcha-wrapper {
  margin-bottom: 1rem;
}
</style>
