
var checkcharecter
var checkplace
var checkemail
var checkphone


function charectercheck(){
    var nam= document.getElementById("name")
    var name1=nam.value
    var check= /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/

    if(name1 ==""){
        document.getElementById("name-error").innerHTML="Please enter name"
        checkcharecter=false
        // return false
    }
    else if(name1.match(check)){
        document.getElementById("name-error").innerHTML=""
        checkcharecter=true
        // return true
    }
    else{
        document.getElementById("name-error").innerHTML="Please enter character only"
        checkcharecter=false
        // return false
    }
    
}

function placecheck(){
    var nam=document.getElementById("place")
    var place=nam.value
    var check=/^[A-Za-z]+$/
    if(place ==""){
        document.getElementById("place-error").innerHTML="Please enter your place"
        checkplace=false
        // return false
    }
    else if(place.match(check)){
        document.getElementById("place-error").innerHTML=""
        checkplace=true
        // return true
    }else{
        document.getElementById("place-error").innerHTML="Please enter character only"
        checkplace=false
        // return false
    }
}

function emailcheck(){
    var nam=document.getElementById("email")
    var email=nam.value
    var check=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email ==""){
        document.getElementById("email-error").innerHTML="Please enter your Email"
        checkemail=false
        // return false
    }
    else if(email.match(check)){
        document.getElementById("email-error").innerHTML=""
        checkemail=true
        // return true
    }
    else{
        document.getElementById("email-error").innerHTML="Please enter valid Email"
        checkemail=false
        // return false
    }
}

function phoneCheck(){
    var nam=document.getElementById("mobile")
    var mobile=nam.value
    var check=/^\d{10}$/
    if(mobile ==""){
        document.getElementById("mobile-error").innerHTML="Please enter your Phone No"
        checkphone=false
        // return false
    }
    else if(mobile.match(check)){
        document.getElementById("mobile-error").innerHTML=""
        checkphone=true
        // return true

    }else if(mobile.length<10){
        document.getElementById("mobile-error").innerHTML="Entered values are below 10"
        checkphone=false
    }
    else{
        document.getElementById("mobile-error").innerHTML="Please enter 10 Numbers only"
        checkphone=false
        // return false
    }
}