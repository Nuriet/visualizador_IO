//ARRAY DE CONTENIDOS DEL MENÚ DE TEMÁTICAS EN EL MENÚ LATERAL izquierdo
//Para añadir nuevo contenido, ver el manual creado. Ahí se explican las reglas de composición de los objetos y sus campos.
var arrayObjetosTematicas = [
  {
    "id": "arq",
    "nombre": "Arqueología",
    "nombre_en": "Archeology",
    "color_fondo": "#FFB299",
    "color_letra_borde": "#DF3A2C",
    "contenido": [
      {
        "nombre": "Carbono 14",
        "nombre_en": "Radiocarbon data",
        "tipo": "wms",
        "ruta": "http://www.idearqueologia.org/idearq/wms?",
        "id": "idearq_c14"
      },{
        "nombre": "Arte rupestre levantino",
        "nombre_en": "Levantine cave art sets",
        "tipo": "wms",
        "ruta": "http://www.idearqueologia.org/idearq/wms?",
        "id": "idearq_cprl"
      },{
        "nombre": "Isótopos",
        "nombre_en": "Isotopes",
        "tipo": "wms",
        "ruta": "http://www.idearqueologia.org/idearq/wms?",
        "id": "idearq_dimp"
      },{
        "nombre": "Yacimientos arqueológicos",
        "nombre_en": "Archeological sites",
        "tipo": "wms",
        "ruta": "http://www.idearqueologia.org/idearq/wms?",
        "id": "idearq_base"
      }
    ]
  }, {
    "id": "car",
    "nombre": "Cartografía histórica",
    "nombre_en": "Historical cartography",
    "color_fondo": "#FFFF99",
    "color_letra_borde": "#F3AB00",
    "contenido": [
      {
        "nombre": "Madrid",
        "nombre_en": "Madrid",
        "id": "car_mad",
        "capas": [
          {
            "nombre": "Red de transporte en Madrid (1990)",
            "nombre_en": "Transport network in Madrid (1990)",
            "tipo": "geojson",
            "ruta": "./datos/madrid/red_transporte.geojson",
            "id": "car_mad_tra",
            "titulo": "Red de transporte en Madrid (1900)",
            "abstract": "Abstract a completar MADRID 1900",
            "tipo_leyenda": "imagen",
            "ruta_descarga": "https://seiyria.com/bootstrap-slider/",
            "queryable": true
          },
          {
            "nombre": "Equipamiento urbano en Madrid (1900)",
            "nombre_en": "Urban equipment in Madrid (1900)",
            "tipo": "geojson",
            "ruta": "./datos/madrid/equipamiento.geojson",
            "id": "car_mad_equ",
            "titulo": "Equipamiento urbano en Madrid (1900)",
            "abstract": "Abstract a completar MADRID 1900",
            "tipo_leyenda": "imagen",
            "ruta_descarga": "",
            "queryable": true
          },
          {
            "nombre": "Estaciones de ferrocarril/tranvía en Madrid (1900)",
            "nombre_en": "Railway/tram stations in Madrid (1900)",
            "tipo": "geojson",
            "ruta": "./datos/madrid/estaciones.geojson",
            "id": "car_mad_fer",
            "titulo": "Estaciones en Madrid (1900)",
            "abstract": "Abstract a completar MADRID 1900",
            "tipo_leyenda": "imagen",
            "ruta_descarga": "",
            "queryable": true
          },
          {
            "nombre": "Ornamentación en Madrid (1900)",
            "nombre_en": "Ornamentation in Madrid (1900)",
            "tipo": "geojson",
            "ruta": "./datos/madrid/ornamentacion.geojson",
            "id": "car_mad_orn",
            "titulo": "Ornamentación en Madrid (1900)",
            "abstract": "Abstract a completar MADRID 1900",
            "tipo_leyenda": "imagen",
            "ruta_descarga": "",
            "queryable": true
          },
          {
            "nombre": "Parques en Madrid (1900)",
            "nombre_en": "Parks in Madrid (1900)",
            "tipo": "geojson",
            "ruta": "./datos/madrid/parques.geojson",
            "id": "car_mad_par",
            "titulo": "Parques en Madrid (1900)",
            "abstract": "Abstract a completar MADRID 1900",
            "tipo_leyenda": "imagen",
            "ruta_descarga": "",
            "queryable": true
          },
          {
            "nombre": "Puentes en Madrid (1900)",
            "nombre_en": "Bridges in Madrid (1900)",
            "tipo": "geojson",
            "ruta": "./datos/madrid/puentes.geojson",
            "id": "car_mad_pue",
            "titulo": "Puentes en Madrid (1900)",
            "abstract": "Abstract a completar MADRID 1900",
            "tipo_leyenda": "imagen",
            "ruta_descarga": "",
            "queryable": true
          },
          {
            "nombre": "Barrios y distritos en Madrid (1900)",
            "nombre_en": "Neighbourhoods and districts in Madrid (1900)",
            "tipo": "geojson",
            "ruta": "./datos/madrid/barrios_distritos.geojson",
            "id": "car_mad_bar",
            "titulo": "Barrios y distritos en Madrid (1900)",
            "abstract": "Abstract a completar MADRID 1900",
            "tipo_leyenda": "imagen",
            "ruta_descarga": "",
            "queryable": true
          }
        ]
      },
      {
        "nombre": "Plano de Facundo Cañada (1900)",
        "nombre_en": "Map of Facundo Cañada (1900)",
        "tipo": "wmts",
        "ruta": "http://www.ign.es/wmts/planos?",
        "id": "FacundoMadrid"
      }
    ]
  }, {
    "id": "hic",
    "nombre": "Historia de la ciencia",
    "nombre_en": "History of Science",
    "color_fondo": "#C0F9F9",
    "color_letra_borde": "#00ADAD",
    "contenido": [
      {
        "nombre": "Movilidad de profesores JAE - Ciencias naturales y de la salud",
        "nombre_en": "Mobility of college professors granted by JAE - Natural Science",
        "tipo": "geojson",
        "ruta": "./datos/jae_educa/ciencias_naturales_salud.geojson",
        "id": "hic_xxx_cns",
        "titulo": "Movilidad profesores - Ciencias Naturales",
        "abstract": "Abstract a completar JAE EDUCA",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Movilidad de profesores JAE - Lenguas vivas",
        "nombre_en": "Mobility of college professors granted by JAE - Modern languages",
        "tipo": "geojson",
        "ruta": "./datos/jae_educa/lenguas_vivas.geojson",
        "id": "hic_xxx_len",
        "titulo": "Movilidad profesores - Lenguas Vivas",
        "abstract": "Abstract a completar JAE EDUCA",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Movilidad de profesores JAE - Artes y oficios",
        "nombre_en": "Mobility of college professors granted by JAE - Arts and professions",
        "tipo": "geojson",
        "ruta": "./datos/jae_educa/artes_oficios.geojson",
        "id": "hic_xxx_art",
        "titulo": "Movilidad profesores - Artes y Oficios",
        "abstract": "Abstract a completar JAE EDUCA",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Movilidad de profesores JAE - Humanidades y Ciencias Sociales",
        "nombre_en": "Mobility of college professors granted by JAE - Humanities and Social Science",
        "tipo": "geojson",
        "ruta": "./datos/jae_educa/humanidades_ciencias_sociales.geojson",
        "id": "hic_xxx_hum",
        "titulo": "Movilidad profesores - Humanidades y Ciencias Sociales",
        "abstract": "Abstract a completar JAE EDUCA",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Movilidad de profesores JAE - Lenguas Clásicas",
        "nombre_en": "Mobility of college professors granted by JAE - Classical Languages",
        "tipo": "geojson",
        "ruta": "./datos/jae_educa/lenguas_clasicas.geojson",
        "id": "hic_xxx_cla",
        "titulo": "Movilidad profesores - Lenguas Clásicas",
        "abstract": "Abstract a completar JAE EDUCA",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Movilidad de profesores JAE - Ciencias Puras",
        "nombre_en": "Mobility of college professors granted by JAE - Pure Science",
        "tipo": "geojson",
        "ruta": "./datos/jae_educa/ciencias_puras.geojson",
        "id": "hic_xxx_cie",
        "titulo": "Movilidad profesores - Ciencias Puras",
        "abstract": "Abstract a completar JAE EDUCA",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      }
    ]
  }, {
    "id": "pob",
    "nombre": "Población",
    "nombre_en": "Community",
    "color_fondo": "#E9A5E9",
    "color_letra_borde": "#7D3280",
    "contenido": [
      {
        "nombre": "SIGMAYORES Centros de Servicios Sociales",
        "nombre_en": "SIGMAYORES Social Service Centres",
        "tipo": "wms",
        "ruta": "http://www.sigmayores.csic.es/ArcGIS/services/Rec-Sociales/MapServer/WMSServer?",
        "id": "US.socialService"
      },{
        "nombre": "SIGMAYORES Residencias",
        "nombre_en": "SIGMAYORES Housing",
        "tipo": "wms",
        "ruta": "http://www.sigmayores.csic.es/ArcGIS/services/Rec-Sociales/MapServer/WMSServer?",
        "id": "US.housing"
      },{
        "nombre": "SIGMAYORES Centros INSS",
        "nombre_en": "SIGMAYORES Specialized Administration Offices",
        "tipo": "wms",
        "ruta": "http://www.sigmayores.csic.es/ArcGIS/services/Rec-Sociales/MapServer/WMSServer?",
        "id": "US.specializedAdministrationOffice"
      },{
        "nombre": "SIGMAYORES Centros de día",
        "nombre_en": "SIGMAYORES Specialized Service Of Social Protection",
        "tipo": "wms",
        "ruta": "http://www.sigmayores.csic.es/ArcGIS/services/Rec-Sociales/MapServer/WMSServer?",
        "id": "US.specializedServiceOfSocialProtection"
      },{
        "nombre": "SIGMAYORES Consultorios",
        "nombre_en": "SIGMAYORES General Medical Services",
        "tipo": "wms",
        "ruta": "http://www.sigmayores.csic.es/ArcGIS/services/Rec-Sanitarios/MapServer/WMSServer?",
        "id": "US.generalMedicalService"
      },{
        "nombre": "SIGMAYORES Centros de salud",
        "nombre_en": "SIGMAYORES Specialized Medical Services",
        "tipo": "wms",
        "ruta": "http://www.sigmayores.csic.es/ArcGIS/services/Rec-Sanitarios/MapServer/WMSServer?",
        "id": "US.specializedMedicalService"
      },{
        "nombre": "SIGMAYORES Hospitales",
        "nombre_en": "SIGMAYORES Hospital Services",
        "tipo": "wms",
        "ruta": "http://www.sigmayores.csic.es/ArcGIS/services/Rec-Sanitarios/MapServer/WMSServer?",
        "id": "US.hospitalService"
      },{
        "nombre": "Densidad de población por provincias",
        "nombre_en": "Population density by provinces",
        "tipo": "geojson",
        "ruta": "./datos/ebi/provincias.geojson",
        "id": "pob_xxx_den",
        "titulo": "Densidad de población",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Población mayor o igual a 100 años por provincias",
        "nombre_en": "Population of 100 and over by provinces",
        "tipo": "geojson",
        "ruta": "./datos/ebi/provincias.geojson",
        "id": "pob_xxx_p00",
        "titulo": "Población mayor o igual a 100 años",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Población mayor o igual a 85 años por provincias",
        "nombre_en": "Population of 85 and over by provinces",
        "tipo": "geojson",
        "ruta": "./datos/ebi/provincias.geojson",
        "id": "pob_xxx_p85",
        "titulo": "Población mayor o igual a 85 años",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Población mayor o igual a 65 años por provincias",
        "nombre_en": "Population of 65 and over by provinces",
        "tipo": "geojson",
        "ruta": "./datos/ebi/provincias.geojson",
        "id": "pob_xxx_p65",
        "titulo": "Población mayor o igual a 65 años",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Ratio de mayores de 100 años por municipios",
        "nombre_en": "Ratio of 100 and over by municipalities",
        "tipo": "geojson",
        "ruta": "./datos/ebi/municipios.geojson",
        "id": "pob_xxx_r00",
        "titulo": "Ratio de mayores de 100 años",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Ratio de mayores de 95 años por municipios",
        "nombre_en": "Ratio of 95 and over by municipalities",
        "tipo": "geojson",
        "ruta": "./datos/ebi/municipios.geojson",
        "id": "pob_xxx_r95",
        "titulo": "Ratio de mayores de 95 años",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Ratio de mayores de 90 años por municipios",
        "nombre_en": "Ratio of 90 and over by municipalities",
        "tipo": "geojson",
        "ruta": "./datos/ebi/municipios.geojson",
        "id": "pob_xxx_r90",
        "titulo": "Ratio de mayores de 90 años",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Índice de longevidad por municipios",
        "nombre_en": "Longevity index by municipalities",
        "tipo": "geojson",
        "ruta": "./datos/ebi/municipios.geojson",
        "id": "pob_xxx_lon",
        "titulo": "Índice de longevidad",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Índice de ultralongevidad por municipios",
        "nombre_en": "Ultra-longevity index by municipalities",
        "tipo": "geojson",
        "ruta": "./datos/ebi/municipios.geojson",
        "id": "pob_xxx_ult",
        "titulo": "Índice de ultralongevidad",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Índice de concentración etárea por municipios",
        "nombre_en": "Age concentration index by municipalities",
        "tipo": "geojson",
        "ruta": "./datos/ebi/municipios.geojson",
        "id": "pob_xxx_ice",
        "titulo": "Índice de concentración etárea",
        "abstract": "Abstract a completar EBI",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      }
    ]
  },
  {
    "id": "ant",
    "nombre": "Antropología",
    "nombre_en": "Anthropology",
    "color_fondo": "#D4C7F8",
    "color_letra_borde": "#5F3FA8",
    "contenido": [
    ]
  },
  {
    "id": "med",
    "nombre": "Medio rural y natural",
    "nombre_en": "Rural and natural environment",
    "color_fondo": "#D0FF99",
    "color_letra_borde": "#5FB323",
    "contenido": [
      {
        "nombre": "Municipios en DOPs olivar",
        "nombre_en": "Municipalities in olive DPOs",
        "tipo": "geojson",
        "ruta": "./datos/extersial/municipios.geojson",
        "id": "med_xxx_mun",
        "titulo": "Municipios",
        "abstract": "Abstract a completar EXTERSIAL",
        "tipo_leyenda": "vectorial",
        "info_estilo": ['MultiPolygon','transparent','#491600'],
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Erosión laminar potencial en DOPs olivar",
        "nombre_en": "Potential soil erosion in olive DPOs",
        "tipo": "geojson",
        "ruta": "./datos/extersial/erosion.geojson",
        "id": "med_xxx_ero",
        "titulo": "Erosión laminar potencial",
        "abstract": "Abstract a completar EXTERSIAL",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": false
      },{
        "nombre": "Almazaras (localización) en DOPs olivar",
        "nombre_en": "Oil mills (location) in olive DPOs",
        "tipo": "geojson",
        "ruta": "./datos/extersial/almazaras_punto.geojson",
        "id": "med_xxx_alp",
        "titulo": "Almazaras (localización)",
        "abstract": "Abstract a completar EXTERSIAL",
        "tipo_leyenda": "vectorial",
        "info_estilo": ['Point','#fe9929','#8c2d04'],
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Almazaras (áreas de influencia) en DOPs olivar",
        "nombre_en": "Oil mills (area of influence) in olive DPOs",
        "tipo": "geojson",
        "ruta": "./datos/extersial/almazaras_thiessen.geojson",
        "id": "med_xxx_alt",
        "titulo": "Almazaras (áreas de influencia)",
        "abstract": "Abstract a completar EXTERSIAL",
        "tipo_leyenda": "vectorial",
        "info_estilo": ['MultiPolygon','#c7f2a9','#597a43'],
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Habitats naturales y seminaturales en DOPs olivar",
        "nombre_en": "Natural and semi-natural habitats in olive DPOs",
        "tipo": "geojson",
        "ruta": "./datos/extersial/habitats.geojson",
        "id": "med_xxx_hab",
        "titulo": "Hábitats naturales y seminaturales",
        "abstract": "Abstract a completar EXTERSIAL",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": true
      },{
        "nombre": "Tipología de parcelas en DOPs olivar",
        "nombre_en": "Plots typology in olive DPOs",
        "tipo": "geojson",
        "ruta": "./datos/extersial/tipo_parc.geojson",
        "id": "med_xxx_tip",
        "titulo": "Tipología de parcelas de olivar",
        "abstract": "Abstract a completar EXTERSIAL",
        "tipo_leyenda": "imagen",
        "ruta_descarga": "",
        "queryable": false
      }
    ]
  }
];
