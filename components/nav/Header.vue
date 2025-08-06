<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand header__logo">
          <img src="/logo_1.png" alt="Africa blockchain institute Logo" />
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
            <li class="nav-item" v-for="link in navLinks" :key="link.path">
              <nuxt-link class="nav-link" :to="link.path" nuxt-link-active exact
                >{{ link.name }}</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div
          class="collapse navbar-collapse header__links justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EN
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">FR</a></li>
                <li><a class="dropdown-item" href="#">ES</a></li>
              </ul>
            </li> -->
            <li class="nav-item">
              <a href="https://store.pesapal.com/africablockchaininstitute" class="nav-link btn" target="blank" > Donate </a>
            </li>
            <!-- <li class="nav-item" v-if="$auth.loggedIn">
              <nuxt-link class="nav-link btn" to="/user/courses"
                >Dashboard</nuxt-link
              >
            </li>
            <li class="nav-item" v-else>
              <nuxt-link class="nav-link btn" to="/auth/login">Login</nuxt-link>
            </li> -->

            
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { name: "About ABI", path: "/about-abi" },
        { name: "Programs", path: "/programs" },
        { name: "Research", path: "/research" },
        { name: "Enterprise", path: "/enterprise" },
        { name: "Insights", path: "/insights" },
        { name: "Our Impact", path: "/our-impact" },
        { name: "Contact Us", path: "/contact-us" },
      ],
      isMobile: false,
      isCollapsed: true,
      loading: false,
    };
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
    background-color: white;
    z-index: 5;

    .nav-item {
      margin-bottom: 0.5rem;
      text-align: center;

      a {
        font-size: 0.9rem;
        font-weight: bold;

        &:hover {
          color: $secondary;
        }

        &.nuxt-link-exact-active {
          color: $secondary;
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
      background-color: transparent;

      .nav-item {
        margin-right: 1rem;
        margin-bottom: 0;

        &:last-child {
          margin-right: 0;
        }

        a {
          font-size: 0.9rem;
          color: $white;
        }
      }
    }
  }
}
</style>
