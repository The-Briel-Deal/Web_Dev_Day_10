const mongoose = require('mongoose');

const uri ="mongodb://192.168.0.11:27017";

mongoose.connect(`${uri}/peopleDB`);

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    review: String
})

const Person = mongoose.model("Person", personSchema);

const randy = new Person({
    name: "Randy",
    rating: 23,
    review: "Has a nice beard."
});

const charles = new Person({
    name: "Charles",
    rating: 53,
    review: "Really likes dogs..."
});

const kyle = new Person({
    name: "Kyle",
    rating: 14,
    review: "-_-"
});

// Person.insertMany([kyle, charles, randy], (err)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log("Succesfully saved all the people to the DB!")
//     }
// });

Person.find((err, people)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(people[1]["name"]);
    }
});