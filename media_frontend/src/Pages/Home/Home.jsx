import React, { useState } from 'react'
import Addvideo from '../../Components/AddElements/Addvideo'
import { Link } from 'react-router-dom'
import { FaHistory } from "react-icons/fa";
import Viewvideo from '../../Components/ViewElements/Viewvideo';
import Addcateory from '../../Components/AddElements/Addcateory';

function Home() {
  const [addVideoRes,setaddVideoRes]=useState({})
  return (
    <div>
      <div className="row">
        <div className="col-6 d-flex p-4">
          <h4>Upload Video</h4><Addvideo setaddVideoRes={setaddVideoRes}/>
        </div>
        <div className="col-6 p-4">
          <Link to={'/history'} style={{float:'right', textDecoration:'none', display: 'flex', alignItems: 'center'}} className='text-warning m-2'>
          <p className='m-2 fs-5'>Watch History </p><FaHistory className='fs-5'/>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <h4 className='p-3'>Add Videos</h4><Viewvideo addVideoRes={addVideoRes}/>
        </div>
        <div className="col-3">
          <h4 className='p-3'>Add Cateory</h4><Addcateory/>
        </div>
      </div>
    </div>
  )
}

export default Home