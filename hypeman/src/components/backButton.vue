<template>
  <button @click="goBack()" class="backButton">Go back</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      //om man är på en specifik sida

      console.log("go back");
      window.history.back();
    },
  },
};
</script>
<style>
.backButton {
  transition: 0.5s;
  margin-top: 4rem;
  width: 6rem;
  height: 2rem;
  border-radius: 15px;
  border-style: none;
  background-color: #5cc4ff;
  color: white;
  font-size: 1rem;
}

.backButton:hover {
  background-color: #4ca2d4;
  cursor: pointer;
  width: 7rem;
}
</style>


