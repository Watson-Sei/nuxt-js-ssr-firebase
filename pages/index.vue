<template>
  <div>
    <button @click="returnLogin">Sign In</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    returnLogin() {
      this.$router.push("/login")
    }
  }
}
</script>

<style>

</style>
