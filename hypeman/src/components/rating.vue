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
      <p>Your difficulty rating: {{ difficultyRating }}</p> <!-- Display difficulty rating -->
      <button @click="submitRating">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentRating: 0,
        difficultyRating: 0, // Initialize difficultyRating in data
      };
    },
    mounted() {
      // Get the difficulty rating from local storage and set it in data
      this.difficultyRating = parseInt(localStorage.getItem('difficultyRating')) || 0;
    },
    methods: {
      setRating(rating) {
        this.currentRating = rating;
      },
      submitRating() {
        // Update difficultyRating based on currentRating
        if (this.currentRating === 5 && this.difficultyRating < 5) {
          this.difficultyRating++;
          localStorage.setItem('difficultyRating', this.difficultyRating);
        }
  
        if (this.currentRating < 3 && this.difficultyRating > 1) {
          this.difficultyRating--;
          localStorage.setItem('difficultyRating', this.difficultyRating);
        }
      },
    },
  };
  </script>
  
  <style>
  .rating {
    font-size: 30px;
    cursor: pointer;
  }
  
  .rated {
    color: orange;
  }
  </style>
  