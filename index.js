// Basic weather app based off of article by Brandon Morelli

const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'ca2c8e9e8cde76ff7f239c77d8a47531';
let city = argv.c ? argv.c : "horicon";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

request(url, function(err, response, body) {
    if (err) {
        console.log('error:', err);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
})