(function(){
var b=document.querySelector('.menu-btn'),m=document.getElementById('mobmenu');
if(!b||!m)return;
b.addEventListener('click',function(){
var o=m.classList.toggle('open');
b.setAttribute('aria-expanded',o?'true':'false');
b.setAttribute('aria-label',o?'Close menu':'Open menu');
document.documentElement.style.overflow=o?'hidden':'';
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){b.click();}});
})();
