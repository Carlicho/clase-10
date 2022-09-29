import React, { Component } from "react";
import ReactPlayer from 'react-player';



//uso de react-player agregado para tpclase10 + borrar video de manera local para menor peso

export default class Video extends Component {
    render(){
        return(
            <div >
            <ReactPlayer url='https://youtu.be/vsMWVW4xtwI'  controls/> 

            </div>
        
          //  <video className='Video' controls>
          //      <source src={video} type='video/mp4'/>
          //      
//
          //  </video>



        )
    }
    

}