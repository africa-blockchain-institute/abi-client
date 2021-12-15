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

Vue.filter("capitalize", function(value){
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
});

Vue.filter("moneyFormat", function(value){
    if (!value) return ''
    value = new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(value);
    return value;
});

Vue.filter("truncate", function(value){
    if (!value) return ''
    value = value.replace(/(<([^>]+)>)/ig, '');
    return value.length > 120 ? value.substring(0, 120) + '...' : value;
})



