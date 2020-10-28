// movement animation to happen
const card  =document.querySelector('.card')
const container  =document.querySelector('.container');
// animate items
// items
const title  =document.querySelector('.title')
const sneaker  =document.querySelector('.sneaker img')
const purchase  =document.querySelector('.sizes button')
const info  =document.querySelector('.info ,h3, h4')
const sizes  =document.querySelector('.sizes ')





// moving animation event 
container.addEventListener('mousemove',(run)=>{
    let xaxis=(window.innerWidth/ 2 - run.pageX) /25;   
    let yaxis=(window.innerHeight/ 2 - run.pageY) /25;   
    card.style.transform=`rotateY(${xaxis}deg) rotateX(${yaxis}deg)`
    card1.style.transform=`rotateY(${xaxis}deg) rotateX(${yaxis}deg)`
    
});


  
    


// animation off when mouse enters the area
container.addEventListener('mouseenter',(run)=>{
    card.style.transition='none'
    // card1.style.transition='none'

    // popout
    sneaker.style.transform='translateZ(150px) rotatez(45deg)';
    title.style.transform='translateZ(130px)';
    sizes.style.transform='translateZ(90px) ';
    info.style.transform='translateZ(80px)';
    purchase.style.transform='translateZ(70px)';
})




// animation when leave to make it normal
container.addEventListener('mouseleave', (run)=>{
    card.style.transition='0.9s all ease';
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    


    // POPOUT
    title.style.transform='translateZ(0px)';
    sneaker.style.transform='translateZ(0px) rotatez(0deg)'
    sizes.style.transform='translateZ(0px) '
    info.style.transform='translateZ(0px) ';
    purchase.style.transform='translateZ(0px)';
})
  
