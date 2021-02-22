import { Feature, Geometry } from 'geojson'
import { LeafletMouseEvent, Map } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap} from 'react-leaflet'
import { useDispatch } from 'react-redux'
import { selectProvince } from '../../store/stats/statActions'
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
    const dispatch = useDispatch()  
    const onHighlight = (e: LeafletMouseEvent) => {
   
        const layer = e.target
        layer.setStyle({
            weight: 2,
            color: '#FC4E2A',
            dashArray: '',
            fillOpacity: 0.7
        })
        layer.bringToFront();
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
        dispatch(selectProvince(e.target.feature.properties.name))
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
            return res.json();
        })
        .then(jsonRes => {
            setMapdata(jsonRes);
            setLoading('1');
        });
        
    }

    useEffect(()=>{
        getThailandMap()
    },[])

      

    return ( 
        <MapContainer id='mapid' center={[13, 101.5]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                loading === '1' && (
                   <GeoMapContainer mapData={mapData} />
                )
            }

        </MapContainer>
    )
}

export default MapComp