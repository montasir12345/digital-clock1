setInterval(function(){
    
    let date = new Date();
    
    let hour = document.querySelector(`#hour`)
    let min = document.querySelector(`#min`)
    let sec = document.querySelector(`#sec`)
    let mili = document.querySelector(`#mili`)
    let am = document.querySelector(`#am`)



let hours_now = date.getHours();
let min_now = date.getMinutes();
let mili_now = date.getMilliseconds();
let sec_now = date.getSeconds();




hour.innerHTML = hours_now > 12 ? hours_now - 12 :hours_now;
am.innerHTML = hours_now > 12 ? `pm` : `am`;



min.innerHTML = min_now < 10 ? `0`+min_now : min_now;
sec.innerHTML = sec_now < 10 ? `0`+sec_now : sec_now;
mili.innerHTML = mili_now;

},);



    
    
    
    
