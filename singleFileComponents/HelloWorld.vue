<template>
  <div>
    <p class="greeting">{{greeting}}</p>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style scoped>
  .greeting {
    color: red;
    font-weight: bold;
  }
</style>