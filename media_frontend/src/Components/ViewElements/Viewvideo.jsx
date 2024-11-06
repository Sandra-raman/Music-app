import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideo } from '../../../Services/allAPI'
function Viewvideo(addVideoRes) {

  const [allvideos,setallvideos]=useState([])

  const handlegetVideo=async()=>{
    const result=await getVideo()
    // console.log(result);
    setallvideos(result.data)        
  }  
  console.log(allvideos);
  
  useEffect(()=>{
    handlegetVideo()
  },[addVideoRes])
  return (
    <div>
      <div className="row p-5">
        <div className="col">
          {
            allvideos.map(item=>(
              <Videocard videoDetails={item}/>
            ))
          }
        
        </div>
      </div>
    </div>
  )
}

export default Viewvideo