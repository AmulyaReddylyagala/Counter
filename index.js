let x=0;
let btns=document.querySelectorAll(".btn");
let value=document.getElementById("value");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let styles=e.currentTarget.classList;
        if(styles.contains("decrease")){
            x--;
        }
        else if(styles.contains("increase")){
            x++;
        }
        else{
            x=0;
        }

        if(x>0){
            value.style.color="green";
        }
        
        if(x<0){
            value.style.color="red";
        }
        
        if(x==0){
            value.style.color="#222";
        }

        value.textContent=x;
    })
})















