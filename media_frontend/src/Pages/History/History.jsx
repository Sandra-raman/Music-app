import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { deleteWatchHis, getWatchHis } from '../../../Services/allAPI';

function History() {
  const [getHistory,setgetHistory]=useState([])

  const handleGethistory=async()=>{
    try {
      const result=await getWatchHis()
      console.log(result);
      if(result.status>=200&&result.status<300)
      {
      setgetHistory(result.data)
      }
      else{
        alert(result.message)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  console.log(getHistory);
  const handleDeletehis=async(id)=>{
    try {
      const result=await deleteWatchHis(id)
      console.log(result);
      handleGethistory()
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{handleGethistory()},[])
  return (
    <div className='p-3'>
        <div className=" d-flex justify-content-between">
        <h3 className=''>Watch History</h3>
        <Link to={'/home'} style={{textDecoration:'none'}}>
         <h4 className='p-2'>Back to home</h4>
        </Link>
        </div>
      <Table striped='columns'>
      <thead>
        <tr>
          <th>SI.NO</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          getHistory.length>0?getHistory.map((item)=>(
            <tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
            <td><a href={item.link}>{item.link}</a></td>
            <td>{item.timestamp}</td>
            <td><MdDelete className='fs-4 text-danger' onClick={()=>handleDeletehis(item.id)}/></td>
          </tr>
          )):"No Data"
        }
      </tbody>
    </Table>
    </div>
  )
}

export default History