<template>
  <div class="dashboard">
    <header class="header">
      <div class="header__left">
        <router-link to="/"
          ><img src="../assets/images/logo.png" alt="Logo" class="header__logo"
        /></router-link>
      </div>
      <div class="header__right dashboard__header-right">
          <a @click="signOut"  class="dashboard__btn">Log Out</a>
      </div>
    </header>
    <h2 class="dashboard__note">Welcome, {{ user.data.displayName }}</h2>

    <div class="dashboard__currency">
      <p class="dashboard__currency-note">{{ user.data.displayName }}, How much do you want to convert?</p>
      <span class="dashboard__dollar">&#36;</span><input type="number" name="currency" class="dashboard__currency-input" v-model="searchKey" @keyup="convertRate">
      <h2 class="dashboard__currency-result">That's <span>&#8358{{result}}</span>  in Naira</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import fb from "../firebase";
import router from "../router";
export default {
  data() {
    return {
      jobs: [],
      searchKey: "",
      rate: "",
      result: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  mounted() {
      this.fetchRate()
  },

  methods: {
    async signOut() {
      try {
        const signOut = await fb.auth().signOut();
        this.user.loggedIn = null;
        router.replace("/");
      } catch (err) {
      }
    },
     fetchRate: function () {
      const baseURI = 'https://free.currconv.com/api/v7/convert?q=USD_NGN&compact=ultra&apiKey=93db552416821dd6c8ec'
         this.$http.get(baseURI)
      .then((result) => {
        result.data.USD_NGN = this.rate;
       let response = result.request.response;
        let matches = response.match(/(\d+)/);
        this.rate = matches[0]
      })
    },
    convertRate() {
        let converted = this.rate * this.searchKey;
        this.result= converted.toLocaleString()
    }
  }
};
</script>

<style></style>
