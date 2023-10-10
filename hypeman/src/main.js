
let app = Vue.createApp({

    
    data() {
        return {
            visible: true
        }
    }

})

import timer from './components/timer.vue'
app.component('timer', timer)
app.mount('#app')
