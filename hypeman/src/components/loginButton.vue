 TODO: När enter är nertryckt så ska man komma till next page 
 
<template>
  <button @click="usernameTyped" @keyup.enter="test" class="loginButton">SIGN IN</button>
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

<style>
.loginButton {
    transition: 0.5s;
    margin-top: 4rem;
    width: 12rem;
    height: 4rem;
    border-radius: 15px;
    border-style: none;
    background-color: #5CC4FF;
    color: white;
    font-size: 40px;
   
}

.loginButton:hover {
    background-color: #4ca2d4;
    cursor: pointer;
    width: 14rem;

}
</style>