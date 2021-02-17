<template>
  <div>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: "index",
  middleware: 'auth',
  methods: {
    logout() {
      this.$fire.auth.signOut()
      .then(() => {
        console.log('ログアウトしました')
        this.$router.push("/login")
      }).catch((error) => {
        console.log('ログアウトに失敗しました')
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
