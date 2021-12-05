var showImg = document.getElementById("showImg");
var Img = document.getElementById("fullimg");

// call the function click Image //
function openImg(photo){
    showImg.style.display = "flex";
    Img.src = photo;
}

// call the function click Cross button  //
function closeImg(){
    showImg.style.display = "none";
}