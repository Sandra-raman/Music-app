import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { addWatchHis, deleteVideo } from '../../../Services/allAPI';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function Videocard({videoDetails}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() =>{
  setShow(true);
  const {caption,link}=videoDetails
  let today=new Date()
  console.log(today);
  let timestamp=Intl.DateTimeFormat('en-us',{year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  console.log(timestamp);
  const body={
    caption,
    link,
    timestamp
  }
  const result=await addWatchHis(body)
  console.log(result);
  
  
}
console.log(videoDetails);


   const handleDelete=async(id)=>{
    try {
    const result =await deleteVideo(id)
    console.log(result);
    Swal.fire({
      title: 'success',
      text: 'deleted successfully',
      icon: 'success',
      confirmButtonText: 'Close'
    })
    setTimeout(()=>{
      window.location.reload()
    },2000)

    } catch (error) {
      console.log(error);
      
    }
    
   }
   const handleDrag=(e,vid)=>{
    console.log("video drag started");
    console.log(e);
    console.log(vid);
    
    
   }
  return (
    <div>
      <div className="row">
      {/* { */}
        {/* // allvideos.map(videos=> */}
          <div className="col mt-3 ">
             <Card draggable={true} onDragStart={e=>handleDrag(e,videoDetails.id)} style={{ width: '24rem' }}>
      <Card.Img variant="top" src={videoDetails.imageURL} fluid alt='...' onClick={handleShow} />
      <Card.Body>
        <Card.Title>{videoDetails.caption}</Card.Title>
        <Card.Text>
        Video Link: <a href="">{videoDetails.link}</a>
        </Card.Text>
        <MdDelete onClick={()=>handleDelete(videoDetails.id)} className='float-end fs-5 text-danger mt-4'/>
        </Card.Body>
    </Card>
         
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src={videoDetails.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        {/* ) */}
      {/* } */}
      
 
   </div>
    </div>
  )
}

export default Videocard