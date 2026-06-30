// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},700);

},1200);

});

// ===========================
// SMOOTH SCROLL
// ===========================

function goStory(){

document.getElementById("story").scrollIntoView({

behavior:"smooth"

});

}

// ===========================
// FINAL MESSAGE
// ===========================

function showLove(){

const msg=document.getElementById("message");

msg.innerHTML=`

💖

<br><br>

Dear Shru,

<br><br>

I know I hurt you.

I know one sentence changed everything.

But I hope someday

you'll remember my heart,

not my mistake.

<br><br>

You are beautiful.

You are kind.

You are precious.

You are enough.

Exactly the way you are.

<br><br>

Whether today,

tomorrow,

or years later...

my respect for you

will always remain.

<br><br>

❤️

Forever,

Ashu

`;

launchHearts();

}

// ===========================
// FLOATING HEARTS
// ===========================

function launchHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("floatingHeart");

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

}

// ===========================
// PETALS
// ===========================

setInterval(()=>{

let petal=document.createElement("div");

petal.innerHTML="🌸";

petal.classList.add("petal");

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*15)+"px";

petal.style.animationDuration=(6+Math.random()*4)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

},700);

// ===========================
// SCROLL ANIMATION
// ===========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.reason,.gallery img,.letter-box").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});