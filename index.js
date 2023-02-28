pass_box=document.querySelector("[pass_box]")//manipulate value using .value
pass_len=document.querySelector("[pass_len]")
slider=document.querySelector("[slider]")
uppercase=document.querySelector("[uppercase]")
lowercase=document.querySelector("[lowercase]")
numbers=document.querySelector("[numbers]")
symbols=document.querySelector("[symbols]")
//add event listener to the generate_password button

//function to change display of password-length everytime slide is interacted
function slider_connect(){
    pass_len.textContent=slider.value
}
//adding event listener to slider
slider.addEventListener('change',slider_connect);

//function to generate random uppercase letter and return it
function get_rand_up(){
    let a = Math.floor(Math.random()*(26))
    return String.fromCharCode(65+a)
}


//function to generate random lowercase letter and return it
function get_rand_lower(){
    let a = Math.floor(Math.random()*(26))
    return String.fromCharCode(97+a)
}

//function to generate random number
function get_rand_num(){
    let a = Math.floor(Math.random()*(10))
    return String.fromCharCode(48+a)
}

let special_chars="@(~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/)"
//function to generate special characters
function get_rand_char(){
    let a = Math.floor(Math.random()*(special_chars.length))
    return (special_chars[a])
}


//function to generate password
function generate_pass(){
    func_arr=[uppercase]
}
