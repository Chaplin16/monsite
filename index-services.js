
//fonctions pour faire apparaitre au scroll les prestations
let services = document.getElementsByClassName('services');
function appearServices() {
  let postServices = services.offsetTop;
   
}

//fonction pour faire apparaitre a partir de 850px le background des prestations
let background = document.querySelector('.background');
const backgroundImage= ()=>{
    if(window.innerWidth > 850){
        background.style.visibility = 'visible';
    } else{
        background.style.visibility = 'hidden';
    }
}

window.addEventListener('resize', backgroundImage);


// fonctions pour faire apparaitre les paragraphes sous les titres h3 au click
let btnServicesCreation = document.querySelector('.btn-services-creation');
let pServicesCreation = document.querySelector('.p-services-creation');

btnServicesCreation.addEventListener('click', function(e){
     if(pServicesCreation.style.display === 'block') {
        pServicesCreation.style.display = 'none';
     } else {
        pServicesCreation.style.display = 'block';
     } 
});


let btnServicesECommerce = document.querySelector('.btn-services-e-commerce');
let pServicesECommerce = document.querySelector('.p-services-e-commerce');

btnServicesECommerce.addEventListener('click', function(e){
     if(pServicesECommerce.style.display === 'block') {
        pServicesECommerce.style.display = 'none';
     } else {
        pServicesECommerce.style.display = 'block';
     } 
});

let btnServicesIntegration = document.querySelector('.btn-services-integration');
let pServicesIntegration = document.querySelector('.p-services-integration');
btnServicesIntegration.addEventListener('click', function(e){
    if(pServicesIntegration.style.display === 'block') {
        pServicesIntegration.style.display = 'none';
    } else {
        pServicesIntegration.style.display = 'block';
    } 
});

let btnServicesBoost = document.querySelector('.btn-services-boost');
let pServicesBoost = document.querySelector('.p-services-boost');
btnServicesBoost.addEventListener('click', function(e){
    if(pServicesBoost.style.display === 'block') {
        pServicesBoost.style.display = 'none';
    } else {
        pServicesBoost.style.display = 'block';
    } 
});

let btnServicesResponsive = document.querySelector('.btn-services-responsive');
let pServicesResponsive = document.querySelector('.p-services-responsive');
btnServicesResponsive.addEventListener('click', function(e){
    if(pServicesResponsive.style.display === 'block') {
        pServicesResponsive.style.display = 'none';
    } else {
        pServicesResponsive.style.display = 'block';
    } 
});

