function getlen(){
    let getval = document.getElementById("get").value
    let setval = document.getElementById("set").value

    let x = document.getElementById("demo")    
    let y = document.getElementById("inc") 
    
    if(getval === setval){
        y.innerText = x.innerText
    }

    if(getval === "meter" && setval === "foot"){
        y.innerText = x.innerText * 3.28084
        y.classList.add("green")

    }
    else if(getval === "meter" && setval === "cm"){
        y.innerText = x.innerText*100;
        y.classList.add("green")
    }
    else if(getval === "foot" && setval === "meter"){
        y.innerText = x.innerText / 3.281;
        y.classList.add("green")
    }
    else if(getval === "foot" && setval === "cm"){
        y.innerText = x.innerText * 30.48;
        y.classList.add("green")
    }
    else if(getval === "cm" && setval === "foot"){
        y.innerText = x.innerText / 30.48;
        y.classList.add("green")
    }
    else if(getval === "cm" && setval === "meter"){
        y.innerText = x.innerText / 100;
        y.classList.add("green")
    }

    let z = /[a-z]/i
    if(z.test(x.innerText) === true || x.innerText ==''){
        y.classList.remove("green")
        y.classList.add("red")
        y.innerText = ('Enter Valid Number')
    }
    else if(z.test(x.innerText) === false){
        y.classList.remove("red")
        y.classList.add('green')
    }

}

// ********* Function for temperature ************

function getceli(){

    let x = document.getElementById("celi")    
    let y = document.getElementById("fah") 

    y.innerText = x.innerText * 1.8 +32
    y.classList.add("green")

    let z = /[a-z]/i
    if(z.test(x.innerText) === true || x.innerText == ''){
        y.classList.remove("green")
        y.classList.add("red")
        y.innerText = ('Enter valid input')
    }
    else if(z.test(x.innerText) === false){
        y.classList.remove("red")
        y.classList.add("green")
    }
}

function getfah(){

    let x = document.getElementById("celi")    
    let y = document.getElementById("fah") 

    x.innerText = (y.innerText - 32)*5/9
    x.classList.add("green")

    let z = /[a-z]/i
    if(z.test(x.innerText) === true || y.innerText ==''){
        x.classList.remove("green")
        x.classList.add("red")
        x.innerText = ('Enter Valid input')
    }
    else if(z.test(x.innerText) === false){
        x.classList.remove("red")
        x.classList.add("green")
    }
}

function getgram(){
    let x = document.getElementById("kilo")    
    let y = document.getElementById("gram")
    
    y.innerText = x.innerText * 1000
    y.classList.add("green")

    let z = /[a-z]/i
    if(z.test(x.innerText) === true || x.innerText ==''){
        y.classList.remove("green")
        y.classList.add("red")
        y.innerText = ('Enter Valid input')
    }
    else if(z.test(x.innerText) === false){
        y.classList.remove("red")
        y.classList.add("green")
    }
}

function getkilo(){
    let x = document.getElementById("kilo")    
    let y = document.getElementById("gram")
    
    x.innerText = y.innerText / 1000
    x.classList.add("green")
    let z = /[a-z]/i
    if(z.test(x.innerText) === true  || y.innerText ==''){
        x.classList.remove("green")
        x.classList.add("red")
        x.innerText = ('Enter Valid input')
    }
    else if(z.test(x.innerText) === false){
        x.classList.remove("red")
        x.classList.add("green")
    }
}