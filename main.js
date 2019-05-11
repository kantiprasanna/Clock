var date, hours, minutes, seconds, animate;

function init() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    clock();
}

function clock() {
    //Conversion from seconds -> minutes -> hours
    seconds++
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
            if (hours == 24) {
                hours = 0;
            }
        }
    }

    //Updating values on the page
    $('sec', seconds);
    $('min', minutes);
    $('hr', hours);

    //This sets the function call interval. The interval is specified in 'ms' [1000: 1sec == 1sec][100: 1sec == 10sec  ]
    animate = setTimeout(clock, 1000);
}

function $(id, val) {
    if (val < 10) {
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

window.onload = init;