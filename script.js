
var checkcharecter
var checkplace
var checkemail
var checkphone


function charectercheck(){
    var nam= document.getElementById("name")
    var name1=nam.value
    var check=/^[A-Za-z]+$/
    if(name1 ==""){
        document.getElementById("error-messege").innerHTML="Please enter name"
        checkcharecter=false
        // return false
    }
    else if(name1.match(check)){
        document.getElementById("error-messege").innerHTML=""
        checkcharecter=true
        // return true
    }
    else{
        document.getElementById("error-messege").innerHTML="Please enter character only without space"
        checkcharecter=false
        // return false
    }
    
}

function placecheck(){
    var nam=document.getElementById("place")
    var place=nam.value
    var check=/^[A-Za-z]+$/
    if(place ==""){
        document.getElementById("error-messege").innerHTML="Please enter your place"
        checkplace=false
        // return false
    }
    else if(place.match(check)){
        document.getElementById("error-messege").innerHTML=""
        checkplace=true
        // return true
    }else{
        document.getElementById("error-messege").innerHTML="Please enter character only"
        checkplace=false
        // return false
    }
}

function emailcheck(){
    var nam=document.getElementById("email")
    var email=nam.value
    var check=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email ==""){
        document.getElementById("error-messege").innerHTML="Please enter your Email"
        checkemail=false
        // return false
    }
    else if(email.match(check)){
        document.getElementById("error-messege").innerHTML=""
        checkemail=true
        // return true
    }
    else{
        document.getElementById("error-messege").innerHTML="Please enter valid Email"
        checkemail=false
        // return false
    }
}

function phoneCheck(){
    var nam=document.getElementById("mobile")
    var mobile=nam.value
    var check=/^\d{10}$/
    if(mobile ==""){
        document.getElementById("error-messege").innerHTML="Please enter your Phone No"
        checkphone=false
        // return false
    }
    else if(mobile.match(check)){
        document.getElementById("error-messege").innerHTML=""
        checkphone=true
        // return true

    }
    else{
        document.getElementById("error-messege").innerHTML="Please enter Numbers only"
        checkphone=false
        // return false
    }
}