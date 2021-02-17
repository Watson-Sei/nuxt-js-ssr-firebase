<template>
  <div>
    <button @click="login">Google Signin</button>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
      .then((result) => {
        console.log('ログインしました')
        this.$router.push("/")
      }).catch((error) => {
        console.log('ログインに失敗しました')
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
