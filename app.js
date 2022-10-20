let mainImg = document.getElementById("main-image");
let smalImg = document.getElementsByClassName("small-img");

const sources = Array.from(smalImg, (Image) => Image.src);

sources.forEach(function(value, index){
  smalImg[value, index].onclick = function(){
    mainImg.src = smalImg[value, index].src;
   }
});

//~primitiv ways
// smalImg[0].onclick = function(){
//   mainImg.src = smalImg[0].src;
// }
// smalImg[1].onclick = function(){
//   mainImg.src = smalImg[1].src;
// }
// smalImg[2].onclick = function(){
//   mainImg.src = smalImg[2].src;
// }
// smalImg[3].onclick = function(){
//   mainImg.src = smalImg[3].src;
// }



