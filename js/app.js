// JAVASCRIPT ES 6

// tt les fonctions d'animation ainsi runActions renvoie une promise alors 
// on est capable de savoir la fin d'animation ce qui rend nos animations controlable 
// ce script n'est pas parfait, ne contient ni test unitaire ni test de compatibilité navigateurs 
// Navigrateur que je possede dont le script marche parfaitement
    // mon iphone 7
    // Google chrome 64 
    // Opera 49 
    // Firefox 54


function fixHeight(){
    body_height = new DomObject("body").height();
    body_width = new DomObject("body").width();
    elements = new DomObject(".video, .video video, .video .map, .video #map");
    elements.css("width", body_width)
    elements.css("height", body_height*0.4)

}

// google map need a fixed height so i tried to do that using javascript
fixHeight();

window.addEventListener("load", ()=> {
    fixHeight();
    // html video tag has some problems on ios
    // i don't know so much about it, so i did that using javascript and hopefully worked :)
    // the animation run after the video start playing
    video = new DomObject("video").selections[0];
    video.loop = true;
    video.play()
    video.addEventListener("play", () =>{
        runActions();       
    })


})

// PS: je suis aussi disponible pour un stage a partir du 1er mai 


