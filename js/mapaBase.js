//Funciones AbrirMenuMapaBase() y CerrarMenuMapaBase()
/*
FUNCIONALIDAD:
  Estas funciones hacen aparecer y desaparecer, respectivamente, el menú de botones de cambio de mapa base.
*/
function AbrirMenuMapaBase(){
  $("#menuMapaBase").css({'display':'flex'});
  $("#menuMapaBase").on('click',CerrarMenuMapaBase);
  $("#btnCerrarMapaBase").css({'display':'flex'});
  $("#btnAbrirMapaBase").css({'display':'none'});
}
function CerrarMenuMapaBase(){
  $("#menuMapaBase").css({'display':'none'});
  $("#btnCerrarMapaBase").css({'display':'none'});
  $("#btnAbrirMapaBase").css({'display':'flex'});
}

//Función CambioMapaBase(capa)
/*
ENTRADAS:
  - capa: identificador único de la capa base que se quiere cargar.
FUNCIONALIDAD:
  Esta función:
  - crea la capa base necesaria (según la que se haya seleccionado en el botón del menú de capas base),
  - la añade al mapa reemplazando al mapa base anteriormente cargado,
  - cambia el color de fondo del mapa,
  - establece el nivel de zoom máximo del mapa acorde con cada mapa base.

  La configuración inicial de las capas de teselas vectoriales de la USIG se encuentra en el archivo map.js,
  dentro de la función CrearMapa(); ya que el primer mapa en aparecer es el 'vector_tiles_usig_light'.
  Dentro de la función CambioMapaBase(capa) sólamente se cambia el estilo para pasar del mapa base 'light' al 'dark' y viceversa.
  El resto de capas base sí se crean y configuran de manera completa dentro de esta función.
*/
function CambioMapaBase(capa){
  if (capa == 'vector_tiles_usig_light') {
    //Asignar el color de fondo:
    $("#map").css({'background':'#f7f6f6'});
    //Asignar el estilo a partir del archivo JSON:
    var style = 'js/estilosVT/light.json';
    fetch(style).then(function(response) {
      response.json().then(function(glStyle) {
        olms.applyStyle(capaBaseVTusig, glStyle, 'openmaptiles').then(function() {
          capaBaseVTusig.set('name','vector_tiles_usig_light');
          capaBaseVTusig.set('titulo_es','Vector Tiles uSIG light');
          capaBaseVTusig.setOpacity(0.8);
          map.getLayers().removeAt(0);
          map.getLayers().insertAt(0,capaBaseVTusig);
          map.getView().setMaxZoom(20);
        });
      });
    });
  } else if (capa == 'vector_tiles_usig_dark') {
    $("#map").css({'background':'#282828'});
    var style = 'js/estilosVT/dark.json';
    fetch(style).then(function(response) {
      response.json().then(function(glStyle) {
        olms.applyStyle(capaBaseVTusig, glStyle, 'openmaptiles').then(function() {
          capaBaseVTusig.set('name','vector_tiles_usig_dark');
          capaBaseVTusig.set('titulo_es','Vector Tiles uSIG dark');
          capaBaseVTusig.setOpacity(0.8);
          map.getLayers().removeAt(0);
          map.getLayers().insertAt(0,capaBaseVTusig);
          map.getView().setMaxZoom(20);
        });
      });
    });
  } else if (capa == 'osm_base_map') {
    $("#map").css({'background':'#ffffff'});
    var capaBaseOSM = new ol.layer.Tile({
      titulo_es: 'OSM Base Map',
      tipo: 'OGC:WMTS',
      queryable : false,
      source: new ol.source.OSM({
        attributions: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
      })
    });
    capaBaseOSM.set('name','osm_base_map');
    capaBaseOSM.setOpacity(0.8);
    map.getLayers().removeAt(0);
    map.getLayers().insertAt(0,capaBaseOSM);
    map.getView().setMaxZoom(20);
  } else if (capa == 'stamen_water_color') {
    $("#map").css({'background':'#ffffff'});
    var capaBaseStamen = new ol.layer.Tile({
      titulo_es: 'Stamen Water color',
      tipo: 'OGC:WMTS',
      queryable : false,
      baseLayer: true,
      visible: true,
      source: new ol.source.Stamen({
        layer: 'watercolor',
      })
    });
    capaBaseStamen.set('name','stamen_water_color');
    capaBaseStamen.setOpacity(0.8);
    map.getLayers().removeAt(0);
    map.getLayers().insertAt(0,capaBaseStamen);
    map.getView().setMaxZoom(17);
  } else if (capa == 'esri_world_imagery') {
    $("#map").css({'background':'#ffffff'});
    var capaBaseEsriWI = new ol.layer.Tile({
      titulo_es: 'Esri World Imagery',
      tipo: 'OGC:WMTS',
      queryable : false,
      source: new ol.source.XYZ({
        attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Imagery/MapServer">ArcGIS</a>',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'World_Imagery/MapServer/tile/{z}/{y}/{x}'
        })
    });
    capaBaseEsriWI.set('name','esri_world_imagery');
    capaBaseEsriWI.setOpacity(0.8);
    map.getLayers().removeAt(0);
    map.getLayers().insertAt(0,capaBaseEsriWI);
    map.getView().setMaxZoom(20);
  } else if (capa == 'esri_ocean_basemap') {
    $("#map").css({'background':'#ffffff'});
    var capaBaseEsriOB = new ol.layer.Tile({
      titulo_es: 'Esri Ocean Basemap',
      tipo: 'OGC:WMTS',
      queryable : false,
      source: new ol.source.XYZ({
        attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/Ocean_Basemap/MapServer">ArcGIS</a>',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
      })
    });
    capaBaseEsriOB.set('name','esri_ocean_basemap');
    capaBaseEsriOB.setOpacity(0.8);
    map.getLayers().removeAt(0);
    map.getLayers().insertAt(0,capaBaseEsriOB);
    map.getView().setMaxZoom(10);
  } else if (capa == 'esri_natgeo_world_map') {
    $("#map").css({'background':'#ffffff'});
    var capaBaseEsriNGWP = new ol.layer.Tile({
      titulo_es: 'Esri Nat Geo World Map',
      tipo: 'OGC:WMTS',
      queryable : false,
      source: new ol.source.XYZ({
        attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/NatGeo_World_Map/MapServer">ArcGIS</a>',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
      })
    });
    capaBaseEsriNGWP.set('name','esri_natgeo_world_map');
    capaBaseEsriNGWP.setOpacity(0.8);
    map.getLayers().removeAt(0);
    map.getLayers().insertAt(0,capaBaseEsriNGWP);
    map.getView().setMaxZoom(12);
  } else if (capa == 'esri_world_shaded_relief') {
    $("#map").css({'background':'#ffffff'});
    var capaBaseEsriWSR = new ol.layer.Tile({
      titulo_es: 'Esri World Shaded Relief',
      tipo: 'OGC:WMTS',
      queryable : false,
      source: new ol.source.XYZ({
      attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Shaded_Relief/MapServer">ArcGIS</a>',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
        'World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
      })
    });
    capaBaseEsriWSR.set('name','esri_world_shaded_relief');
    capaBaseEsriWSR.setOpacity(0.8);
    map.getLayers().removeAt(0);
    map.getLayers().insertAt(0,capaBaseEsriWSR);
    map.getView().setMaxZoom(13);
  }
}
