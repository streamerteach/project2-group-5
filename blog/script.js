Vue.component('email-komponent', {
    template: '<input type="email" v-model="email">', // sparade 5 tecken?
    data: function () {
        return {
            email: 'bistromd@arcada.fi' //vm.email two way data bound!
        }
    }
});

var vm = new Vue({
    el: '#app', // root element selector
    data: {
        submitted: false
    },
    methods: {
        process: function () {
            this.submitted = true; // modifiera instansdata med metoder
        }
    }
});