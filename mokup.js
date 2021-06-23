const logoMoblie = document.querySelector('#logoMoblie')
const listMoblie = document.querySelector('#listMoblie')
const logo = document.querySelector('.logo')
const menulist = document.querySelector('.menulist')

if(logoMoblie && listMoblie && logo && menulist){
    logoMoblie.innerHTML=logo.innerHTML
    console.log(logoMoblie)
}