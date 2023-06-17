console.log("ksdksd")
const root = document.documentElement.style;
const Name=document.querySelector('[data-profileName]');
const UserName=document.querySelector('[data-username]');
const Bio=document.querySelector('[data-bio]');
const date=document.querySelector('[data-date]');
const Repo=document.querySelector('[data-repo]');
const Following=document.querySelector('[data-following]');
const Followers=document.querySelector('[data-follow]');
const Location1=document.querySelector('[data-location]');
const Blog=document.querySelector('[data-page]')
const twitter=document.querySelector('[ data-twitter]')
const company=document.querySelector('[data-company]')
const dp=document.querySelector('[data-dp]')
const error=document.querySelector('.not-found')
const inputValue=document.querySelector(".input-size")
const Button=document.querySelector(".search-btn")
const modeText=document.querySelector('[data-modeText]')
const sun=document.querySelector('[data-sun]')
const clickMode=document.querySelector(".icon-text");






const url = `https://api.github.com/users/`;

Button.addEventListener('click',() =>{
    let val=inputValue.value;
    getUserData(url+`${val}`);
 
    
})
let darkMode=false;
clickMode.addEventListener('click',function(){
    if(darkMode==false){
        darkModeProperties()
    }else{
        lightModeProperties()
    }
})

console.log(Name)
function updateUI(git){
    if(git.message != "Not Found"){
        
        function checknull(par1,par2){
            if(par1=="" || par1==null){
                
               par2.style.opacity=0.7;
               par2.style.textDecoration='none'
               par2.previousElementSibling.style.opacity = 0.7;
                return false
            }else{
                return true
            }
        }
        Name.innerText=git.name;
        UserName.href=`${git.html_url}`;
        UserName.innerText=git.login
        Bio.innerText=checknull(git.bio,Bio)?git.bio:"Not Available";
        dp.src=git.avatar_url;
        Repo.innerText=git.public_repos;
        Followers.innerText=git.followers
        Following.innerText=git.following;
        Location1.innerText=git.location
        twitter.innerText=checknull(git.twitter_username,twitter)?git.twitter_username:"Not Available"
        twitter.href=git.twitter_username
        Blog.innerText=checknull(git.blog,Blog) ? data.blog :"Not Available";
        company.innerText=checknull(git.company,company)?git.company:"Not Available"
        date.innerText=`Joined ${git.created_at.substring(0, 10)}`;
    }
    else{
        console.log("not Found")
        error.classList.add("active")
    }
   
}
function darkModeProperties() {

    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    modeText.innerText = "LIGHT";
    sun.src = "./assets/images/sun-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkMode = true;
    console.log("darkmode changed to " + darkMode);
    localStorage.setItem("dark-mode", true);  
    console.log("setting dark mode to false");
  
    console.log("setting dark mode to true");
  
  }
  function lightModeProperties() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    modeText.innerText = "DARK";
    sun.src = "./assets/images/moon-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkMode = false;
    console.log("darkmode changed to " + darkMode);
  
    localStorage.setItem("dark-mode", false);
    console.log("setting dark mode to false");
  }

async function getUserData(git){

    let result=await fetch(git);
    let data=await result.json();
    console.log(data)
    updateUI(data);
}
init();
//Init Function For by Default Value
function init(){
 let darkMode=false
 let value=localStorage.getItem("dark-mode")
 console.log(value)

  if(value==null){
    lightModeProperties();
  }else if(value==false){
    lightModeProperties();
  }
  else if(localStorage.getItem('dark-mode')=="true"){
    darkModeProperties();
    console.log("inside darkmode")
  }

    //
    getUserData(url+"shreyash4004");
   
}



