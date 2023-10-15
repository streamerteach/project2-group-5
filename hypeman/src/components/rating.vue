<template>
    <div>
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentRating: 0,
      };
    },
    methods: {
      setRating(rating) {
        this.currentRating = rating;
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
  
  .unrated {
    color: gray;
  }
  </style>
  