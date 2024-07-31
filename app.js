const app = Vue.createApp({
    // data, functions, events
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'Hobbit',
            author: 'Tolkien',
            age: 50
        }
    },
    methods:{
        changeTitle(title){
            console.log('changing title')
            this.title = title
        }
    }
})

app.mount('#app')
