d3.json("photos.json").then(data => {
  var photos = [];
  var links = [];
  data.forEach(d => {
    photos.push(d.photo);
    links.push(d.link);
  });
  var rand = Math.floor(Math.random() * photos.length);
  document.getElementById("im2").setAttribute("src", photos[rand]);
  document.getElementById("im2link").setAttribute("href", links[rand]);
  photos.splice(rand, 1);
  links.splice(rand, 1);
  rand = Math.floor(Math.random() * photos.length);
  document.getElementById("im3").setAttribute("src", photos[rand]);
  document.getElementById("im3link").setAttribute("href", links[rand]);
});