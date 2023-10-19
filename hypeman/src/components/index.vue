<template>
  <div class="loginContainer">

    <img src="../../src/assets/hypeman.png" alt="hypeman" class="hypemanImage">
    <div class="centerComponent">
      <h1 class="titleText">Enter your username!</h1>
      <login></login>

      <loginButton></loginButton>


    </div>
  </div>
</template>
<script>
//imports
import login from './login.vue';
import loginButton from './loginButton.vue';



export default {
  components: { //components
    login,
    loginButton,

  },

}
</script>