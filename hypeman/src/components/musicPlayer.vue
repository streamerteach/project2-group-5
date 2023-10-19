<script>
import song from "../assets/music/national.mp3";
import hardcore from "../assets/music/hardcore.mp3";
import inspirational from "../assets/music/inspirational.mp3";

const songChoice = localStorage.getItem("music");

export default {
mounted() {
    setTimeout(this.audioPlay, 1000); // Spelar upp musiken 1 sekund efter att komponenten har monterats (undviker att webbläsaren blockerar ljudet)

  },
  methods: {

//Spelar låt beroende på vald musik i dropdown
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
        } else {
            const audio = new Audio(hardcore);
            audio.play();
        }
    },
  },
};
</script>
