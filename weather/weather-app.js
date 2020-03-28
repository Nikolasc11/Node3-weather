const request = require('request')

const url = 'https://api.darksky.net/forecast/6886b166f6a18946316a7198a053f372/37.8267,-122.4233'

request({url: url }, (error, response) => {
    console.log(response)
})
