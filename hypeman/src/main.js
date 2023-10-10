<<<<<<< HEAD
import login from './components/login.vue'
import loginButton from './components/loginButton.vue'
import programChoices from './co                                                                                                      mponents/programChoices.vue'
import programContent from './components/programContent.vue'
import rating from './components/rating.vue'
import timer from './components/timer.vue'
import userTitle from './components/title.vue'
=======

>>>>>>> 3c7996eb8cd930abbda8f6c81aa0bec6fc2c446f

let app = Vue.createApp({

    
    data() {
        return {
            visible: true
        }
    }

})
import login from './components/login.vue'
import loginButton from './components/loginButton.vue'
import programChoices from './components/programChoices.vue'
import programContent from './components/programContent.vue'
import rating from './components/rating.vue'
import timer from './components/timer.vue'
import userTitle from './components/title.vue'

app.component('timer', timer)
app.component('userTitle', userTitle)
app.component('rating', rating)
app.component('programContent', programContent)
app.component('programChoices', programChoices)
app.component('loginButton', loginButton)
app.component('login', login)
app.mount('#app')
