const profilePhoto = document.getElementById("profilePhoto");
const switchButton = document.getElementById("switchButton");
let professionalPhoto =true;
switchButton.addEventListener("click",function(){
    if(professionalPhoto){
        profilePhoto.src="assets/casual.jpg";
        profilePhoto.alt="casual profile photo";
        professionalPhoto= false;
    }else{
        profilePhoto.src = "assets/professional.jpg";
        profilePhoto.alt = "profissional profile photo";
        professionalPhoto = true;
    }
});