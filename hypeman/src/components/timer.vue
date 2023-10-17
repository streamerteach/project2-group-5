<template>
    
    <div class="timer-container">

    </div>
    <div class="time-container">
      <p v-if="timerRunning">Timer: {{ Math.floor(currentTime / 60) }}m {{ currentTime % 60 }}s</p>
      <p v-else>Timer Stopped</p>
    </div>
  
</template>
<script>

import motivation1 from '../assets/motivation/motivation1.mp3';
import motivation2 from '../assets/motivation/motivation2.mp3';
import motivation3 from '../assets/motivation/motivation3.mp3';
import motivation4 from '../assets/motivation/motivation4.mp3';
import motivation5 from '../assets/motivation/motivation5.mp3';
import motivation6 from '../assets/motivation/motivation6.mp3';
import motivation7 from '../assets/motivation/motivation7.mp3';
import motivation8 from '../assets/motivation/motivation8.mp3';
import motivation9 from '../assets/motivation/motivation9.mp3';
import motivation10 from '../assets/motivation/motivation10.mp3';

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

      this.startTime = hours * 60;
      this.currentTime = this.startTime;
      this.timerRunning = true;

      

      this.timer = setInterval(() => {
        if (this.currentTime <= 0) {
          clearInterval(this.timer);
          this.timerRunning = false;
        } else {
          this.currentTime--;
          if (this.currentTime % 20 === 0) {
            
            this.playRandomMotivationSound();
          }
        }
      }, 1000);
    },
  
    playRandomMotivationSound() {
      // Array of motivation sounds
      const motivationSounds = [
        motivation1, motivation2, motivation3, motivation4, motivation5,
        motivation6, motivation7, motivation8, motivation9, motivation10,
      ];

      // Play a random motivation sound
      const randomSoundIndex = Math.floor(Math.random() * motivationSounds.length);
      const audio = new Audio(motivationSounds[randomSoundIndex]);
      audio.play();
    },
  },
  created() {
    // Start the timer with a 1-hour duration on page load
    this.startTimer(1);
  },
};
</script>