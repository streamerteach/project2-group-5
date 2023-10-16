<template>
  <div class="login-container">
    <input
      v-model="text"
      @input="handleInput"
      @focus="audioPlay"
      class="login-input"
      required
    />
  </div>
</template>

<script>
import loginPageAudio from "../assets/other/login_page.mp3";
let playTimes = 0;

export default {
  methods: {
    //Metoden uppdaterar localstorage live när nåt matas in
    handleInput(event) {
      this.text = event.target.value;
      localStorage.setItem("username", this.text);
    },

    audioPlay() {
    
      const audio = new Audio(loginPageAudio);
      if(playTimes === 0) {
      audio.play();
      playTimes++;
      }
    },
  },
};
</script>

<style>
.login-input {
  width: 12em;
  height: 2.5em;
  font-size: 40px;
  border-radius: 10px;
  border-width: 5px;
  border-width: 0px;
  transition: 0.5s;
  padding-left: 20px;
  padding-right: 20px;
}

.login-input:hover {
  border-radius: 15px;
  background-color: rgb(249, 255, 214);
}

.login-input:focus {
  border-width: 0px;
  background-color: rgb(238, 238, 238);
  outline: 0px;
  border-radius: 25px;
  width: 15em;
}
</style>
