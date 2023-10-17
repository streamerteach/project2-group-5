<template>
    <div class="centerComponent">
        <h2>Overall rating:</h2>
        <div class="rating">
            <span v-for="star in 5" :key="star" @click="setRating(star)"
                :class="{ 'rated': star <= currentRating, 'unrated': star > currentRating }">
                ★
            </span>
        </div>
        <p>Your difficulty rating for the {{ program }} program was: </p>
        <p class="difficultyLevel">{{ getProgramDifficultyRating(program) }}/5</p>
        <button class="submitButton" @click="submitRating">Submit</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentRating: 0,
            program: '',
            WeightsDifficultyRating: 0,
            HIITDifficultyRating: 0,
            CalisthenicsDifficultyRating: 0,
            StretchingDifficultyRating: 0,
        };
    },
    mounted() {
        this.program = localStorage.getItem('program') || '';

        this.WeightsDifficultyRating = parseInt(localStorage.getItem('WeightsDifficultyRating')) || 1;
        this.HIITDifficultyRating = parseInt(localStorage.getItem('HIITDifficultyRating')) || 1;
        this.CalisthenicsDifficultyRating = parseInt(localStorage.getItem('CalisthenicsDifficultyRating')) || 1;
        this.StretchingDifficultyRating = parseInt(localStorage.getItem('StretchingDifficultyRating')) || 1;
    },
    methods: {
        setRating(rating) {
            this.currentRating = rating;
        },
        getProgramDifficultyRating(program) {
            switch (program) {
                case 'Weights':
                    return this.WeightsDifficultyRating;
                case 'HIIT':
                    return this.HIITDifficultyRating;
                case 'Calisthenics':
                    return this.CalisthenicsDifficultyRating;
                case 'Stretching':
                    return this.StretchingDifficultyRating;
                default:
                    return 0;
            }
        },
        submitRating() {
            if (this.currentRating === 0) {
                return;
            }
            else if (this.currentRating === 5 && this.getProgramDifficultyRating(this.program) < 5) {
                this[this.program + 'DifficultyRating']++;
                localStorage.setItem(`${this.program}DifficultyRating`, this.getProgramDifficultyRating(this.program));
            }

            else if (this.currentRating < 3 && this.getProgramDifficultyRating(this.program) > 1) {
                this[this.program + 'DifficultyRating']--;
                localStorage.setItem(`${this.program}DifficultyRating`, this.getProgramDifficultyRating(this.program));
            }
            window.location.href = 'programChoices.html';
        },
    },
};
</script>
  
<style>
p {
    font-size: 30px;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.difficultyLevel{
    font-size: 50px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
}
.rating {
    font-size: 100px;
    cursor: pointer;
}

.rated {
    color: orange;
}
</style>
  