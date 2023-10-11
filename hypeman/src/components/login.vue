<template>
  <div class="login-container">
    <input v-model="text" @input="handleInput" class="login-input">
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
  width: 400px;
  height: 70px;
  font-size: 40px;
  border-radius: 10px;
  border-width: 5px;
  border-color: black;
  transition: 0.5s;
}

.login-input:hover {
  border-radius: 25px;
  background-color: rgb(214, 214, 214);
  
}
</style>
