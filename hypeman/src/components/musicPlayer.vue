<template>
 <button @click="audioPlay()"> Play music </button>
</template>

<script>
import song from "../assets/music/national.mp3";
import hardcore from "../assets/music/hardcore.mp3";
import inspirational from "../assets/music/inspirational.mp3";

const songChoice = localStorage.getItem("music");

export default {

  methods: {

    audioPlay() {
        if(songChoice === "hardcore") {
            const audio = new Audio(hardcore);
            audio.play();
        } else if(songChoice === "inspirational") {
            const audio = new Audio(inspirational);
            audio.play();
        } else if(songChoice === "national") {
            const audio = new Audio(song);
            audio.play();
        }
    },
  },
};
</script>
