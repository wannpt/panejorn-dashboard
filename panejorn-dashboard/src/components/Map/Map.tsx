import { Feature, Geometry } from 'geojson'
import { geoJSON, Layer, layerGroup, LeafletMouseEvent, Map } from 'leaflet'
import React, { ReactComponentElement, useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polygon, GeoJSON, useMap} from 'react-leaflet'
import './map.css'

const MapTypeConst: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0]
        },
        properties: {}
      }
    ]
  }

//need works
var highlightStyle = {
weight: 1,
color: '#FD8D3C',
dashArray: '',
fillOpacity: 0.5
}

const GeoMapContainer = (props: any) => {
    let LeafletMap = useMap();

    const onHighlight = (e: LeafletMouseEvent) => {
   
        const layer = e.target
        layer.setStyle({
            weight: 2,
            color: '#FC4E2A',
            dashArray: '',
            fillOpacity: 0.7
        })
        layer.bringToFront();
        console.log(layer.options.style)
    
    }
    
    const resetHighlight = (e: LeafletMouseEvent) => {
        const layer = e.target
        layer.setStyle({
            weight: 1,
            color: '#FD8D3C',
            dashArray: '',
            fillOpacity: 0.5
        })
        layer.bringToFront();
    }

    
    const ZoomInFeature = (e: LeafletMouseEvent, LeafletMap: Map) => {
        const layer = e.target
        layer.setStyle({
            weight: 1,
            color: '#FC4E2A',
            dashArray: '',
            fillOpacity: 0.5
        })
        layer.bringToFront();

        LeafletMap.fitBounds(e.target.getBounds());
    
    }
    
    const onEachFeature = (feature: Feature<Geometry, any>, layer: L.Layer) => {
        
        layer.on({
            mouseover: (e) => onHighlight(e),
            mouseout: (e) => resetHighlight(e),
            click: (e) => ZoomInFeature(e, LeafletMap)
        })
    }


    return (
        <GeoJSON data={props.mapData} style={highlightStyle} onEachFeature={onEachFeature} />
    )
}

const MapComp = () => {

    const [mapData, setMapdata] = useState<GeoJSON.FeatureCollection>(MapTypeConst)
    const [loading, setLoading] = useState('0')

    const getThailandMap = () => {
        fetch('thailandMap.json',{
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(function(res){
            console.log(res)
            return res.json();
        })
        .then(jsonRes => {
            console.log(jsonRes);
            setMapdata(jsonRes);
            setLoading('1');
        });
        
    }

    const geoJsonRef = useRef();



    useEffect(()=>{
        getThailandMap()
    },[])

      

    return ( 
        <MapContainer id='mapid' center={[13, 101.5]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {console.log('before MapContainer' + mapData)}
            {
                loading === '1' && (
                   <GeoMapContainer mapData={mapData} />
                )
            }
           
            
           
        </MapContainer>
    )
}

export default MapComp