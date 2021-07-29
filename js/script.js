/* Get Footer Copyrights Year */
document.getElementById('year').textContent = new Date().getFullYear();

/* MapBox method */
new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-121.5850597683934, 38.7034065849573],
  zoom: 12,
});
