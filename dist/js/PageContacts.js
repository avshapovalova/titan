const PageContacts = {
  init: function(coords) {
    this.initMap(coords)
  },

  initMap: function (coords) {
    ymaps.ready(function(){
      const map = new ymaps.Map("map", {
        center: coords,
        zoom: 16,
        controls: ['zoomControl'],
      })
      const pin = new ymaps.Placemark(coords)
      map.geoObjects.add(pin)
    })
  }
}
