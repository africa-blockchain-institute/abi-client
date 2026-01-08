<template>
  <div class="container-fluid">
    <div class="row min-vh-100 align-items-center justify-content-center">
      <div class="col-md-6 text-center">
        <div class="mb-4">
          <i class="fas fa-graduation-cap fa-5x text-muted mb-3"></i>
        </div>
        <h1 class="display-4 mb-3">Courses No Longer Available</h1>
        <p class="lead mb-4 text-muted">
          We are no longer offering courses at this time. Thank you for your interest in our educational programs.
        </p>
        <div class="mb-4">
          <nuxt-link to="/" class="btn btn-primary btn-lg me-3">
            <i class="fas fa-home me-2"></i>Return Home
          </nuxt-link>
          <nuxt-link to="/contact-us" class="btn btn-outline-primary btn-lg">
            <i class="fas fa-envelope me-2"></i>Contact Us
          </nuxt-link>
        </div>
        <p class="small text-muted">
          Interested in other programs? Check out our 
          <nuxt-link to="/incubator-program" class="text-decoration-none">Incubator Program</nuxt-link> or 
          <nuxt-link to="/insights" class="text-decoration-none">Insights</nuxt-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Courses No Longer Available - Africa Blockchain Institute',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Courses are no longer available. Explore our other programs and resources.'
        }
      ]
    }
  }
}
</script>