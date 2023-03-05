let colors = require ('colors');

let users = [
    {role: "admin", fullname: "John Doe", username: "qwerty", password: "123qwe"}, 
    {role: "client", fullName: "Bob Bobski", username: "asdasd", password: "zxczxc"}
]

function logIn (listOfUsers,user, pass){

    for (person of listOfUsers){
        if (user === person.username && pass === person.password){
            console.log (`Logged in user is ${user}`.green);
        }
        else {
        console.log (`User not found`.red.bgYellow)
        }
    }

}
logIn (users,"qwerty","123qwe");
logIn (users,"gkdngk","fff111");
logIn (users,"asdasd","zxczxc");
logIn (users,"qwerty","zxczxc");