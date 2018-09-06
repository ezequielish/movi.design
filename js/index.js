const btnabarra = document.getElementById('btnbarra')
const navegador = document.getElementById('navegador')
const navul = document.getElementById('navul');
const peliculas = document.getElementById('peliculas');
const menu = document.getElementById('bars')
menu.addEventListener('click', toggleMenu)

function toggleMenu() 
{
    if(document.querySelector('.toggleMenu'))
    {
        document.querySelector('.header').className = 'head'
        document.querySelector('.contenedor').className = ('contenedor')     
        navegador.style.top =   '70px'         
    }
    else
    {
        document.querySelector('.head').classList.add('header')
        document.querySelector('.contenedor').classList.add('toggleMenu')  
        navegador.style.top =   '160px'
    }
        
  
}
btnbarra.addEventListener('click', btnevent)
function btnevent(evt) 
{
    if(evt.target.offsetParent.classList[1] == 'barrabk')
    {
        btnabarra.classList.add('barrabkreverse')
        btnabarra.classList.remove('barrabk')
        navul.classList.remove('navul')
        peliculas.className = 'peliculas'
    }else{
        btnabarra.classList.add('barrabk')
        btnabarra.classList.remove('barrabkreverse')
        navul.classList.add('navul')         
        navegador.classList.add('navegadorToggle')
        peliculas.classList.add('peliculasToggle')

    }
}
window.addEventListener('scroll', altScroll)
function altScroll()
{
    if(this.scrollY > 50)
    {

        if(navegador.classList[1])
        {
            navegador.style.top = '0px'
            btnabarra.style.position = 'fixed'
            btnabarra.style.top = '0px'
        }
    }else{
            navegador.style.top = '70px'
            btnabarra.style.position = 'absolute'
            btnabarra.style.top = '0px'
    }
}