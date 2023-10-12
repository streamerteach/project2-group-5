// BEGIN: ed8c6549bwf9
<template>
  <button @click="usernameTyped" class="loginButton">SIGN IN</button>
</template>

<script>
export default {
  methods: {
    
    //Kollar om användaren matat in användarnamn via localstorage
    usernameTyped: function () {
      let username = localStorage.getItem("username");

      if (username === null || username === "") {
        alert("You need to enter a username first!");
      } else window.location.href = "../../public/programChoices.html";

     
    },
     test: function () {
        console.log("Enter är nedtryckt");
      }
  },
};
</script>
