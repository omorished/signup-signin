//declare DOM references

//(textFiled elements)
var firstName = document.getElementById('first-name-txtfield');
var lastName = document.getElementById('last-name-txtfield');
var email = document.getElementById('email-txtfield');
var password = document.getElementById('password-txtfield');
//(select elements)
var day = document.getElementById('days-dropdown');
var month = document.getElementById('months-dropdown');
var year = document.getElementById('years-dropdown');

var errorMessage = document.getElementById('error-message');

//
var users = JSON.parse(localStorage.getItem('userList'));



function User(firstName, lastName, email, password, day, month, year){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.day = day;
    this.month = month;
    this.year = year;
    
    
}


function createUser(){
    
    errorMessage.innerText = "";
    
    if (areAllFieldsFilled()) {
        
        if (!isExist(email.value)) {
        var user = new User(firstName.value, lastName.value, email.value, password.value, day.value, month.value, year.value);
            
        users.push(user);
        let users_serialized = JSON.stringify(users);
        localStorage.setItem('userList', users_serialized);
            
    } else {
        errorMessage.innerText = "email is already exist!";
    }
    
    } else {
        errorMessage.innerText = "please fill all fields";
    }
    
    
}

function login() {
    
    errorMessage.innerText = "";
    
    for(let i in users) {
        if(users[i].email == email.value && users[i].password == password.value) {
            console.log('logged in successfully');
            return;
        } 
    }
        errorMessage.innerText = "email or password is incorrect";

}


function isExist(email) {
    
    for(let i in users){
        if(users[i].email === email) {
            return true;
        }
    }
    return false;
}

function areAllFieldsFilled(){
    console.dir(firstName);
    if(firstName.value != "" && lastName.value != "" && email.value != "" &&  password.value != "" && day.value != "" && month.value != "" && year.value != "") {
        return true;
    } 
        return false;
     
}


