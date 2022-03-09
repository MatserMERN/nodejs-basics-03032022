console.log('Welcome to the world of NodeJS')

function display(){
    return "This is display method"
}

console.log(display())

let add = function(x,y){
    return x +y
}

console.log(add(10,80))

let multiply = (x,y) => x*y

console.log(multiply(10,5))