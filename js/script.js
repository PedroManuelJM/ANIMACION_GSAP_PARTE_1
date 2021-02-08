
 let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
 tl.from('#logo', {
     rotate:360
 }); // lapso de tiempo 

 tl.from('#imagen', {
    duration: 2,
    x: 100,
    backgroundColor: 'red',
    borderRadius: '20%',
    border: '5px solid blue',
    ease: 'linear'
 }, '+=2'); // lapso de tiempo 

 tl.from('#imagen1', {
    duration: 2,
    x: 100,
    backgroundColor: 'red',
    borderRadius: '20%',
    border: '5px solid blue',
    ease: 'elastic'
}, '+=2');

tl.from('#imagen2', {
    duration: 2,
    x: 100,
    backgroundColor: 'red',
    borderRadius: '20%',
    border: '5px solid blue',
    ease: 'bounce'
}, '+=2');

tl.from('#rotacion', {
    duration: 2,
    rotate:360, // rotación 
}, '+=2');


/* EJEMPLO CONSECUTIVO */
let t2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
t2.from('#primero', {
    duration: 2,
    rotate:360,
 }); 

t2.from( '.circle',{
    duration:.2, // tiempo de duracion 
    scale:0,
    stagger:.5
},'+=1'); // lapso de espera  para que luego continue 


/* EJEMPLO YOYO */
let t3 = gsap.timeline({ repeat: 4, yoyo:true }); // solo repitira 4 veces
t3.from('#yo', {
    duration: 2,
    rotate:360,
 }); 

t3.from( '.circle1',{
    duration:.2, // tiempo de duracion 
    scale:0,
    stagger:.5
}); // lapso de espera  para que luego continue 


