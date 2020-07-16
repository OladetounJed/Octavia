<template>
  <div class="register">
    <app-header></app-header>
    <div class="register__con">
      <div class="register__header">
        <h3 class="register__heading">Join The New Bank!</h3>
      </div>
      <form action="" class="register__form" @submit.prevent="submit">
        <input
          type="text"
          class=" register__input register__name animate__animated animate__headShake"
          placeholder="Your Name"
          v-model="form.name"
          required
          name="name"
          autocomplete="name"
        />

        <input
          type="email"
          class="register__input register__email animate__animated animate__headShake"
          placeholder="Email Address"
          v-model="form.email"
          required
          autocomplete="email"
        />

        <input
          type="password"
          class="register__input register__password animate__animated animate__headShake"
          placeholder="Password"
          v-model="form.password"
          required
        />
        <input
          type="submit"
          value="Register"
          class="register__submit animate__animated animate__fadeInDown"
        />
      </form>
      <p class="register__alert">
        Have an Account?
        <router-link to="/login">Log In</router-link>
      </p>
      <notifications group="foo" position="bottom center" />
    </div>
  </div>
</template>

<script>
import appHeader from "../components/Header";
import appFooter from "../components/Footer";
import fb from "firebase";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      message: "",
      messageClass: "",
      show: ""
    };
  },
  watch: {
    show: function() {
      if (this.show === true) {
      }
    }
  },
  components: {
    appHeader,
    appFooter
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    async submit() {
      const user = fb
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(data => {
              this.form.email = "";
              this.form.name = "";
              this.form.password = "";
              this.$notify({
                group: "foo",
                type: "success",
                text: "Account Created Sucessfully, Kindly Login"
              });
            });
          const signOut = fb.auth().signOut();
        })
        .catch(err => {
          this.message = err.message;
          this.$notify({
            group: "foo",
            type: "error",
            text: this.message
          });
        });
    }
  }
};
</script>

<style lang="scss"></style>
