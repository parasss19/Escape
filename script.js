// toggle nav menu (we toggle 'hidden' property for entire nav-dialog div)
const navDialog = document.getElementById("nav-dialog")
function handlemenu(){
    navDialog.classList.toggle('hidden');
}



//****************  Companies card effect ******************
//select lines to apply eventlistener
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const line4 = document.getElementById('line4');  //it is used for slider after bento cards

//Note- eventlisteners are heavy for websites so we want only apply eventlisterners when elem is obervable so for this we make intersectinobserver which observe when elem is visible to user or not

const initialTranslateLTR = -48*4;    //for line 1 and 3
const initialTranslateRTL = 36*4;     //for line 2

//Function which apply eventlisterners only when elem are observable
function observerFunc(element, isLTR, speed){
    //eventlistener(here we translate our cards in x-axis)
    function scrollHandler() {
        //logic A
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;   //from this line we get small value which we will user for translating cards in x-axis
        element.style.transform = `translateX(${isLTR ? translateX+initialTranslateLTR : -(translateX+initialTranslateRTL)}px)`;
        
        //logic B
        // const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;   //from this line we get small value which we will user for translating cards in x-axis
        // let totalTranslate = 0;
        // if(isLTR){
        //   totalTranslate = translateX + initialTranslateLTR;
        // }else{
        //   totalTranslate = -(translateX + initialTranslateRTL);
        // }
        // element.style.transform = `translateX(${totalTranslate}px)`;
    }

    //Creating intersection observer 
    const intersectionOberser = new IntersectionObserver((entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }
    })
    intersectionOberser.observe(element);  
}
//Calling out setupIntersectionObserver func
observerFunc(line1, true, 0.15);   //here isLTR = true it means cards moves L to R
observerFunc(line2, false, 0.15);  //here isLTR = false it means cards moves R to L
observerFunc(line3, true, 0.15);

observerFunc(line4, true, 0.55);