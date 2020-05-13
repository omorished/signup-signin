//declare DOM references

//(textFiled elements)
var firstName = document.getElementById('first-name-txtfield');
var lastName = document.getElementById('last-name-txtfield');
var email = document.getElementById('email-txtfield');
var password = document.getElementById('password-txtfield');
var gender = document.getElementsByName('gender');
//(select elements)
var day = document.getElementById('days-dropdown');
var month = document.getElementById('months-dropdown');
var year = document.getElementById('years-dropdown');

var errorMessage = document.getElementById('error-message');

//
if(JSON.parse(localStorage.getItem('usersList')) != null)
    var users = JSON.parse(localStorage.getItem('usersList'));
else 
    var users = [];


function User(firstName, lastName, email, password, gender, day, month, year){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.day = day;
    this.month = month;
    this.year = year;
    
    
}


function createUser(){
    
    errorMessage.innerText = "";
    
    if (areAllFieldsFilled()) {
        
        if (!isExist(email.value)) {
            
        
        var user = new User(firstName.value, lastName.value, email.value, password.value, genderBtnChecked(), day.value, month.value, year.value);

        users.push(user);
        let users_serialized = JSON.stringify(users);
        localStorage.setItem('usersList', users_serialized);
            
        errorMessage.style.cssText = "color: green ;  margin-left: 90px;";
        errorMessage.innerText = "you have successfully registered";
        setTimeout(function() { window.location.href = "signin.html" }, 2000);    
        
            
    } else {
        errorMessage.innerText = "email is already exist!";
    }
    
    } else {
        errorMessage.innerText = "please fill all fields";
    }
    
    
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
    if(firstName.value != "" && lastName.value != "" && email.value != "" &&  password.value != "" && day.value != "" && month.value != "" && year.value != "") {
        return true;
    } 
        return false;
     
}

function genderBtnChecked(){
    if(gender[0].checked)
        return "male";
    
    return "female";
}

function login() {
    
    errorMessage.innerText = "";
    
    for(let i in users) {
        if(users[i].email == email.value && users[i].password == password.value) {
            localStorage.setItem('userId', i);
            window.location.href = "user-info.html";
            return;
        } 
    }
        errorMessage.innerText = "email or password is incorrect";

}

function displayUserInfo(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var gender = document.getElementById('gender');
    var DOB = document.getElementById('DOB');
    
    var user = JSON.parse(localStorage.getItem('usersList'))[localStorage.getItem('userId')];
    
    name.innerText = "name: " + user.firstName + " " + user.lastName;
    email.innerText = "email: " + user.email;
    gender.innerText = "gender: " + user.gender;
    DOB.innerText = "date of birth: " + user.day + "/" + user.month + "/" + user.year;
    
}



