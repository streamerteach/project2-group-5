<template>
    <a :href="link" id="link" @click.prevent="saveProgram">
        <div id="program">
            <img :src="image">
            <h1> {{ program }} </h1>
        </div>
    </a>
</template>

<script>

export default {
    props: {
        link: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        program: {
            type: String,
            required: true
        }
    },
    methods: {
        saveProgram() {
            localStorage.setItem('program', this.program);
            window.location.href = this.link;
        }
    }
}
</script>

<style>
#link {
    text-decoration: none;
}

#program {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 40vh;
    border: 1px solid rgb(134, 134, 134);
    border-radius: 10px;
    background-color: rgb(250, 250, 250);
    transition: 0.3s; 
}

#program:hover{
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

@keyframes shake {
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, -10px); }
    100% { transform: translate(0, 0); }
}

#program h1 {
    font-size: 1.5vw;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(0, 0, 0);
    margin-top: 10vh;

}

#program img {
    width: 10vw;
    height: 20vh;
    margin-top: 2vh;
    outline: none;
    background-color: transparent;
}

#program h1 {
    font-size: 1.5vw;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(0, 0, 0);
    margin-top: 10vh;

}

#program img {
    width: 10vw;
    height: 20vh;
    margin-top: 2vh;
}

</style>
