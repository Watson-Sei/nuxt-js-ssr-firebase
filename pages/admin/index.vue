<template>
  <div>
    <h1>Admin</h1>
  </div>
</template>

<script>
export default {
  name: "index",
  middleware: ['auth','check-admin'],
}
</script>

<style scoped>

</style>
