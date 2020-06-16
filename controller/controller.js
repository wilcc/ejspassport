const axios = require ('axios')
require('dotenv').config()



const apiKey = process.env.APIKEY



module.exports = {
    random: (req ,res) => {
        axios.get('https://randomuser.me/api/?results=20').then(data =>{ 
            let result = data.data.results
            res.render('main/random' , {result})
        })
        .catch(err => console.log(err))
    },
    movies: (req ,res) => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        .then(data =>{ 
            let result = data.data.results
            res.render('main/movies' , {result})
        })
        .catch(err => console.log(err))
    }
}