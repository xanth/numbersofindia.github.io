"use strict";window.onload=function(){section0(),section3()};
"use strict";function section0(){console.log(screen);var i=document.getElementById("title-canvas"),n=i.getContext("2d");i.height=window.innerHeight,i.width=window.innerWidth;var l="1947";l=l.split("");for(var t=i.width/10,o=[],e=0;e<t;e++)o[e]=1;setInterval(function(){n.fillStyle="rgba(0, 0, 0, 0.05)",n.fillRect(0,0,i.width,i.height),n.fillStyle="#eee",n.font="10px arial";for(var t=0;t<o.length;t++){var e=l[Math.floor(Math.random()*l.length)];n.fillText(e,10*t,10*o[t]),10*o[t]>i.height&&.975<Math.random()&&(o[t]=0),o[t]++}},50)}
"use strict";function section1(){new Deck({canvas:"deck-canvas",width:"100%",height:"700px",initialViewState:{latitude:20,longitude:78,zoom:4,bearing:0,pitch:60},controller:!0,layers:[new GeoJsonLayer({data:"res/india_pc_2019_simplified.geojson",stroked:!0,filled:!0,lineWidthMinPixels:.4,opacity:.4,getLineColor:[255,255,255],getFillColor:[22,168,175,255]})]})}
"use strict";function section2(){var t=L.map("leaflet-map",{center:[23.2493,77.5512],zoom:6});L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(t)}
"use strict";function section3(){$(".filter-buttons").click(function(){$(".filter-buttons").removeClass("active-button"),$(this).addClass("active-button")}),$.getJSON("./data/stories.json",function(a){$.each(a,function(a,t){var c=$("<a class='card col-md-3 col-lg-3 col-sm-4 col-xs-12' href='"+t.link+"' target='_blank'></a>"),s="mix",i=$("<div class='tag-bar-container'></div>");$.each(t.tags,function(a,t){console.log(t),s=s+" "+t,i.append('<div class="tag-bar tag-bar-'+t+'"></div>')});var n=$("<div class='card-body'></div>"),d=$("<p class='card-title'></p>").text(t.title),e=$("<p class='card-description'></p>").text(t.description),o=$("<img src='"+t.img+"' class='col-md-12 col-xs-12 col-sm-12 col-lg-12'></img>"),l=$("<p class='card-author'></p>").text("By "+t.author),p=$("<p class='card-date'></p>").text(t.date),r=$("<div class='card-footer'></div>");r.append(l).append(p),n.append(d).append(e).append(i).append(r),c.addClass(s).append(o).append(n),$("#cards-container").append(c)});mixitup(".container",{animation:{duration:300}})})}