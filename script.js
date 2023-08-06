
//global variable




var likeBtn = document.querySelector("#notification");
var msg = document.querySelector("#msg");

var msgClose = document.querySelector("#msgClose");



// notification 



likeBtn.addEventListener("click", ()=>{
    let notfyBox = document.querySelector('.notification-box');
    notfyBox.classList.toggle("show-notfy-box");
});



// massages open




msg.addEventListener("click",()=>{
    document.querySelector(".msg-inbox").classList.add('show-msg-inbox');
    
});




// massages close



msgClose.addEventListener("click",()=>{
    document.querySelector(".msg-inbox").classList.remove('show-msg-inbox');
    
});
