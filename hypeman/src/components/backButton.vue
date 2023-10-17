<template>
    <button @click="goBack()"> Go back </button>
</template>

<script>
export default {
    methods: {
        goBack() {
            console.log("go back")
            window.history.back();
        }
    }
}
</script>
