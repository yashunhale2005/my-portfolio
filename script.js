// Scroll reveal
const sections = document.querySelectorAll('section');
const reveal = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < triggerBottom) sec.classList.add('visible');
  });
};
window.addEventListener('scroll', reveal);
reveal();

// 3D scroll parallax for projects
const projects = document.querySelectorAll('.project');
window.addEventListener('scroll', () => {
  projects.forEach(proj => {
    const rect = proj.getBoundingClientRect();
    const scrollPercent = rect.top / window.innerHeight;
    proj.style.transform = `translateY(${scrollPercent*20}px) rotateX(${scrollPercent*3}deg) rotateY(${scrollPercent*3}deg)`;
  });
});

// Contact form alert
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will respond soon.');
  e.target.reset();
});

// Live background particles
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let particles = [];
for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width, 
    y:Math.random()*canvas.height, 
    r:Math.random()*2+1, 
    dx:(Math.random()-0.5)*0.3, 
    dy:(Math.random()-0.5)*0.3
  });
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(0,224,255,0.4)';
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();
window.addEventListener('resize',()=>{
  canvas.width=window.innerWidth; 
  canvas.height=window.innerHeight;
});