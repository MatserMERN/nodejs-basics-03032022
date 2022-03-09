let log = {
    info: function(info){
        console.log(`info: ${info}`)
    },
    warn: function(warn){
        console.log(`warn: ${warn}`)
    },
    error: function(error){
        console.log(`error: ${error}`)
    },
}

module.exports = log
console.log(module)
// module.exports = "Scott Destanick"
// console.log(module)
// module.exports = []
// console.log(module)
module.exports.umaGetsData = function(){
    console.log('This is umaGetsData method')
}
module.exports.test = function(){
    console.log('This is test method')
}

function getUserDetails(){
    return {
        name: 'Scott Desatnick',
        city: 'Boston'
    }
}

module.exports = getUserDetails

module.exports = {
    API_URL : 'https://jsonplaceholder.typicode.com/users',
    DB_SERVER: 'LAPTOP-GQVH23CD'
}

module.exports = "Welcome to local Modules"