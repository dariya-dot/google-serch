let searchBoxEl=document.getElementById('search-box')
let searchbuttonEl=document.getElementById('searchbutton')
let inputEl=document.getElementById('input')
let gmailEl=document.querySelector('.gmail')
let imageEl=document.querySelector('.images')
let signinEl=document.querySelector('signin')
let btnEl=document.querySelector('.btn')
let aboutEl=document.querySelector('.about')
let storeEl=document.querySelector('.store')
let icon3El=document.querySelector('icon3')

function speech(){
    
}
function store(){
    window.open('https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-GB','_self')
}
function about(){
window.open('https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header','_self')
}

function lucky(){
    let luckurl='https://doodles.google/';
    window.open(luckurl,'_self')
}


function signin(){
    let signinurl='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fimghp%3Fhl%3Den%26ogbl&ec=GAZAAg&hl=en&ifkv=AcMMx-fZdSJkfJeirbsQ88clP4Zbse4kPL1ZS0x7UYFx1DXT_tqlHGZCUG24njCAAe7Y1xyQHzNs&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1394222552%3A1731669652189215&ddm=1';
    window.open(signinurl,'_self')
}
function gmail(){
    let url='https://workspace.google.com/intl/en-US/gmail/';
    window.open(url,'_self')
};
function googleimages(){
    let imageurl='https://www.google.com/imghp?hl=en&ogbl';
    window.open(imageurl,'_self')
}



function result(event){
    if(inputEl.value.length >0 && event.key==="Enter"){
        let url='https://www.google.com/search?q='+inputEl.value;
        window.open(url,'_self')

        inputEl.value=""
    }
    
}
function result2(){
    if(inputEl.value.length >0){
        let url='https://www.google.com/search?q='+inputEl.value;
        window.open(url,'_self')
        inputEl.value=""
    }
    
}
inputEl.addEventListener('keydown',result)
searchbuttonEl.addEventListener('click',result2)
