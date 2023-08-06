let likeBtn = document.querySelector("#notification");
likeBtn.addEventListener("click", ()=>{
    let notfyBox = document.querySelector('.notification-box');
    notfyBox.classList.toggle("show-notfy-box")
})
