// permet de rendre un tableau unidimensionnel
// exemple [[1,2], [3]] => [1, 2, 3]
Array.prototype.flatten = function() {
    return this.reduce(function(prev, cur) {
      var more = [].concat(cur).some(Array.isArray);
      return prev.concat(more ? cur.flatten() : cur);
    },[]);
};


// sleep: returns promise 
// ms: en miliseconde
// permet d'attendre avant l'exécution de prochain instruction 
function Sleep(ms){
  return new Promise((resolve) => setInterval(resolve, ms));
}

// setupMap callback pour google map
// permet de dessiner un map 
function setupMap(e){
    
  var coords = {lat: 48.8957235, lng: 2.2494012};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: coords,
    mapTypeId	: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: "Opticien Krys",
    pixelOffset: new google.maps.Size(100,140)
  });
}