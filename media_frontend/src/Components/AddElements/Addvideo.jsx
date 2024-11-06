import React, { useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { FaFilm } from "react-icons/fa";
import { addVideo } from '../../../Services/allAPI';
import Swal from 'sweetalert2'
function Addvideo({setaddVideoRes}) {
  const [staticModal, setStaticModal] = useState(false);
  const toggleOpen = () => setStaticModal(!staticModal);

  const [videoDetails,setvideoDetails]=useState({
    caption:"",
    imageURL:"",
    link:""
  })
console.log(videoDetails);

const getEmbedLink=(e)=>{
  const {value}=e.target
  // console.log(value);
  const ycode=value.slice(-31)
  // console.log(ycode);
  const ylink=`https://www.youtube.com/embed/${ycode}`
  // console.log(ylink);

  setvideoDetails({...videoDetails,link:ylink})
  
}

const handleAdd=async()=>{
  const {caption,imageURL,link}=videoDetails
  if(!caption||!imageURL||!link){
    toggleOpen()
    Swal.fire({
      title: 'Error!',
      text: 'please fill the form',
      icon: 'error',
      confirmButtonText: 'Close'
    })
  }
  else{
    //api fetching
    const result=await addVideo(videoDetails)
    console.log(result);

    if(result.status>=200 && result.status<300){
      Swal.fire({
        title: 'success',
        text: 'Video added successfully',
        icon: 'success',
        confirmButtonText: 'Close'
      })
      toggleOpen()
      setaddVideoRes(result.data)
      setvideoDetails({
        caption:"",
        imageURL:"",
        link:""
      })
    }
   else{
    alert(result.message)
   }
  }
}


  return (
    <div>
      <IoMdCloudUpload className='fs-3 mx-2' onClick={toggleOpen}/>
      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader >
              <MDBModalTitle className='text-warning'><FaFilm /> Upload Video </MDBModalTitle>
              <MDBBtn className='btn-close' color='light' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='border p-2 m-3'>
              <p className='mb-4 '>please fill the following details:</p>
              <div >
              <MDBInput onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} label="Video Caption" id="typeText" type="text" className='my-2' style={{ color: 'orange' }} />
              <MDBInput onChange={e=>setvideoDetails({...videoDetails,imageURL:e.target.value})} label="Video Image" id="typeText" type="text" className='my-2' style={{ color: 'orange' }}/>
              <MDBInput onChange={getEmbedLink} label="Video URL" id="typeText" type="text" className='my-2' style={{ color: 'orange' }}/>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn color='warning' onClick={handleAdd}>Upload</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Addvideo