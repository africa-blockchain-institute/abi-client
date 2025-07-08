<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand header__logo">
          <img src="/logo.png" alt="Africa blockchain institute Logo" />
        </nuxt-link>

        <button
          class="navbar-toggler header__toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse header__links justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/about-abi" nuxt-link-active exact
                >About ABI</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/faculty" nuxt-link-active exact
                >Faculty</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/courses" nuxt-link-active
                >Courses</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/enterprise"
                nuxt-link-active
                exact
                >Enterprise</nuxt-link
              >
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.careers.africablockchain.institute/"
                >Careers</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://africablockchain.institute/blockchain-report"
                >Research</a
              >
            </li> -->
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/contact-us"
                nuxt-link-active
                exact
                >Contact Us</nuxt-link
              >
            </li>
            <li class="nav-item" v-if="$auth.loggedIn">
              <nuxt-link class="nav-link btn" to="/user/courses"
                >Dashboard</nuxt-link
              >
            </li>
            <li class="nav-item" v-else>
              <nuxt-link class="nav-link btn" to="/auth/login">Login</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    if (screen.width <= 768) {
      var myCollapse = document.getElementById("navbarNav");
      var myCollapses = document.querySelectorAll(".nav-item");

      myCollapses.forEach((el) => {
        if (el) {
          el.addEventListener("click", function () {
            new bootstrap.Collapse(myCollapse, {
              toggle: true,
            });
          });
        }
      });
    }
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  &__logo {
    img {
      width: 9rem;
    }
  }

  &__toggler {
    border: none;
    box-shadow: none;
  }

  &__links {
    .nav-item {
      margin-bottom: 0.5rem;
      text-align: center;

      a {
        font-size: 0.9rem;
        font-weight: bold;

        &.nuxt-link-exact-active {
          color: $primary;
        }
      }

      .btn {
        @include button();
        padding: 0.5rem 1rem;
      }
    }
  }
}

@media (min-width: 992px) {
  .header {
    &__logo {
      img {
        width: 10rem;
      }
      
    }

    &__links {
      margin-bottom: 0;

      .nav-item {
        margin-right: 1rem;
        margin-bottom: 0;

        &:last-child {
          margin-right: 0;
        }

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
