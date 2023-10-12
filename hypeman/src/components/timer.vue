<template>
    
    <div class="timer-container">
      <button @click="startTimer(1)">Start 1-Hour Timer</button>
      <button @click="startTimer(2)">Start 2-Hour Timer</button>
    </div>
    <div class="time-container">
      <p v-if="timerRunning">Timer: {{ Math.floor(currentTime / 60) }}m {{ currentTime % 60 }}s</p>
      <p v-else>Timer Stopped</p>
    </div>
  
</template>
<script>
export default {
  data() {
    return {
      timerRunning: false,
      timer: null,
      startTime: 0,
      currentTime: 0,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.currentTime / 60);
      const seconds = this.currentTime % 60;
      return `${minutes}m ${seconds}s`;
    },
  },
  methods: {
    startTimer(hours) {
      if (this.timerRunning) {
        clearInterval(this.timer);
      }

      this.startTime = hours * 60 * 60;
      this.currentTime = this.startTime;
      this.timerRunning = true;

      this.timer = setInterval(() => {
        if (this.currentTime <= 0) {
          clearInterval(this.timer);
          this.timerRunning = false;
        } else {
          this.currentTime--;
        }
      }, 1000);
    },
  },
};
</script>