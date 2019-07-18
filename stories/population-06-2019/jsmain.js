"use strict";var popu_100={"Jammu-Kashmir":{ids:["Jammu-Kashmir","Himachal-Pradesh"],values:2},"Himachal-Pradesh":{ids:["Jammu-Kashmir","Himachal-Pradesh"],values:2},Punjab:{ids:["Punjab"],values:2},Chandigarh:{ids:["Chandigarh","Haryana"],values:2},Haryana:{ids:["Haryana","Chandigarh"],values:2},Uttarakhand:{ids:["Uttarakhand"],values:1},Rajasthan:{ids:["Rajasthan"],values:5},Delhi:{ids:["Delhi"],values:2},"Uttar-Pradesh":{ids:["Uttar-Pradesh"],values:16},Bihar:{ids:["Bihar"],values:8},Jharkhand:{ids:["Jharkhand"],values:2},Gujarat:{ids:["Gujarat","Dadra-Nagar-Haveli","Daman-Diu"],values:5},"Dadra-Nagar-Haveli":{ids:["Gujarat","Dadra-Nagar-Haveli","Daman-Diu"],values:5},"Daman-Diu":{ids:["Gujarat","Dadra-Nagar-Haveli","Daman-Diu"],values:5},"Madhya-Pradesh":{ids:["Madhya-Pradesh"],values:6},"West-Bengal":{ids:["West-Bengal","Sikkim"],values:8},Maharashtra:{ids:["Maharashtra"],values:10},Chhattisgarh:{ids:["Chhattisgarh"],values:2},Orissa:{ids:["Orissa"],values:4},Telangana:{ids:["Telangana"],values:3},"Andhra-Pradesh":{ids:["Andhra-Pradesh"],values:4},Karnataka:{ids:["Karnataka","Goa"],values:6},Goa:{ids:["Karnataka","Goa"],values:6},Kerala:{ids:["Kerala","Lakshadweep"],values:3},Lakshadweep:{ids:["Kerala","Lakshadweep"],values:3},"Tamil-Nadu":{ids:["Tamil-Nadu","Puducherry","Andaman-Nicobar"],values:6},Puducherry:{ids:["Tamil-Nadu","Puducherry","Andaman-Nicobar"],values:6},"Andaman-Nicobar":{ids:["Tamil-Nadu","Puducherry","Andaman-Nicobar"],values:6},Sikkim:{ids:["West-Bengal","Sikkim"],values:8},Tripura:{ids:["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],values:3},Nagaland:{ids:["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],values:3},Mizoram:{ids:["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],values:3},Meghalaya:{ids:["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],values:3},Manipur:{ids:["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],values:3},"Arunachal-Pradesh":{ids:["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],values:3},Assam:{ids:["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],values:3}},popu_trend=[[1960,450547679,5.906],[1961,459642165,5.902],[1962,469077190,5.894],[1963,478825608,5.88],[1964,488848135,5.859],[1965,499123324,5.83],[1966,509631500,5.794],[1967,520400576,5.751],[1968,531513824,5.702],[1969,543084336,5.648],[1970,555189792,5.587],[1971,567868018,5.519],[1972,581087256,5.444],[1973,594770134,5.363],[1974,608802600,5.278],[1975,623102897,5.192],[1976,637630087,5.108],[1977,652408776,5.029],[1978,667499806,4.956],[1979,682995354,4.889],[1980,698952844,4.827],[1981,715384993,4.766],[1982,732239504,4.703],[1983,749428958,4.636],[1984,766833410,4.563],[1985,784360008,4.484],[1986,801975244,4.399],[1987,819682102,4.311],[1988,837468930,4.222],[1989,855334678,4.132],[1990,873277798,4.045],[1991,891273209,3.959],[1992,909307016,3.877],[1993,927403860,3.799],[1994,945601831,3.723],[1995,963922588,3.651],[1996,982365243,3.582],[1997,1000900030,3.514],[1998,1019483581,3.446],[1999,1038058156,3.379],[2e3,1056575549,3.311],[2001,1075000085,3.243],[2002,1093317189,3.175],[2003,1111523144,3.107],[2004,1129623456,3.038],[2005,1147609927,2.969],[2006,1165486291,2.897],[2007,1183209472,2.823],[2008,1200669765,2.748],[2009,1217726215,2.673],[2010,1234281170,2.601],[2011,1250288729,2.534],[2012,1265782790,2.475],[2013,1280846129,2.425],[2014,1295604184,2.384],[2015,1310152403,2.352],[2016,1324509589,2.326],[2017,1338658835,2.304],[2018,1352617328,2.304]];window.onload=function(){section1(),section2(),section3()};
"use strict";function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function section1(){var n="res/india.geojson",c=new Deck({canvas:"deck-canvas",height:"700px",initialViewState:{latitude:20,longitude:82,zoom:4,bearing:5,pitch:60},controller:!0,layers:[]});function r(e,r){var t,o=[];if("POPULATION"===r)o=[new GeoJsonLayer((t={data:n,stroked:!0,filled:!0,extruded:e,opacity:1,wireframe:!0,getLineColor:[0,0,0,255]},_defineProperty(t,"stroked",!0),_defineProperty(t,"pickable",!0),_defineProperty(t,"getLineWidth",1e3),_defineProperty(t,"transitions",{getElevation:{duration:1e3,easing:d3.easeCubicInOut,enter:function(e){return e.properties.electors_2019/10}}}),_defineProperty(t,"getFillColor",function(e){return e.properties.electors_2019<15e5?[1,152,189,255]:e.properties.electors_2019<18e5?[73,227,206,255]:e.properties.electors_2019<21e5?[254,173,84,255]:[209,55,78,255]}),_defineProperty(t,"onHover",function(e){a(e.object,e.x,e.y)}),_defineProperty(t,"getElevation",function(e){return e.properties.electors_2019/10}),_defineProperty(t,"material",{ambient:.5,diffuse:.9,shininess:255,specularColor:[0,0,0]}),t))];else if("DENSITY"===r){var i;o=[new GeoJsonLayer((i={data:n,stroked:!0,filled:!0,extruded:e,opacity:1,wireframe:!0,getLineColor:[0,0,0,255]},_defineProperty(i,"stroked",!0),_defineProperty(i,"pickable",!0),_defineProperty(i,"getLineWidth",1e3),_defineProperty(i,"transitions",{getElevation:{duration:1e3,easing:d3.easeCubicInOut,enter:function(e){return e.properties.electors_2019/(e.properties.area+1e-8)/500}}}),_defineProperty(i,"getFillColor",function(e){var r=e.properties.electors_2019/e.properties.area;return r<2e6?[1,152,189,255]:r<3e6?[73,227,206,255]:r<4e6?[216,254,181,255]:r<8e6?[254,237,177,255]:r<25e6?[254,173,84,255]:[209,55,78,255]}),_defineProperty(i,"onHover",function(e){a(e.object,e.x,e.y)}),_defineProperty(i,"getElevation",function(e){return e.properties.electors_2019/(e.properties.area+1e-8)/500}),_defineProperty(i,"material",{ambient:.5,diffuse:.9,shininess:255,specularColor:[0,0,0]}),i))]}c.setProps({layers:o})}r(!0,"DENSITY"),Promise.all([d3.csv("./res/states.csv")]).then(function(e){});var t="DENSITY";function a(e,r,t){var o=document.getElementById("tooltip");e?(o.innerHTML='<p><span style="font-weight:800; letter-spacing: 3px; text-transform: uppercase">'+e.properties.st_name.toLocaleString()+"</span><br>"+e.properties.pc_name.toLocaleString()+" : "+e.properties.electors_2019.toLocaleString()+"</p>",o.style.display="block",o.style.left=r+"px",o.style.top=t+"px"):o.style.display="none"}$("#threedify").click(function(){r($("#threedify")[0].checked,t)}),$("#den-radio").click(function(){console.log("den radio clicked"),t="DENSITY",r(!$("#threedify")[0].checked,t),r($("#threedify")[0].checked,t)}),$("#popu-radio").click(function(){console.log("popu radio clicked"),t="POPULATION",r(!$("#threedify")[0].checked,t),r($("#threedify")[0].checked,t)}),appear({init:function(){console.log("dom is ready")},elements:function(){return[document.getElementById("deck-map")]},appear:function(e){r($("#threedify")[0].checked,t)},disappear:function(e){r(!$("#threedify")[0].checked,t)},bounds:200,reappear:!0}),console.log(c)}
"use strict";function choropleth2(t,r,e,a){d3.geoMercator().scale(1100).translate([-1310,780]);var l=d3.scaleSequential(d3.interpolateMagma),s=d3.scaleLinear().domain([1.6,3]).range([.2,1]);e.append("g").selectAll(".states-fill").data(t.features).enter().append("path").attr("class","states-fill").attr("id",function(t,e){return t.properties.st_name.replace(" & ","-").replace(" ","-")}).attr("d",a).style("fill",function(t){var e=t.properties.st_name.replace(" & ","-").replace(" ","-"),a=r.filter(function(t){return e===t.state})[0];return l(s(a.p2011_p1971.split(",").join("")))}).style("stroke","#000").style("stroke-width","0.15px");var n=e.append("g").style("transform","translate(300px,150px)"),o=n.append("defs").append("svg:linearGradient").attr("id","gradient").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");o.append("stop").attr("offset","0%").attr("stop-color",l(0)).attr("stop-opacity",1),o.append("stop").attr("offset","33%").attr("stop-color",l(.33)).attr("stop-opacity",1),o.append("stop").attr("offset","66%").attr("stop-color",l(.66)).attr("stop-opacity",1),o.append("stop").attr("offset","100%").attr("stop-color",l(1)).attr("stop-opacity",1),n.append("rect").attr("width",200).attr("height",10).style("fill","url(#gradient)").attr("stroke","#eee"),n.selectAll(".legend-vals").data([0,.33,.66,1]).enter().append("text").attr("x",function(t){return 200*t}).attr("y",30).attr("text-anchor","middle").attr("fill","#333").text(function(t){return(1.6+1.4*t).toFixed(1)+"x"}),e.append("text").attr("x",410).attr("y",75).attr("fill","#333").attr("class","plot-title").attr("text-anchor","middle").text("Population Multiplier"),e.append("text").attr("x",410).attr("y",110).attr("fill","#333").attr("class","plot-title").attr("text-anchor","middle").text("[2011 Census / 1971 Census]")}function choropleth(n,t,o,p){d3.geoMercator().scale(1100).translate([-1310,780]);o.append("g").selectAll(".states-fill").data(n.features).enter().append("path").attr("class","states-fill").attr("id",function(t,e){return t.properties.st_name.replace(" & ","-").replace(" ","-")}).attr("d",p).style("fill","#333").style("stroke","#777").style("stroke-width","0.1px"),o.append("text").attr("x",400).attr("y",125).attr("fill","#333").attr("class","plot-title").attr("text-anchor","middle").text("If India was made of"),o.append("text").attr("x",400).attr("y",160).attr("fill","#c0392b").attr("class","plot-title").attr("text-anchor","middle").text("100 people"),n.features.forEach(function(t){var a=[],e=t.properties.st_name.replace(" & ","-").replace(" ","-"),r=popu_100[e];r.ids.forEach(function(e){n.features.filter(function(t){return t.properties.st_name.replace(" & ","-").replace(" ","-")===e}).forEach(function(t){a.push(p.centroid(t))})});var l=o.append("g"),s=[a.reduce(function(t,e){return parseFloat(t)+parseFloat(e[0])},0)/a.length,a.reduce(function(t,e){return parseFloat(t)+parseFloat(e[1])},0)/a.length];clusterPopulation(l,s[0]-10,s[1]-10,r.values)});var r=d3.select("#tooltip2");d3.selectAll(".states-fill").on("mouseover",function(t){var e=$(this).attr("id"),a=popu_100[e];a.ids.forEach(function(t){d3.selectAll("#"+t).style("fill","#fff")}),r.transition().duration(200).style("opacity",.9),r.html("<span class='tooltip-title'>"+a.ids.join(",")+"</span><br><span class='tooltip-body'>"+a.values+" people</span>").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(t){var e=$(this).attr("id");popu_100[e].ids.forEach(function(t){d3.selectAll("#"+t).style("fill","#333")}),r.transition().duration(500).style("opacity",0)}),appear({init:function(){console.log("dom is ready")},elements:function(){return[document.getElementById("d3-map")]},appear:function(t){d3.selectAll(".perc-map-circles").transition().delay(200).duration(2e3).attr("r",5)},disappear:function(t){d3.selectAll(".perc-map-circles").transition().delay(200).duration(2e3).attr("r",0)},bounds:200,reappear:!0})}function clusterPopulation(t,e,a,r){for(var l=Math.ceil(r/4),s=e-32+16,n=a-16*l/2+16,o=0;o<r;o++){if(4*l-o-1<4&&r%4!=0)var p=s+o%4*15+15*(4-r%4)/2,i=n+16*parseInt(o/4);else p=s+o%4*15,i=n+16*parseInt(o/4);t.append("g").append("circle").attr("cx",p).attr("cy",i).attr("r",0).attr("class","perc-map-circles").attr("fill","#c0392b").style("pointer-events","none")}}function section2(){Promise.all([d3.json("./res/india.geojson"),d3.csv("./res/states.csv")]).then(function(t){var e=t[1];t=t[0];var a=d3.geoMercator().scale(1100).translate([-1310,780]),r=d3.geoPath().projection(a);choropleth(t,e,d3.select("#d3-map").append("svg").attr("width",600).attr("height",650),r)})}
"use strict";function bubbleStates(t,r,e,a,n,i){var l=r/n,s=10,u=d3.select(t).append("svg").attr("width",r).attr("height",e);u.selectAll(".state-names-density").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("text").attr("x",function(t,r){return r%n*l+l/2}).attr("y",function(t,r){return 100*parseInt(r/n)+10}).attr("text-anchor","middle").attr("class","state-names-density").text(function(t){return t.state.replace("-"," ")});var o=u.selectAll(".state-g-density").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("g").style("transform",function(t,r){return"translate("+(r%n*l+20)+"px,"+(100*parseInt(r/n)+20)+"px)"});o.selectAll(".balls-white").data(function(t){return Array.from(Array(100)).map(function(t){return 0})}).enter().append("circle").attr("cx",function(t,r){return(l-40)/s*(r%s)+5}).attr("cy",function(t,r){return(l-40)/s*parseInt(r/s)}).attr("r",2.5).attr("fill","#aaa"),o.selectAll(".balls-filled").data(function(t){var r=Math.round(parseInt(t[i].split(",").join(""))/10);return Array.from(Array(r)).map(function(t){return 0})}).enter().append("circle").attr("cx",function(t,r){return(l-40)/s*(r%s)+5}).attr("cy",function(t,r){return(l-40)/s*parseInt(r/s)}).attr("r",2.5).attr("fill","#c0392b")}function bubbleStatesVertical(t,r,e,a){var n=e/10,i=r/3,l=d3.select(t).append("svg").attr("width",r).attr("height",e);l.selectAll(".state-names-density").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("text").attr("x",function(t,r){return parseInt(r/10)*i+100}).attr("y",function(t,r){return r%10*n+10}).attr("text-anchor","end").attr("class","state-names-density").text(function(t){return t.state.replace("-"," ")}),l.selectAll(".state-g-density").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("g").style("transform",function(t,r){return"translate("+(parseInt(r/10)*i+120)+"px,"+(parseInt(r%10)*n+5)+"px)"}).selectAll(".balls-filled").data(function(t){var r=Math.abs(Math.round(parseInt(t.population.split(",").join(""))*(1e3-t.sexratio)/1e8));return Array.from(Array(r)).map(function(t){return 0})}).enter().append("circle").attr("cx",function(t,r){return r%25*5}).attr("cy",function(t,r){return 5*parseInt(r/25)}).attr("r",2).attr("fill","#c0392b")}function eitherSide(t,e,r,a,n,i){var l=a.filter(function(t){return"s"===t["s/u"]}).sort(function(t,r){return parseInt(r.rural.split(",").join(""))/parseInt(r.population.split(",").join(""))*10-parseInt(t.rural.split(",").join(""))/parseInt(t.population.split(",").join(""))*10}).map(function(t){return t.state}),s=a.filter(function(t){return"s"===t["s/u"]}).map(function(t){return t.state}),u=r/a.length+2,o=(document.importNode(n.documentElement,!0),document.importNode(i.documentElement,!0),d3.select(t).append("svg").attr("width",e).attr("height",r));o.selectAll(".state-names-density").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("text").attr("x",function(t,r){return e/2}).attr("y",function(t,r){return r*u+20}).attr("text-anchor","middle").attr("class","state-names-rurban").text(function(t){return t.state.replace("-"," ")});var c=o.selectAll(".state-g-density-left").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("g").attr("class","state-g-density-left").style("transform",function(t,r){return"translate("+(e/2-300)+"px,"+(r*u+15)+"px)"}),d=o.selectAll(".state-g-density-right").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("g").attr("class","state-g-density-right").style("transform",function(t,r){return"translate("+(e/2+30)+"px,"+(r*u+15)+"px)"});c.selectAll(".balls-rural").data(function(t){return Array.from(Array(10)).map(function(t){return 0})}).enter().append("circle").attr("cx",function(t,r){return 230-23*r}).attr("cy",function(t,r){return 0}).attr("r",5).attr("fill","#eee"),d.selectAll(".balls-urban").data(function(t){return Array.from(Array(10)).map(function(t){return 0})}).enter().append("circle").attr("cx",function(t,r){return 23*r+30}).attr("cy",function(t,r){return 0}).attr("r",5).attr("fill","#eee"),c.selectAll(".balls-rural-svg").data(function(t){var r=Math.round(parseInt(t.rural.split(",").join(""))/parseInt(t.population.split(",").join(""))*10);return Array.from(Array(r)).map(function(t){return 0})}).enter().append("circle").attr("cx",function(t,r){return 230-23*r}).attr("cy",function(t,r){return 0}).attr("r",5).attr("fill","#16a085"),d.selectAll(".balls-urban-svg").data(function(t){var r=10-Math.round(parseInt(t.rural.split(",").join(""))/parseInt(t.population.split(",").join(""))*10);return Array.from(Array(r)).map(function(t){return 0})}).enter().append("circle").attr("cx",function(t,r){return 23*r+30}).attr("cy",function(t,r){return 0}).attr("r",5).attr("fill","#2980b9"),appear({init:function(){console.log("dom is ready")},elements:function(){return[document.getElementById("d3-states-rurban")]},appear:function(t){console.log("rurban"),d3.selectAll(".state-names-rurban").transition().delay(1e3).duration(2e3).attr("y",function(t,r){return l.indexOf(s[r])*u+20}),d3.selectAll(".state-g-density-left").transition().delay(1e3).duration(2e3).style("transform",function(t,r){return"translate("+(e/2-300)+"px,"+(l.indexOf(s[r])*u+15)+"px)"}),d3.selectAll(".state-g-density-right").transition().delay(1e3).duration(2e3).style("transform",function(t,r){return"translate("+(e/2+30)+"px,"+(l.indexOf(s[r])*u+15)+"px)"})},disappear:function(t){d3.selectAll(".state-names-rurban").transition().delay(1e3).duration(2e3).attr("y",function(t,r){return r*u+20}),d3.selectAll(".state-g-density-left").transition().delay(1e3).duration(2e3).style("transform",function(t,r){return"translate("+(e/2-300)+"px,"+(r*u+15)+"px)"}),d3.selectAll(".state-g-density-right").transition().delay(1e3).duration(2e3).style("transform",function(t,r){return"translate("+(e/2+30)+"px,"+(r*u+15)+"px)"})},bounds:-200,reappear:!0})}function areaStates(t,r,e,a,n,i){var l=r/n,s=d3.select(t).append("svg").attr("width",r).attr("height",e);s.selectAll(".state-names-density").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("text").attr("x",function(t,r){return r%n*l+l/2}).attr("y",function(t,r){return 100*parseInt(r/n)+10}).attr("text-anchor","middle").attr("class","state-names-density").text(function(t){return t.state.replace("-"," ")});var u=d3.scaleLinear().domain([0,8]).range([0,80]),o=d3.scaleLinear().domain([0,35]).range([40,0]),c=d3.scaleLinear().domain([0,35]).range([41,81]),d=s.selectAll(".state-g-density").data(a.filter(function(t){return"s"===t["s/u"]})).enter().append("g").style("transform",function(t,r){return"translate("+(r%n*l+20)+"px,"+(100*parseInt(r/n)+10)+"px)"}),p=d3.area().x(function(t,r){return u(r)}).y0(40).y1(function(t,r){return o(t)}),f=d3.area().x(function(t,r){return u(r)}).y0(41).y1(function(t,r){return c(t)});d3.line().x(function(t){return x(t.date)}).y(function(t){return y(t.close)});d.selectAll(".area-up-rural").data(function(t){return[t.age_female_rural.split(",")]}).enter().append("path").attr("d",p).attr("opacity",.8).attr("fill","#c0392b"),d.selectAll(".area-up-urban").data(function(t){return[t.age_female_urban.split(",")]}).enter().append("path").attr("d",p).attr("opacity",.5).attr("fill","#f39c12"),d.selectAll(".area-up-rural").data(function(t){return[t.age_male_rural.split(",")]}).enter().append("path").attr("d",f).attr("opacity",.8).attr("fill","#27ae60"),d.selectAll(".area-up-urban").data(function(t){return[t.age_male_urban.split(",")]}).enter().append("path").attr("d",f).attr("opacity",.5).attr("fill","#2980b9"),d.append("circle").attr("cx",u(5)).attr("cy",o(20)).attr("r",8).attr("fill","none").attr("stroke","#eee").attr("stroke-width",2),d.append("circle").attr("cx",u(7.1)).attr("cy",o(20)).attr("r",8).attr("fill","none").attr("stroke","#eee").attr("stroke-width",2),d.append("circle").attr("cx",u(5)).attr("cy",c(20)).attr("r",8).attr("fill","none").attr("stroke","#eee").attr("stroke-width",2),d.append("circle").attr("cx",u(7.1)).attr("cy",c(20)).attr("r",8).attr("fill","none").attr("stroke","#eee").attr("stroke-width",2),d.append("text").attr("x",u(5)).attr("y",o(17)).attr("text-anchor","middle").attr("class","age-text").attr("fill","#c0392b").text(function(t){return Math.round(t.avg_female_rural)}),d.append("text").attr("x",u(7.1)).attr("y",o(17)).attr("text-anchor","middle").attr("class","age-text").attr("fill","#f39c12").text(function(t){return Math.round(t.avg_female_urban)}),d.append("text").attr("x",u(5)).attr("y",c(23)).attr("text-anchor","middle").attr("class","age-text").attr("fill","#27ae60").text(function(t){return Math.round(t.avg_male_rural)}),d.append("text").attr("x",u(7.1)).attr("y",c(23)).attr("text-anchor","middle").attr("class","age-text").attr("fill","#2980b9").text(function(t){return Math.round(t.avg_male_urban)})}function linePlots(t,r,e){var a=d3.select(t).append("svg").attr("width",r).attr("height",e);a.append("rect").attr("x",0).attr("y",0).attr("width",r).attr("height",e).attr("fill","#eee");var n=d3.scaleLinear().domain([1960,2018]).range([100,r-100]),i=d3.scaleLinear().domain([450547679,1352617328]).range([e-50,50]),l=d3.scaleLinear().domain([2.3,5.9]).range([e-50,50]),s=d3.line().x(function(t){return n(t[0])}).y(function(t){return i(i.domain()[0])}).curve(d3.curveMonotoneX),u=d3.line().x(function(t){return n(t[0])}).y(function(t){return l(i.domain()[0])}).curve(d3.curveMonotoneX),o=d3.line().x(function(t){return n(t[0])}).y(function(t){return i(t[1])}).curve(d3.curveMonotoneX),c=d3.line().x(function(t){return n(t[0])}).y(function(t){return l(t[2])}).curve(d3.curveMonotoneX);a.append("g").attr("class","x axis").attr("transform","translate(0,"+(e-50)+")").call(d3.axisBottom(n).tickFormat(d3.format("d")).tickSize(100-e)),a.append("g").attr("class","y axis").attr("transform","translate(100,0)").call(d3.axisLeft(i).tickSize(200-r).tickFormat(function(t){return t/1e6+" Mil"})),a.append("g").attr("class","y axis").attr("transform","translate("+(r-100)+",0)").call(d3.axisRight(l).ticks(20)),a.append("path").datum(popu_trend).attr("class","line").attr("id","line1").attr("d",s).attr("fill","none").attr("stroke","#e74c3c").attr("stroke-width",3),a.append("path").datum(popu_trend).attr("class","line").attr("id","line2").attr("d",u).attr("fill","none").attr("stroke","#3498db").attr("stroke-width",3).attr("stroke-dasharray","5 2"),a.append("line").attr("x1",150).attr("y1",20).attr("x2",180).attr("y2",20).attr("stroke","#e74c3c").attr("stroke-width",3),a.append("line").attr("x1",450).attr("y1",20).attr("x2",480).attr("y2",20).attr("stroke","#3498db").attr("stroke-width",3).attr("stroke-dasharray","5 2"),a.append("text").attr("x",190).attr("y",25).attr("fill","#333").text("Population"),a.append("text").attr("x",490).attr("y",25).attr("fill","#333").text("Fertility Rate"),appear({init:function(){console.log("dom is ready")},elements:function(){return[document.getElementById("d3-states-1")]},appear:function(t){d3.select("#line1").transition().delay(200).duration(500).attr("d",o),d3.select("#line2").transition().delay(200).duration(500).attr("d",c)},disappear:function(t){d3.select("#line1").transition().duration(1e3).attr("d",s),d3.select("#line2").transition().duration(1e3).attr("d",s)},bounds:200,reappear:!0})}function section3(){Promise.all([d3.csv("./res/states.csv"),d3.xml("./res/field.svg"),d3.xml("./res/building.svg")]).then(function(t){var r=t[1],e=t[2];bubbleStates("#d3-states",800,400,t=t[0],8,"sexratio"),bubbleStatesVertical("#d3-states",700,400,t),eitherSide("#d3-states-rurban",700,850,t,r,e),areaStates("#d3-states",800,400,t,8,"sexratio"),linePlots("#d3-states-1",800,400)})}