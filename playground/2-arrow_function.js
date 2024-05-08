// const square = function (x){
//     return x*x
// }

// const square = (x)=>{
//     return x*x
// }

// const square = (x)=> x*x

// console.log(square(3))


// Standared function has their own binding (this.)
// We want to excess the binding of the parent function 
//  We use arrow funtion
// arrow function don't bind their own -this- value.
// Arrow function access -this- value in the contect in which they are created
// like in this this case, it;s parent function 
// This make arrow function poor candiate for methods and great candidate for everything else. 
const event = {
    name:"Holi",
    guestlist: ['Sam','hari','mike'],
    printGuestList: function(){
        console.log('Guest list for ' + this.name)
        this.guestlist.forEach((guest)=>{
                console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()

