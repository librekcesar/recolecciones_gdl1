var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_recolecciones_gdl_1 = new ol.format.GeoJSON();
var features_recolecciones_gdl_1 = format_recolecciones_gdl_1.readFeatures(json_recolecciones_gdl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_recolecciones_gdl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recolecciones_gdl_1.addFeatures(features_recolecciones_gdl_1);
var lyr_recolecciones_gdl_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_recolecciones_gdl_1, 
                style: style_recolecciones_gdl_1,
                interactive: true,
                title: '<img src="styles/legend/recolecciones_gdl_1.png" /> recolecciones_gdl'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_recolecciones_gdl_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_recolecciones_gdl_1];
lyr_recolecciones_gdl_1.set('fieldAliases', {'Folio': 'Folio', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_recolecciones_gdl_1.set('fieldImages', {'Folio': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_recolecciones_gdl_1.set('fieldLabels', {'Folio': 'header label', 'Latitud': 'header label', 'Longitud': 'header label', });
lyr_recolecciones_gdl_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});