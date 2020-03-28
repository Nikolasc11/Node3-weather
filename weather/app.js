// const request = require('request')
// const geocode = require('/Users/Nikolas/hello/geocode.js')
// const forecast = require('/Users/Nikolas/hello/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
