var socket = io();
var name = new Vue({
  el: "#app",

  data:{
      name: "",
      showNameArea: true,
      message:"",
      showChatArea: false,
      HTMLcontent: ""
  },
  created: function () {
            socket.on('new message', function (message) {
                this.HTMLcontent = this.HTMLcontent +" <br>" + message;
            }.bind(this));
  },
  methods: {
      setName: function(event){
          if(this.name == "") return;
          this.showNameArea = false;
          socket.emit('add user', this.name);
          this.showChatArea = true;
      },
      sendMessage: function(event) {
        socket.emit('message', this.message);
      }
  }
});