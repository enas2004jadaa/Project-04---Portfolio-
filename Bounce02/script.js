const translations = {
    en:{
        title:"My Portfolio",
        welcome: "welcom to my Protfolio",
        aboutText: "I am an Information and Network Security graduate.",
        skillsTitle:"My skills",
        skillsText: "Cybersecurity, networking, Python, Linux and JavaScript.",
        contactTitle: "Contact Me",
        contactText: "Feel free to contact me."
    },
    ar:{
        title:"ملفي الشخصي",
        welcome:"مرحبا بكم في ملفي الشخصي",
        aboutText:"انا خريجه امن المعلومات و الشبكات",
        skillsTitle:"مهاراتي",
        skillsText:"الأمن السيبراني، الشبكات، بايثون، لينكس وجافاسكربت",
        contactTitle:"تواصل معي",
        contactText:"لا تتردد في التواصل معي"
    }
};
const englishButton =document.getElementById("englishButton");
const arabicButton =document.getElementById("arabicButton");
function changeLanguage(language){
    document.getElementById.lang="language";
    if(language==="ar"){
        document.documentElement.dir="rtl";
    }else{
        document.documentElement.dir="ltr";
    }
    document.getElementById("title").textContent=translations[language].title;
    document.getElementById("welcome").textContent=translations[language].title;
    document.getElementById("aboutText").textContent=translations[language].aboutText;
    document.getElementById("skillsTitle").textContent=translations[language].skillsTitle;
    document.getElementById("skillsText").textContent=translations[language].skillsText;
    document.getElementById("contactTitle").textContent=translations[language].contactTitle;
    document.getElementById("contactText").textContent=translations[language].contactText;
}
englishButton.addEventListener("click",function(){
    changeLanguage("en");
});
arabicButton.addEventListener("click",function(){
    changeLanguage("ar");
})