
//function to instantiate the Leaflet map
function createMap(){
    //create the map
  

    
var map = L.map('mapid', {
    center: [20, 0],
    zoomControl: false
}).setView([46.583389, -90.879198], 14);

L.control.zoom({
    position:'bottomleft'
}).addTo(map);

    //add Mapbox base tilelayer
    var baselayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 22, // setting min amd max level of zoom
        minZoom: 2,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ'
    }).addTo(map);

    var baselayer3 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 22, // setting min amd max level of zoom
        minZoom: 2,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ'
    });


var baselayer2 = L.tileLayer(
    'https://api.mapbox.com/styles/v1/nishidilipsontakke/cjxunvhtx9frw1cqevl3mqemo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ', {
        tileSize: 512,
        minZoom: 13,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ',
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

var leftLayer=[baselayer, baselayer3];

    L.control.sideBySide(leftLayer,baselayer2).addTo(map);

    var myStyle = {
        "color": "#ff7800",
        "weight": 1,
        "opacity": 0.65
    };

    var myStyle2 = {
        "color": "#dd1c77",
        "weight": 1,
        "opacity": 0.65
    };


    var fourinchstyle={
        "color":"#de2d26",
        "weight": 1,
        "opacity": 0.65
    };
    var fourrain={
        "color":"#0c2c84",
        "weight": 1,
        "opacity": 0.65
    };
    var sicinchstyle={
        "color":"#fd8d3c",
        "weight": 1,
        "opacity": 0.9
    };

    var sixrain={
        "color":"#41b6c4",
        "weight": 1,
        "opacity": 0.65
    };
   
    var sevcinchstyle={
        "color":"#993404",
        "weight": 1,
        "opacity": 0.65
    };

    var sevenrain={
        "color":"#6baed6",
        "weight": 1,
        "opacity": 0.65
    };

    var geojsonLayer = new L.GeoJSON.AJAX("data/Ashland_Buildings_unporj.geojson",{
        style:myStyle});

   

    var building_touching_BS = new L.GeoJSON.AJAX("data/building_touch_bs.geojson",{
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<h5>Affected Buildings</h5><p>Value of the building:'+feature.properties.buildin_96+'</p>'+'<p>Parcel ID: '+feature.properties.buildin_99+'</p>');
          },
        style:myStyle2});
    console.log(geojsonLayer);

    var bsFill= new L.GeoJSON.AJAX("data/bs_poly_dissolved_upproj.geojson")
    function getColor(d) {
        return d <= 80.328865   ? '#bd0026' :
               d <= 192.193848  ? '#f03b20' :
               d <= 464.456635  ? '#fd8d3c' :
               d <= 1310.37793  ? '#fecc5c' :
               d <= 3138.465332 ? '#ffffb2':
                          '#FFEDA0';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.FillUp),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity:1
        };
    }
    /*var bsFill=  new L.GeoJSON.AJAX("data/bs_poly_dissolved_upproj.geojson", {style: style}).addTo(map);*/
    var overlayMaps = {
        "Basemap grey":baselayer,
        "Satellite basemap":baselayer3
    
    };
 
    var tenRainfallEvent= new L.LayerGroup();

    var fourinch = new L.GeoJSON.AJAX("data/1in10yr_4ichrain80per.geojson",{
        style:fourrain}).addTo(tenRainfallEvent);
    var buildingFourInch=new L.GeoJSON.AJAX("data/building_affected_4inch.geojson",{
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p><b>Affected Buildings</b></p><p>Value of the building: $'+feature.properties.value_of_b+'</p>'+'<p>Parcel ID: '+feature.properties.PARCELID+'</p>'+'<p>Property Type:'+feature.properties.Class+'</p>'+'<p> Year of Built:'+feature.properties.Year_Built+'</p>'+'<p>Total Acre:'+feature.properties.Total_Acre+'</p>'+'<p> House Style:'+feature.properties.Style+'</p>'+'<p>Story:'+feature.properties.Story+'</p>');
              }, style:fourinchstyle}).addTo(tenRainfallEvent);

    var fiftyRainfallEvent= new L.LayerGroup();

    var sixinch = new L.GeoJSON.AJAX("data/1in50yr_6ichrain50.geojson",{
        style:sixrain}).addTo(fiftyRainfallEvent);
    var buildingsixInch=new L.GeoJSON.AJAX("data/building_affected_6ich.geojson",{ onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>Affected Buildings</b></p><p>Value of the building:'+feature.properties.value_of_b+'</p>'+'<p>Parcel ID: '+feature.properties.PARCELID+'</p>'+'<p>Property Type:'+feature.properties.Class+'</p>'+'<p> Year of Built:'+feature.properties.Year_Built+'</p>'+'<p>Total Acre:'+feature.properties.Total_Acre+'</p>'+'<p> House Style:'+feature.properties.Style+'</p>'+'<p>Story:'+feature.properties.Story+'</p>');
      }, style: sicinchstyle}).addTo(fiftyRainfallEvent);

    var HunRainfallEvent= new L.LayerGroup();

    var Seveninch = new L.GeoJSON.AJAX("data/1in100yr_7ichrain30.geojson",{style:sevenrain}).addTo(HunRainfallEvent);
    var buildingSevenInch=new L.GeoJSON.AJAX("data/building_affected_7ich.geojson",{ onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>Affected Buildings</b></p><p>Value of the building:'+feature.properties.value_of_b+'</p>'+'<p>Parcel ID: '+feature.properties.PARCELID+'</p>'+'<p>Property Type:'+feature.properties.Class+'</p>'+'<p> Year of Built:'+feature.properties.Year_Built+'</p>'+'<p>Total Acre:'+feature.properties.Total_Acre+'</p>'+'<p> House Style:'+feature.properties.Style+'</p>'+'<p>Story:'+feature.properties.Story+'</p>');
      },style:sevcinchstyle}).addTo(HunRainfallEvent);


    var bound= new L.LayerGroup();
     var cityBound=new L.GeoJSON.AJAX("data/cityofashlandboundary.geojson").addTo(bound);

    var groupedOverlays= {
        "City Boundary":{
            "Study Area": cityBound
        },
        "One in Ten year Rainfall Event:4 inch rainfall": {
        "Affected Buildings": buildingFourInch,
        "Rain Fill up ": fourinch
    },
    "One in Fifty year Rainfall Event: 6 inch rainfall": {
        "Affected Buildings": buildingsixInch,
        "Rain Fill up ": sixinch
    },
    "One in Hundered year Rainfall Event: 7 inch rainfall": {
        "Affected Buildings": buildingSevenInch,
        "Rain Fill up ": Seveninch
    }
};

   

L.control.groupedLayers(overlayMaps,groupedOverlays,{position:'topleft'}).addTo(map);
    $(".leaflet-control-layers").addClass("leaflet-control-layers-expanded");
    //geojsonLayer.addTo(map); 
    //building_touching_BS.addTo(map);

   


   
};

$('.carousel').carousel({
    interval: false
}); 

$(document).ready(function(){
    createMap();
});
/*$(document).ready(createMap); */