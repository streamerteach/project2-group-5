<template>
    <div class="centerComponent">
        <h1>{{ programName }}</h1>
        <video ref="videoPlayer" :src="currentVideoSource" autoplay loop></video>
        <p class="video-description">{{ currentDescription }}</p>
        <button class="button" @click="nextExercise">Next</button>
    </div>
</template>
  
  
<script>
import { getExerciseDescription } from "@/utils.js";

export default {
    data() {
        return {
            programName: "",
            currentVideoIndex: 1,
            currentProgram: localStorage.getItem("program"),
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
        setInterval(this.nextExercise, 60000);
    },
};
</script>
  
<style>
/* stylize button blue and rounded corners */
.button {
    background-color: #5CC4FF;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    border-radius: 12px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>