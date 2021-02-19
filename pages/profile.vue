<template>
  <div>
    <h1>User Profile</h1>
    <p v-if="User != null">Your e-mail is {{ User.email }} <span v-if="User.isAdmin">& claims: <button @click="returnAdmin">admin</button></span></p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>

export default {
  layout: 'default',
  name: "profile",
  middleware: 'auth',
  data() {
    return {
      User: this.$store.state.authUser
    }
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
      await this.$router.replace("/login")
    },
    async returnAdmin() {
      await this.$router.push("/admin")
    }
  }
}
</script>

<style scoped>

</style>
