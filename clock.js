$(document).ready(function () {
    function showTime() {
        let dt = new Date();
        let hour = dt.getHours();
        let min = dt.getMinutes();
        let sec = dt.getSeconds();
            $(".period p").text("AM");
        
        if (hour == 0) {
            hour = 12;
        }
        if (hour >= 12) {
            $(".period p").text("PM");
        }
        if (hour> 12) {
          hour = hour - 12;
        }
        hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        $(".hour p").text(hour);
        $(".minute p").text(min);
        $(".second p").text(sec);
        setTimeout(showTime, 1000);
    }
    
    showTime();
});