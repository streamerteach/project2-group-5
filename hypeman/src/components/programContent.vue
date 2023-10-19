<template>
    <h1>{{ programName }}</h1>
    <video ref="videoPlayer" :src="currentVideoSource" autoplay loop></video>
    <p class="video-description">{{ currentDescription }}</p>
    <button class="button" @click="nextExercise">Next</button>
</template>
  
  
<script>
import { getExerciseDescription } from "@/utils.js";
import HIIT1 from '../../src/assets/programVideos/HIIT1.mp4';
import HIIT2 from '../../src/assets/programVideos/HIIT2.mp4';
import HIIT3 from '../../src/assets/programVideos/HIIT3.mp4';
import Weights1 from '../../src/assets/programVideos/Weights1.mp4';
import Weights2 from '../../src/assets/programVideos/Weights2.mp4';
import Weights3 from '../../src/assets/programVideos/Weights3.mp4';
import Calisthenics1 from '../../src/assets/programVideos/Calisthenics1.mp4';
import Calisthenics2 from '../../src/assets/programVideos/Calisthenics2.mp4';
import Calisthenics3 from '../../src/assets/programVideos/Calisthenics3.mp4';
import Stretching1 from '../../src/assets/programVideos/Stretching1.mp4';
import Stretching2 from '../../src/assets/programVideos/Stretching2.mp4';
import Stretching3 from '../../src/assets/programVideos/Stretching3.mp4';

export default {
    data() {
        return {
            programName: "",
            currentVideoIndex: 1,
            currentProgram: localStorage.getItem("program"),
            videoSources: { // object för att få video sourcen att byta automatiskt
                HIIT: [
                    HIIT1,
                    HIIT2,
                    HIIT3,
                ],
                Weights: [
                    Weights1,
                    Weights2,
                    Weights3,
                ],
                Calisthenics: [
                    Calisthenics1,
                    Calisthenics2,
                    Calisthenics3,
                ],
                Stretching: [
                    Stretching1,
                    Stretching2,
                    Stretching3,
                ],
            },
        };
    },
    computed: { // tane kod
        currentDescription() {
            return getExerciseDescription(this.currentProgram, parseInt(localStorage.getItem(`${this.currentProgram}DifficultyRating`)))[this.currentVideoIndex - 1];
        },
        currentVideoSource() {
            if (this.currentVideoIndex <= this.videoSources[this.currentProgram].length) {
                localStorage.setItem("currentExercise", this.currentVideoIndex);
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
            if (this.currentVideoIndex === 4) {
                this.quitProgram();
            }
            localStorage.setItem('buttonPressed', 'true');

        },
        quitProgram() {
            window.location.href = "/rating";
            localStorage.setItem('buttonPressed', 'false');
        },
    },
    mounted() { 
        this.programName = this.currentProgram;
        setInterval(this.nextExercise, 60000);//byter program bilden varje 60 sekunder
    },
};
</script>
  
