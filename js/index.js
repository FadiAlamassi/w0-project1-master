const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 
var node1 = document.createElement("a");  
var node2 = document.createElement("a");  
const nav = document.querySelector("nav");
node1.innerHTML = "first"; 
node2.innerHTML = "second"; 
nav.appendChild(node1);
nav.appendChild(node2);
const navAnchor = document.querySelectorAll("nav a");
const navItems = siteContent.nav;
const navImg = document.querySelector("header img");
const ctaSection = document.querySelector(".cta");
const ctaText = document.querySelector(".cta-text");
const mainContent = document.querySelector(".main-content");
const topContent = document.querySelector(".top-content");
const textContent = document.querySelectorAll(".text-content");
const contact = document.querySelector(".contact");
const contactPara = contact.querySelectorAll("p");
const footer = document.querySelector("footer");

console.log(siteContent.nav);
console.log("image = "+ navImg);

var i=0;
for (name in navItems) {
  if(navItems[name] ==="img/logo.png"){
   //onsole.log("nameeee :"+navItems[name]);
    navImg.setAttribute("src",navItems[name]);
  }else{
    navAnchor[i].innerHTML = navItems[name];
  // console.log(navAnchor[i]);
   ++i;
  }
}
console.log("dasda" + ctaText.firstChild);
console.log("dasda" + siteContent.cta["h1"]);
console.log(typeof(ctaText.querySelector("h1")));
ctaText.querySelector("h1").innerHTML = siteContent.cta["h1"];
ctaText.querySelector("button").innerHTML = siteContent.cta["button"];
ctaSection.querySelector("img").setAttribute("src",siteContent.cta["img-src"]);
textContent[0].querySelector("h4").innerHTML = siteContent["main-content"]["features-h4"];
textContent[0].querySelector("p").innerHTML = siteContent["main-content"]["features-content"];
textContent[1].querySelector("h4").innerHTML = siteContent["main-content"]["about-h4"];
textContent[1].querySelector("p").innerHTML = siteContent["main-content"]["about-content"];
mainContent.querySelector("img").setAttribute("src",siteContent["main-content"]["middle-img-src"]);
textContent[2].querySelector("h4").innerHTML = siteContent["main-content"]["services-h4"];
textContent[2].querySelector("p").innerHTML = siteContent["main-content"]["services-content"];
textContent[3].querySelector("h4").innerHTML = siteContent["main-content"]["product-h4"];
textContent[3].querySelector("p").innerHTML = siteContent["main-content"]["product-content"];
textContent[4].querySelector("h4").innerHTML = siteContent["main-content"]["vision-h4"];
textContent[4].querySelector("p").innerHTML = siteContent["main-content"]["vision-content"];
contact.querySelector("h4").innerHTML = siteContent.contact["contact-h4"];
contactPara[0].innerHTML = siteContent.contact["address"];
contactPara[1].innerHTML = siteContent.contact["phone"];
contactPara[2].innerHTML = siteContent.contact["email"];
footer.querySelector("p").innerHTML = siteContent.footer["copyright"]; 


for(var i = 0 ; i < navAnchor.length; i++){
  navAnchor[i].setAttribute("style","color:green");
}

ctaText.querySelector("button").addEventListener('click', function() {
  if(textContent[0].querySelector("p").style.backgroundColor === 'blue') {
    textContent[0].querySelector("p").style.backgroundColor = '';
  }      
  else {
    textContent[0].querySelector("p").style.backgroundColor = 'blue';
  }      
});
// textContent[0].querySelector("p").classList.toggle("hide");
// ctaText.querySelector("button").addEventListener("click",()=>{
//   textContent[0].querySelector("p").innerHTML= " ";
// });