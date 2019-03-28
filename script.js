// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.



// 2. Create an array which contains the object you have made above and name the array "database".
/*var database= [
    {
        username: "jojo",
        password: "superme",
    },
    {
        username: "kene",
        password: "123",
    },
    {
        username: "glory",
        password: "777",
    },
]*/

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
/*var newsfeed=[
     {
     username:"josh",
     timeline: "poo",
     },
    {
     username: "kene",
     timeline: "meeew",
     },
     {
     username: "glory",
     timeline: "hush",
     },
]

function isUserValid(username,password) {
    for (var i = 0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function singIn(username,password) {
    if(isUserValid(username,password)) {
        console.log(newsfeed);
    }else {
        alert('sorry wrong username');
    }
}
var userNamePromt = prompt('what\'s your username');
var passwordPromt = prompt('what\'s your password');

singIn(userNamePromt,passwordPromt);*/

var input=document.querySelector('input');
var button=document.querySelector('button');
var ul=document.querySelector('ul');

function inputlength() {
    return input.value.length;
}
function createLIstElement() {
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListAfterClick() {
     if (inputlength() > 0) {
       createLIstElement();
    }
}

function addListAfterKeypress(event) {
    if (inputlength() > 0 && event.keyCode===13) {
        createLIstElement();
    }
}

button.addEventListener("click", addListAfterClick)


input.addEventListener("keypress", addListAfterKeypress)
