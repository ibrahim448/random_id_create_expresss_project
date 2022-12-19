const { v4: uuidv4 } = require('uuid');
const users = [
    {   
        id: uuidv4(),
        name: "Ibrahim",
        age: 26
    },
    {
        id: uuidv4(),
        name: "ahsan",
        age: 25
    },
    {
        id: uuidv4(),
        name: "amin",
        age: 20
    }
]

module.exports = users;