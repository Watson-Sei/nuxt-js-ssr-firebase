<template>
  <div>
    <h1>User Profile</h1>
    <p v-if="email != null">Your e-mail is {{ email.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'default',
  name: "profile",
  middleware: 'auth',
  data() {
    return {
      email: this.$store.state.authUser
    }
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
      await this.$router.replace("/login")
    }
  }
}
</script>

<style scoped>

</style>
