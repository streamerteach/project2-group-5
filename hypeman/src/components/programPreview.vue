<template>
    <div class="centerComponent">
      <h2>{{ program }}</h2>
      <div class="description">
        <ul v-if="currentDescription">
          <li v-for="line in currentDescription" :key="line">{{ line }}</li>
        </ul>
      </div>
        <button class="submitButton" @click="startProgram">Start</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        program: localStorage.getItem("program"),
        programDescriptions: {
          HIIT: [
            "Nånting nånting",
            "Nånting",
          ],
          Weights: [
            "Nånting nånting",
            "Nånting",
          ],
          Calisthenics: [
            "Nånting nånting",
            "Nånting",
          ],
          Stretching: [
            "Spin head around in circles to strech neck muscles.",
            "Stretch legs by crossing them and leaning forward.",
            "Lean forward and touch toes to stretch hamstrings.",
          ],
        },
      };
    },
    computed: {
      currentDescription() {
        return this.programDescriptions[this.program] || [];
      },
    },
    methods: {
    startProgram() {
        window.location.href = "program.html";
      },
    },
  };
  </script>

  <style>   
    h2 {
        font-size: 50px;
    }

    li {
        font-size: 30px;
    }

</style>