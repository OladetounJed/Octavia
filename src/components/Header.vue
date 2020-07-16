<template>
    <header class="header">
        <div class="header__left">
          <router-link to="/"
            ><img
              src="../assets/images/logo.png"
              alt="Logo"
              class="header__logo"
          /></router-link>
        </div>
        <div class="header__middle" v-bind:style="navStyle">
          <img
            src="../assets/images/close.svg"
            alt="Close Icon"
            class="header__close"
            @click="closeNav"
          />
          <ul>
            <li>
              <router-link to="/"  class="header__link"
                ><img
                  src="../assets/images/logo.png"
                  alt="Logo"
                  class="header__logo"
              /></router-link>
            </li>
            <li><router-link to="/register"  class="header__link">Register</router-link></li>
            <li><router-link to="/login"  class="header__link">Login</router-link></li>
          </ul>
        </div>
        <div class="header__right">
          <img
            src="../assets/images/menu.svg"
            alt="Menu Icon"
            class="header__menu"
            @click="openNav"
          />
        </div>
      </header>
</template>

<script>
export default {
    data() {
    return {
      jobs: [],
      navStyle: {}
    };
  },
    methods: {
    openNav() {
      this.navStyle = { display: "block" };
    },
    closeNav() {
      this.navStyle = { display: "none" };
    }
  }
}
</script>

<style lang="scss">

</style>