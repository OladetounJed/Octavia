<template>
  <div class="login">
    <app-header></app-header>
    <div class="login__con">
      <div class="login__header">
        <h3 class="login__heading">Login Into The New Bank!</h3>
      </div>
      <form action="login" class="login__form" @submit.prevent="submit">
        <input
          type="email"
          class="register__input login__email animate__animated animate__swing"
          placeholder="Email Address"
          v-model="form.email"
          autocomplete="email"
        />
        <input
          type="password"
          class="register__input login__password animate__animated animate__swing"
          placeholder="Password"
          v-model="form.password"
          required
        />
        <input
          type="submit"
          value="Sign In"
          class="register__input login__submit animate__animated animate__fadeInUp"
          required
        />
      </form>
      <p class="login__alert">
        Don't have an account?
        <router-link to="/register">Sign Up</router-link>
      </p>
      <notifications group="foo" position="bottom center" />
    </div>
  </div>
</template>

<script>
import appHeader from "../components/Header";
import appFooter from "../components/Footer";
import fb from "../firebase";
import { action } from "vuex";
import store from "../store";
import router from "../router";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },

  components: {
    appHeader,
    appFooter
  },
  created() {},
  methods: {
    submit() {
      fb.auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          fb.auth().onAuthStateChanged(user => {
            store.dispatch("fetchUser", user);
            router.push("/dashboard");
          });
        })
        .catch(err => {
          this.error = err.message;
          this.$notify({
            group: "foo",
            type: "error",
            text: this.error
          });
        });
    }
  }
};
</script>
<style lang="scss"></style>
