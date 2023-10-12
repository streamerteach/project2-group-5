<template>
  <h1>{{ text }} {{username}} </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Nothing here...'
    },
    username: String
  },

  data() {
    return {
      username: localStorage.getItem('username')
    }
  }

  
}
</script>