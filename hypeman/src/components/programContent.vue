<template>
    <div>
      <h1>{{ programName }}</h1>
      <video ref="videoPlayer" :src="currentVideoSource" autoplay loop></video>
      <button @click="nextExercise">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        programName: "",
        currentVideoIndex: 1,
        currentProgram: localStorage.getItem("program") || "Stretching",
        videoSources: {
          HIIT: [
            "../src/assets/programVideos/HIIT1.mp4",
            "../src/assets/programVideos/HIIT2.mp4",
            "../src/assets/programVideos/HIIT3.mp4",
          ],
          Weights: [
            "../src/assets/programVideos/Weights1.mp4",
            "../src/assets/programVideos/Weights2.mp4",
            "../src/assets/programVideos/Weights3.mp4",
          ],
          Calisthenics: [
            "../src/assets/programVideos/Calisthenics1.mp4",
            "../src/assets/programVideos/Calisthenics2.mp4",
            "../src/assets/programVideos/Calisthenics3.mp4",
          ],
          Stretching: [
            "../src/assets/programVideos/Stretching1.mp4",
            "../src/assets/programVideos/Stretching2.mp4",
            "../src/assets/programVideos/Stretching3.mp4",
          ],
        },
      };
    },
    computed: {
      currentVideoSource() {
        if (this.currentVideoIndex <= this.videoSources[this.currentProgram].length) {
          return this.videoSources[this.currentProgram][this.currentVideoIndex - 1];
        }
        return null;
      },
    },
    methods: {
      nextExercise() {
        if (this.currentVideoIndex < this.videoSources[this.currentProgram].length) {
          this.currentVideoIndex++;
        } else {
          this.quitProgram();
        }
      },
      quitProgram() {
        window.location.href = "rating.html";
      },
    },
    mounted() {
      this.programName = this.currentProgram;
    },
  };
  </script>
  