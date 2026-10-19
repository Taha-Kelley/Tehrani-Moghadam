(function(){
var $=function(s,r){return(r||document).querySelector(s)},secs=[].slice.call(document.querySelectorAll('main section'));
var links=[].slice.call(document.querySelectorAll('nav.toc a')),bar=$('#bar'),top=$('#top');
function onScroll(){var h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);bar.style.width=(p*100)+'%';top.style.display=h.scrollTop>600?'block':'none';
var cur=secs[0];secs.forEach(function(s){if(s.getBoundingClientRect().top<120)cur=s});links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur.id)})}
addEventListener('scroll',onScroll,{passive:true});onScroll();
top.onclick=function(){scrollTo({top:0})};
var q=$('#q'),res=$('#res');
function norm(t){return t.replace(/[\u064A]/g,'\u06CC').replace(/[\u0643]/g,'\u06A9').toLowerCase()}
q.addEventListener('input',function(){var v=norm(q.value.trim());res.innerHTML='';res.hidden=!v;if(!v)return;
var hit=secs.filter(function(s){return norm(s.textContent).indexOf(v)>-1});
if(!hit.length){res.textContent='نتیجه‌ای یافت نشد.';return}
hit.forEach(function(s){var a=document.createElement('a');a.href='#'+s.id;a.textContent=s.querySelector('h2').textContent;a.onclick=function(){res.hidden=true};res.appendChild(a)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){res.hidden=true}});
})();
