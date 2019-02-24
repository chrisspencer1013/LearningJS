function submit(){
    var dateCountdown = new Date(document.getElementsByName("date")[0].value + " " + document.getElementsByName("usr_time")[0].value);
    var eventName = document.getElementsByName("text")[0].value;
    var date_now = new Date();
    if (date_now > dateCountdown){
        console.log('This date is in the past!');
        return
    }

    var x = setInterval(function() {
        var now = new Date().getTime();
        var difference = Math.floor((dateCountdown - now)/1000);
        console.log(difference)
        document.getElementsByTagName('body')[0].innerHTML = "<h1>There are " + difference + ' seconds until ' + eventName + '!</h1>';
    }, 1000);
}


