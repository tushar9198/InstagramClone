var likeBtn = document.querySelector("#notification");
var msg = document.querySelector("#msg");




likeBtn.addEventListener("click", ()=>{
    let notfyBox = document.querySelector('.notification-box');
    notfyBox.classList.toggle("show-notfy-box")
})


//a new section of script 

msg.addEventListener("click",()=>{
    alert(1)
})