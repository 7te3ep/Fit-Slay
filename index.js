import {Router} from "./modules/Router.js"

const page = document.getElementById('content')
const router = new Router({pageEl:page})

const showPage = async ({link,file}) => {
   const page = document.getElementById("page")
   await router.loadPage(link , file)
   page.style.display = "flex"
   page.classList.remove("hide")
   page.classList.add("show")
}

const hidePage = async () => {
   await new Promise(r => setTimeout(r, 80));
   const page = document.getElementById("page")
   page.classList.remove("show")
   page.classList.add("hide")
   const animEnded = ()=>{
      page.style.display = "none"
      page.removeEventListener('animationend',animEnded);
   } 
   page.addEventListener('animationend', animEnded);
}

document.getElementById("backBtn").addEventListener("click", ()=>hidePage())
document.getElementById("topProfile").addEventListener("click",  ()=>showPage({link:"/main",file:"main.html"}))
document.getElementById("cta").addEventListener("click",  ()=>showPage({link:"/main",file:"main.html"}))