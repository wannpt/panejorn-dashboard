import { get } from 'https'
import L, { LatLngExpression } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polygon, GeoJSON} from 'react-leaflet'
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
  const highlightStyle = {
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  }


  

const Map = () => {

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
                    <GeoJSON data={mapData}  />
                )
            }
           
            
           
        </MapContainer>
    )
}

export default Map