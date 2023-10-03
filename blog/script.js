let app = Vue.createApp({

    data() {
        return {
            visible: true
        }
    }
})


app.component("blog", {
template: '<article> <h1> {{title}} </h1> <br> <p>{{content}}</p> <article>',
    
    data() {
        return {
            title: "Välkommen till min blogg",
            content: "good content",
        }
    },
})



app.mount("#app") //montera appen i DOM