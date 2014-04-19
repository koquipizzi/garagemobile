var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() { 
		$.ajax({
			url        : "http://www.ar.elgarage.com/index.php?option=com_content&view=article&format=raw&id=34&jsoncallback=?",
			data       : {username : 'subin', password : 'passwordx'},
			success    : function(response) {
				$.each(response.noticias, function (i, noti) {              	 
				$("#allRepos").append("<li class='noti'><h2>" + noti.title + "</h2>"
+ "<p class='li"+i+"'></p><div data-role='collapsible' data-content-theme='b' data-collapsed='false'><div class='inset"+ i +"'></div></div><h3 class='insetClick"+ i +"'>-- Ver más --</h3></li>");
var aux = ".li"+i;
				var auxInset = ".inset"+i;
				var insetClick = ".insetClick"+i;				
				$(aux).html(noti.introtext);  
				$(auxInset).html(noti.fulltext);  
				$(auxInset).hide();
				$(insetClick).click(function(){
					$rrr = $(insetClick).find("span");						
					var link = $(insetClick).html();
					if(link === "-- Ver más --")
						{$(insetClick).html("-- Ver menos --");						
						}
					else {$(insetClick).html("-- Ver más --");						
						}
					$(auxInset).toggle();
				  });
			});

			},
			 error: function () {
				$("#allRepos").append("Error al conectarse al servidor");
	 		}      
		});  
    },
    // Update DOM on a Received Event
    /*receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
      /*  var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onContactSaveSuccess: function(contact) {
        window.alert("Save Success");
    },
    onContactSaveError: function(contact) {
        window.alert("Save Failed");
    },*/
};