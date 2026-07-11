const person = {
    firstName: "Siam",
    lastName: "Parvez",
    id: 356,
    fullName: function(){
        return this.firstName+ "" + this.lastName
    },
    getFullName: function(){
        return this.fullName()
    }
}
console.log(person.getFullName)

console.log(this)

const user = {
    name: "Siam",

    greet() {
        console.log(this);
    }
}

user.greet();





const person1 = {
    fullName: function(){
        return this.firstName+ " " + this.lastName
    }
}
const person2 = {
    firstName: "Json",
    lastName: "Doe"
}
console.log(person1.fullName.call(person2))
console.log(person1.fullName())