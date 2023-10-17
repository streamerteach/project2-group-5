<template>
    <div class="centerComponent">
        <!-- div row -->

        <!-- display icon based on what program -->

        <h2>{{ program }}</h2>

        <div class="row">
            <img :src="programIcon" alt="program icon" />
            <div class="description">
                <ul v-if="currentDescription">
                    <li v-for="line in currentDescription" :key="line">{{ line }}</li>
                </ul>
            </div>
        </div>
        <button class="submitButton" @click="startProgram">Start</button>
    </div>
</template>
  
<script>
import { getExerciseDescription } from "@/utils.js";
export default {
    data() {
        return {
            program: localStorage.getItem("program"),
            programIcon: "../src/assets/"+ localStorage.getItem("program") +".svg",

        };
    },
    created() {
        this.difficultyRating = parseInt(localStorage.getItem(this.program + "DifficultyRating"));
    },
    computed: {
        currentDescription() {
            return getExerciseDescription(this.program, this.difficultyRating);

        }
    },
    methods: {
        startProgram() {
            window.location.href = "program.html";
        },
    },
};
</script>

<style>
.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
h2 {
    font-size: 50px;
}

li {
    font-size: 30px;
}
</style>
