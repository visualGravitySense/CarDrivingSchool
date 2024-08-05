<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">
            <nuxt-link class="flex pt-8 sm:pt-0" to="/">
              <img src="@/assets/img/viktorija-logo-1.png" alt="logo-viktorija">
            </nuxt-link> 
          </div>
          <div class="menu" :class="{ 'menu-open': isMenuOpen }">
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
                
              </li>
            </ul>
            <div class="cta-buttons">
              <nuxt-link to="/signin" class="signin-link">Log in</nuxt-link>
              <nuxt-link to="/signup" class="signup-button">Sign up</nuxt-link>
            </div>
          </div>
          <div class="burger-menu" @click="toggleMenu">
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [

        { title: 'About', url: '/about' },
        { title: 'Services', url: '/services' },
        { title: 'Reviews', url: '/reviews' },
        { title: 'Faq', url: '/faq' },
        // { title: 'Promotions', url: '/promotions' },
        { title: 'Contact', url: '/contact' },
      ],
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style >
.navbar {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin-left: 1rem;
}

.logo a {
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbar-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.menu {
  display: flex;
  align-items: center;
}

.navbar-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-item {
  margin-left: 1rem;
}

.navbar-link {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.navbar-link:hover,
.navbar-link.nuxt-link-exact-active {
  color: #4165de;
}

.cta-buttons {
  display: flex;
  align-items: center;
}


.signin-link {
  /* background-color: #4165de; */
  color: #4165de;
  padding: 0.5rem 1rem;
  text-decoration: none;
  /* border-radius: 0.25rem; */

  /* transition: background-color 0.3s; */
  transition: color 0.3s;
}

.signup-button {
  background-color: #41de73;
  margin-left: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;

  transition: background-color 0.3s;
}

.signup-button:hover {
  background-color: #18875a;
}

.burger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.burger-bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
  transition: 0.4s;
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }

  .menu.menu-open {
    display: flex;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #f8f9fa;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .navbar-list {
    flex-direction: column;
    width: 100%;
  }

  .navbar-item {
    margin-left: 0;
    width: 100%;
  }

  .navbar-link {
    padding: 1rem;
    width: 100%;
    text-align: left;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .signup-button,
  .signin-button {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }

  .burger-menu {
    display: flex;
  }
}
</style>
