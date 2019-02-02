console.log("hello world!");

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app = new Vue({
    el: '#app',
    data: {
      message:'Hello world!',
      todos:[
        { id: 0, text: "First text", date:1/12/2016 },
        { id: 1, text: "Second text", date:1/12/2016},
        { id: 2, text: "Third text", date:1/12/2016}
      ],
      messageText2: "It`s my first application on Vue js."
    },
    methods: {
      toUpper: function(){
        this.messageText2 = this.messageText2.toUpperCase();
        console.log('done');
      }
    }
  }
)
