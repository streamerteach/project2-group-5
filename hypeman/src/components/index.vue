<template>
  <div id="app">
    <div class="loginContainer">
      
      <img src="../../src/assets/hypeman.png" alt="hypeman" class="hypemanImage">
      <div class="centerComponent">
        <h1 class="titleText">Please provide your username!</h1>
        <login></login>
        
        <loginButton ></loginButton>
  

      </div>
    </div>
  </div>
</template>
<script>
import login from './login.vue';
import loginButton from './loginButton.vue';



export default {
  components: {
    login,
    loginButton, 
    
  },
  
}
</script>