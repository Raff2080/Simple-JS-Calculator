let error_flag=0
let count=0
let nr=""
let opr=[]
let number=["0","1","2","3","4","5","6","7","8","9"]
let sign=["+","-","/","*"]

function valid(s){
    if(sign.includes(s[-1])){return false}
    if(sign.includes(s[0])){return false}
    for(let i=0; i<s.length;i++){
        if(sign.includes(s[i]) && sign.includes(s[i+1])  ){return false}
        if(s[i]==="/" && s[i+1]==="0"){return false}
    }
    return true
}
function calculate(s){
    let screen=document.querySelector(".screen_display")
    let screen_2=document.querySelector(".current_string")
    if(valid(s)===false){
        screen.innerText=""
        screen_2.innerText="ERROR INVALID INPUT (PRESS DELETE TO CONTINUE)"
        error_flag=1
        return
    }
    let k=0
    let sign="+"
 console.log(opr)
    while(opr.includes("*")===true || opr.includes("/")===true){

        for(let i=0;i<opr.length;i++){
            if(opr[i]==="*"){
             let k=parseInt(opr[i-1])*parseInt(opr[i+1])
                opr[i-1]=k
                opr=opr.slice(0,i).concat(opr.slice(i+2))
                console.log(opr)
        }
            if(opr[i]==="/"){
             let k=parseInt(opr[i-1])/parseInt(opr[i+1])
                opr[i-1]=k
                opr=opr.slice(0,i).concat(opr.slice(i+2))
                console.log(opr)
        }

        }}
    while(opr.includes("+")===true || opr.includes("-")===true){

        for(let i=0;i<opr.length;i++){
            if(opr[i]==="+"){
                let k=parseInt(opr[i-1])+parseInt(opr[i+1])
                opr[i-1]=k
                opr=opr.slice(0,i).concat(opr.slice(i+2))
                console.log(opr)
            }
            if(opr[i]==="-"){
                let k=parseInt(opr[i-1])-parseInt(opr[i+1])
                opr[i-1]=k
                opr=opr.slice(0,i).concat(opr.slice(i+2))
                console.log(opr)
            }

        }}


    screen.innerText=""
    screen_2.innerText=opr[0]
    screen.innerText=opr[0]
    nr=opr[0]
    opr.pop()




}


function keyHandlers(e){

    let key=document.querySelector(`.key[data-key="${e.key}"]`)
    if(!key){return}
    key.classList.add('keystr')

    let stack=[]
    let screen=document.querySelector(".screen_display")
    let screen_2=document.querySelector(".current_string")

    if(nr.length>7 || opr.length>7){
        screen.innerText=""
        screen_2.innerText="ERROR INPUT TOO BIG (PRESS DELETE TO CONTINUE)"
        error_flag=1

    }


    if(error_flag===0) {

        if (e.key === "Backspace") {
            screen.innerText = screen.innerText.slice(0, -1)
            screen_2.innerText = screen_2.innerText.slice(0, -1)
            nr = nr.slice(0, -1)
        } else if (e.key === "=") {
            opr.push(nr)
            nr = ""
            calculate(screen_2.innerText)
        } else {
            if (number.includes(e.key)) {
                nr += e.key;
                screen.innerText = nr;
                screen_2.innerText = screen_2.innerText + e.key
            } else {
                screen_2.innerText = screen_2.innerText + e.key
                screen = e.key
                opr.push(nr)
                opr.push(e.key)
                nr = ""
            }
        }
    }

    if(e.key==="Delete"){
        screen.innerText=""
        screen_2.innerText=""
        nr=""
        opr=[]
        error_flag=0
    }



    





}



window .addEventListener("keydown",keyHandlers)
let keys=document.querySelectorAll(".key")
keys.forEach(key=>key.addEventListener('transitionend',(e)=>{
    if(e.propertyName!=="transform"){return}

    key.classList.remove('keystr')

}
    )
)

let inp=document.querySelectorAll(".comp_stylization input")
inp.forEach(k=>k.addEventListener("change",()=>{
    document.documentElement.style.setProperty(`--${k.name}`,`${k.value}`)
}))








