import login from './components/login.vue'
import loginbutton from './components/loginButton.vue'
import programchoices from './components/programChoices.vue'
import programcontent from './components/programContent.vue'
import rating from './components/rating.vue'
import timer from './components/timer.vue'
import usertitle from './components/userTitle.vue'
import programPreview from './components/programPreview.vue'
import MusicDropdown from './components/musicDropdown.vue';
import musicPlayer from './components/musicPlayer.vue';
import backButton from './components/backButton.vue';



const app = Vue.createApp({

    
    data() {
        return {
            visible: true
        }
    }

})

app.component('login', login)
app.component('timer', timer)
app.component('usertitle', usertitle)
app.component('rating', rating)
app.component('programcontent', programcontent)
app.component('programchoices', programchoices)
app.component('loginbutton', loginbutton)
app.component('programpreview', programPreview)
app.component('musicdropdown', MusicDropdown)
app.component('musicplayer', musicPlayer)
app.component('backbutton', backButton)
app.mount('#app')

