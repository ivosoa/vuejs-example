import Vue from 'vue';

let app1 = new Vue({ 
    el: '#app-1',
    data: {
        message: 'Hello Vue!'
    }
});

let app2 = new Vue({ 
    el: '#app-2',
    template: `<div>{{ message }}</div>`,
    data: {
        message: 'Hello Vue Template!'
    }
});