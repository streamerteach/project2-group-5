import login from '../src/components/login.vue'
import loginbutton from '../src/components/loginButton.vue'
import programchoices from '../src/components/programChoices.vue'
import programcontent from '../src/components/programContent.vue'
import rating from '../src/components/rating.vue'
import timer from '../src/components/timer.vue'
import usertitle from '../src/components/title.vue'



let app = Vue.createApp({

    
    data() {
        return {
            visible: true
        }
    }

})


app.component('timer', timer)
app.component('usertitle', usertitle)
app.component('rating', rating)
app.component('programcontent', programcontent)
app.component('programchoices', programchoices)
app.component('loginbutton', loginbutton)
app.component('login', login)
app.mount('#app')
