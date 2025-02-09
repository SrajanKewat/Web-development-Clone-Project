let shape="circle";
let apear1=document.querySelector(".none1")
let box1= document.querySelector(".box1")
let asign1 , asign2 , asign3 , asign4 , asign5 , asign6 , asign7 , asign8 , asign0;

box1.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear1.classList.add("circle")
        asign1=0;
       }
       else{
        shape="circle"
        apear1.classList.add("rectangle")
        asign1=1;
       }
       winner();
})

let apear0=document.querySelector(".none0")
let box0= document.querySelector(".box0")
box0.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear0.classList.add("circle")
        asign0=0;
       }else{
        shape="circle"
        apear0.classList.add("rectangle")
        asign0=1
       }
       winner();
})

let apear2=document.querySelector(".none2")
let box2= document.querySelector(".box2")
box2.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear2.classList.add("circle")
        asign2=0;
       }else{
        shape="circle"
        apear2.classList.add("rectangle")
        asign2=1
       }
       winner();
})

let apear3=document.querySelector(".none3")
let box3= document.querySelector(".box3")
box3.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear3.classList.add("circle")
        asign3=0;
       }
       else{
        shape="circle"
        apear3.classList.add("rectangle")
        asign3=1
       }
       winner();
})

let apear4=document.querySelector(".none4")
let box4= document.querySelector(".box4")
box4.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear4.classList.add("circle")
        asign4=0;
       }
       else{
        shape="circle"
        apear4.classList.add("rectangle")
        asign4=1
       }
       winner();
})

let apear5=document.querySelector(".none5")
let box5= document.querySelector(".box5")
box5.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear5.classList.add("circle")
        asign5=0;
       }else{
        shape="circle"
        apear5.classList.add("rectangle")
        asign5=1
       }
       winner();
})

let apear6=document.querySelector(".none6")
let box6= document.querySelector(".box6")
box6.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear6.classList.add("circle")
        asign6=0;
       }else{
        shape="circle"
        apear6.classList.add("rectangle")
        asign6=1
       }
       winner();
})

let apear7=document.querySelector(".none7")
let box7= document.querySelector(".box7")
box7.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear7.classList.add("circle")
        asign7=0;
       }else{
        shape="circle"
        apear7.classList.add("rectangle")
        asign7=1
       }
       winner();
})

let apear8=document.querySelector(".none8")
let box8= document.querySelector(".box8")
box8.addEventListener("click",()=>{
       if(shape==="circle"){
        shape="rectangle"
        apear8.classList.add("circle")
        asign8=0;
       }else{
        shape="circle"
        apear8.classList.add("rectangle")
        asign8=1
       }
       winner();
});
function winner(){
       if((asign0==0 && asign1==0 && asign2==0)||(asign3==0 && asign4==0 && asign5==0)||(asign6==0 && asign7==0 && asign8==0)||(asign0==0 && asign3==0 && asign6==0)||(asign1==0 && asign4==0 && asign7==0)||(asign2==0 && asign5==0 && asign8==0)||(asign0==0 && asign4==0 && asign8==0)||(asign2==0 && asign4==0 && asign6==0)){
              document.querySelector(".winner").innerText="The Winner is Circle"
       }else if(
              (asign0==1 && asign1==1 && asign2==1)||(asign3==1 && asign4==1 && asign5==1)||(asign6==1 && asign7==1 && asign8==1)||(asign0==1 && asign3==1 && asign6==1)||(asign1==1 && asign4==1 && asign7==1)||(asign2==1 && asign5==1 && asign8==0)||(asign0==1 && asign4==1 && asign8==1)||(asign2==1 && asign4==1 && asign6==1)
       ){
              document.querySelector(".winner").innerText="The Winner is Rectangle"  
       };
}



