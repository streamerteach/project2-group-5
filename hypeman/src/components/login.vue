<template>
  <div class="login-container">
    <input v-model="text" @input="handleInput" class="login-input" required>
  </div>
</template>

<script>
export default {
  methods: {
    //Metoden uppdaterar localstorage live när nåt matas in
    handleInput(event) {
      this.text = event.target.value;
      localStorage.setItem('username', this.text)
    }
  }
}

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
