<template>
    <div class="centerComponent">
        <h2>{{ program }}</h2>
        <div class="description">
            <ul v-if="currentDescription">
                <li v-for="line in currentDescription" :key="line">{{ line }}</li>
            </ul>
        </div>
        <button class="submitButton" @click="startProgram">Start</button>
    </div>
</template>
  
<script>
import { getExerciseDescription } from "@/utils.js";
export default {
    data() {
        return {
            program: localStorage.getItem("program")
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
h2 {
    font-size: 50px;
}

li {
    font-size: 30px;
}
</style>
