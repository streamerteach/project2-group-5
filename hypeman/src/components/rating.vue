<template>
    <div>
      <h2>Overall rating:</h2>
      <div class="rating">
        <span
          v-for="star in 5"
          :key="star"
          @click="setRating(star)"
          :class="{ 'rated': star <= currentRating, 'unrated': star > currentRating }"
        >
          ★
        </span>
      </div>
      <p>Your rating: {{ currentRating }}</p>
      <p>Your difficulty rating for the "{{ program }}" program: {{ getProgramDifficultyRating(program) }}</p>
      <button @click="submitRating">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentRating: 0,
        program: '',
        WeightsdifficultyRating: 0,
        HIITdifficultyRating: 0,
        CalisthenicsdifficultyRating: 0,
        StretchingdifficultyRating: 0,
      };
    },
    mounted() {
      this.program = localStorage.getItem('program') || '';

      this.WeightsdifficultyRating = parseInt(localStorage.getItem('WeightsdifficultyRating')) || 0;
      this.HIITdifficultyRating = parseInt(localStorage.getItem('HIITdifficultyRating')) || 0;
      this.CalisthenicsdifficultyRating = parseInt(localStorage.getItem('CalisthenicsdifficultyRating')) || 0;
      this.StretchingdifficultyRating = parseInt(localStorage.getItem('StretchingdifficultyRating')) || 0;
    },
    methods: {
      setRating(rating) {
        this.currentRating = rating;
      },
      getProgramDifficultyRating(program) {
        switch (program) {
          case 'Weights':
            return this.WeightsdifficultyRating;
          case 'HIIT':
            return this.HIITdifficultyRating;
          case 'Calisthenics':
            return this.CalisthenicsdifficultyRating;
          case 'Stretching':
            return this.StretchingdifficultyRating;
          default:
            return 0;
        }
      },
      submitRating() {
        if (this.currentRating === 5 && this.getProgramDifficultyRating(this.program) < 5) {
          this[this.program + 'difficultyRating']++;
          localStorage.setItem(`${this.program}difficultyRating`, this.getProgramDifficultyRating(this.program));
        }
  
        if (this.currentRating < 3 && this.getProgramDifficultyRating(this.program) > 1) {
          this[this.program + 'difficultyRating']--;
          localStorage.setItem(`${this.program}difficultyRating`, this.getProgramDifficultyRating(this.program));
        }
        window.location.href = 'programChoices.html';
      },
    },
  };
  </script>
  
  <style>
  .rating {
    font-size: 90px;
    cursor: pointer;
  }
  
  .rated {
    color: orange;
  }
  </style>
  