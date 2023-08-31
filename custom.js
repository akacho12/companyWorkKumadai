
// stroke set
let path = document.querySelector(".line-one");
let pathLength = path.getTotalLength();
let pathBox = document.querySelector('.program');

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

function calcDashoffset(scrollY, element, length){
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value
};

function lineScrollHandler(){
    const scrollY = window.scrollY + (window.innerHeight * 0.7)
    path.style.strokeDashoffset = calcDashoffset(scrollY, pathBox, pathLength)
};

window.addEventListener('scroll',lineScrollHandler)




// gsap
gsap.registerPlugin(ScrollTrigger);

let scrollSet = document.querySelectorAll(".programBk");
scrollSet.forEach((elem)=>{

    gsap.fromTo(elem, {
        y:100,
        opacity:0,
        border:2,
      },
      { scrollTrigger: elem, 
        y: 0,
        opacity:1,
        ease: 'expo', 
        duration:.8,
      }
      )
})



