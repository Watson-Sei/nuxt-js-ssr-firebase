<template>
  <div>
    <h1>Sign In</h1>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    methods: {
      async signInWithGoogle() {
        const provider = new this.$fireModule.default.auth.GoogleAuthProvider();
        const authData = await this.$fire.auth.signInWithPopup(provider)
        console.log('成功しました')
      }
    }
  }
</script>

<style scoped>

</style>
