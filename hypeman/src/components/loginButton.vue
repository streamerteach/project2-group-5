 TODO: När enter är nertryckt så ska man komma till next page 
 
<template>
<div>
  <button @click="usernameTyped" ref="login" class="loginButton">SIGN IN</button>
  </div>
</template>

<script>
import audioFile from "../assets/other/noName.wav";
let playTimes = 0;


export default {
  methods: {
    
    //Kollar om användaren matat in användarnamn via localstorage
    usernameTyped: function () {
      let username = localStorage.getItem("username");

      if (username === null || username === "") {
        const audio = new Audio(audioFile);
        if(playTimes === 0) {
        audio.play();
        playTimes++;
        }
      } else window.location.href = "./programchoices";

     
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