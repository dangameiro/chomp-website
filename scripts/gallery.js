d3.json("photos.json").then(data => {
  for (var i = 0; i < data.length; i++) {
    d3.select("#table")
      .append("a")
      .attr("href", data[i].link)
      .append("img")
      .attr("src", data[i].photo)
      .attr("width", "225px")
      .attr("height", "150px");
  }
});