// MODAL
function abrirModal(id){
    document.getElementById(id).style.display="flex";
}
function fecharModal(id){
    document.getElementById(id).style.display="none";
}

// COUNTDOWN
function iniciarCountdown(id, data){
    const el = document.getElementById(id);
    setInterval(()=>{
        const agora = new Date().getTime();
        const distancia = new Date(data).getTime() - agora;

        const dias = Math.floor(distancia / (1000*60*60*24));
        const horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));
        const minutos = Math.floor((distancia%(1000*60*60))/(1000*60));

        el.innerHTML = `⏳ ${dias}d ${horas}h ${minutos}m`;
    },1000);
}

iniciarCountdown("count1","Jan 10, 2026 00:00:00");
iniciarCountdown("count2","Dec 27, 2026 00:00:00");

// PARTICULAS
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        d:Math.random()*1
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#00ff88";
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
        ctx.fill();
    });
    update();
}

function update(){
    particles.forEach(p=>{
        p.y+=p.d;
        if(p.y>canvas.height){ p.y=0; }
    });
}

setInterval(draw,33);
