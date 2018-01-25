var socket = io();
var name = new Vue({
  el: "#app",

  data:{
      name: "",
      showNameArea: true

  },
  methods: {
      setName: function(event){
          this.showNameArea = false;
          socket.emit('add user', this.name);
      }
  }
});