
//global variable




var likeBtn = document.querySelector("#notification");
var msg = document.querySelector("#msg");

var msgClose = document.querySelector("#msgClose");



// notification 

/*

likeBtn.addEventListener("mouseup",()=>{
    let notfyBox = document.querySelector('.notification-box');
      notfyBox.classList.toggle("show-notfy-box");

});

*/

//------New code for notification (if user click outside close the notification box)

likeBtn.addEventListener("click",()=>{
    let notfyBox = document.querySelector('.notification-box-close');
      notfyBox.style.display="block";
      window.addEventListener('mouseup',function(event){
        if(event.target != notfyBox && event.target.parentNode != notfyBox){
            notfyBox.style.display = 'none';
        }
  });  
  
  
});

// massages open




msg.addEventListener("click",()=>{
    document.querySelector(".msg-inbox").classList.add('show-msg-inbox');
    
});




// massages close



msgClose.addEventListener("click",()=>{
    document.querySelector(".msg-inbox").classList.remove('show-msg-inbox');
    
});
