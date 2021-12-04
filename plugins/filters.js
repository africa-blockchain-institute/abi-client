import Vue from 'vue';
const moment = require('moment');

Vue.filter("formatDate", function(value){
    if(!value) return "";
    return new Date(value).toDateString();
})

Vue.filter("formatDateUTC", function(value){
    if(!value) return "";
    return new Date(value).toUTCString();
})

Vue.filter("formatDateTime", function(value){
    if(!value) return "";
    return new Date(value).toString();
})

Vue.filter("momentTz", function(value){
    if(!value) return "";
    const utcTime = new Date(value).toUTCString();
    return utcTime + moment.tz(value, moment.tz.guess()).format('Z z');
})

Vue.filter("capitalize", function(value){
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
});

Vue.filter("truncate", function(value){
    if (!value) return ''
    value = value.replace(/(<([^>]+)>)/ig, '');
    return value.length > 120 ? value.substring(0, 120) + '...' : value;
})

Vue.filter("convertTo12", function(time24){
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
})


