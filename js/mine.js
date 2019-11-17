



var imgs=document.getElementsByClassName("item-img");
var father=document.querySelector(".father");
var child=document.querySelector(".child");
var next=document.getElementById("next");
var close=document.getElementById("wclose");
var ar=[];
var index=0;
for(var i=0;i<imgs.length;i++){
    ar.push(imgs[i]);
    imgs[i].addEventListener("click",function(e){
        father.classList.add("show");
        var seen=e.target.src;
        child.style.backgroundImage="url("+seen+")"
        index=ar.indexOf(e.target)
        console.log(child)
    })    
}
next.addEventListener("click",function(){
      index++
    if(index==ar.length){
        index=0;
    }
 child.style.backgroundImage="url("+ar[index].src+")"
})
prev.addEventListener("click",function(){    
     index--
    if(index<0){
        index=ar.length-1;
    }   
 child.style.backgroundImage="url("+ar[index].src+")"

})
close.addEventListener("click",function(){
    
            father.classList.remove("show");

})
document.addEventListener("keydown",function(e){
    if(e.keyCode==39){
         index++
    if(index==ar.length){
        index=0;
    }
 child.style.backgroundImage="url("+ar[index].src+")"
        
    }
})
document.addEventListener("keydown",function(e){
    if(e.keyCode==37){
        
     index--
    if(index<0){
        index=ar.length-1;
    }
 child.style.backgroundImage="url("+ar[index].src+")"

    }
    
})
document.addEventListener("keydown",function(e){
    if(e.keyCode==27){
    father.classList.remove("show");

    }
})
document.addEventListener("click",function(e){
    if(e.target==father){
    father.classList.remove("show");
    }
    
})






