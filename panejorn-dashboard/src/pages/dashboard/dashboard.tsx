import React, { useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'

const Dashboard = () => {

    const getData = () => {
        fetch('./mock-data-by-country-day.json', {
            headers : {
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson);
        })
    }


    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            <Topbar/>
        </div>
    )
}

export default Dashboard;