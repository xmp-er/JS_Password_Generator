pass_box=document.querySelector("[pass_box]")//manipulate value using .value
pass_len=document.querySelector("[pass_len]")
slider=document.querySelector("[slider]")
uppercase=document.querySelector("input[name=uppercase]")
lowercase=document.querySelector("input[name=lowercase]")
numbers=document.querySelector("input[name=numbers]")
symbols=document.querySelector("input[name=symbols]")
//add event listener to the generate_password button
generate_password=document.querySelector("[generate_password]")

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

//array of all the checkboxes in one place

let check_arr=[uppercase,lowercase,numbers,symbols]

//putting a even listener on all of them to check and accordingly adjust pass-word length

function set_pass_len_on_check(){
    let cnt=0;
    for(i=0;i<4;i++){
        if(check_arr[i].checked) cnt++;
    }
    if(slider.value<cnt){
        slider.value=cnt
        slider_connect();
    }
}

function call_correspiding_functions(a){
    if(a==uppercase){
        return get_rand_up();
    }
    if(a==lowercase){
        return get_rand_lower();
    }
    if(a==numbers){
        return get_rand_num();
    }
    if(a==symbols){
        return get_rand_char();
    }
}

uppercase.addEventListener('change',set_pass_len_on_check)
lowercase.addEventListener('change',set_pass_len_on_check)
numbers.addEventListener('change',set_pass_len_on_check)
symbols.addEventListener('change',set_pass_len_on_check)

//function to generate password
function generate_pass(){
    let pass=""
    let cnt=0;
    let new_check_arr=[]
    for(i=0;i<4;i++){
        if(check_arr[i].checked){
            pass+=call_correspiding_functions(check_arr[i])
            cnt++
            new_check_arr.push(check_arr[i])
        }
    }
    if(cnt==0){
        alert("Please check at least one of the attributes")
        return;
    }
    for(i=0;i<(slider.value-cnt);i++){
        let a=Math.floor(Math.random()*cnt)
        let ret=call_correspiding_functions(new_check_arr[a])
        console.log(ret)
        pass+=ret
    }
    console.log(pass)
    pass_box.value=pass
}

//adding event listener to generating password
generate_password.addEventListener('click',generate_pass);
