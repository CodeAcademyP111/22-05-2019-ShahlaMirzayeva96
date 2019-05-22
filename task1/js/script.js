var elem=document.querySelector("body")

var cub=document.querySelector(".cub")

var topp=0;
var leftt=0;

    elem.addEventListener("keydown",function(ev){
console.log(this.offsetLeft)




if(ev.which==39){
    leftt +=8;
}
if(ev.which==37){
    leftt -=8;
}
if(ev.which==40){
    topp +=8;
}
if(ev.which==38){
    topp -=8;
}

cub.style.left=leftt + "px"
cub.style.top=topp + "px"
  

})
