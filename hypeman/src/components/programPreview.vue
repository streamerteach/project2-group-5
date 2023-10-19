<template>
    <div>
        <div class="tab">
            <div id="app">
                <div>
                    <backbutton></backbutton>
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
                </div>
                <div id="footer">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { getExerciseDescription } from "@/utils.js";
import backbutton from './backbutton.vue';
import hiit from '../../src/assets/HIIT.svg';
import weights from '../../src/assets/weights.svg';
import calisthenics from '../../src/assets/calisthenics.svg';
import stretching from '../../src/assets/stretching.svg';

export default {
    components: {
        backbutton,
    },
    data() {
        const program = localStorage.getItem("program");
        let programIcon;

        switch (program) {
            case "HIIT":
                programIcon = hiit;
                break;
            case "Weights":
                programIcon = weights;
                break;
            case "Calisthenics":
                programIcon = calisthenics;
                break;
            case "Stretching":
                programIcon = stretching;
                break;
            default:
                programIcon = null; // Handle the default case if needed
        }
        return {

            program,
            programIcon,

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
            window.location.href = "/program";
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
