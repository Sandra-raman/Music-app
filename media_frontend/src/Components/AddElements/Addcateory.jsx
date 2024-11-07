import React, { useEffect, useState } from 'react';
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
import { addCategoryAPI, deleteCategory, getAvideo, getcategoryAPI } from '../../../Services/allAPI';
import Swal from 'sweetalert2'
import { MdOutlineDelete } from "react-icons/md";

function Addcateory() {
  const [categoryName,setcategoryName]=useState("")
  const [categoryDetails,setcategoryDetails]=useState([])
  const handleCategory=async()=>{
    console.log(categoryName);
    if(categoryName){
      try {
        const body={
          categoryName,
          allvideos:[]
        }
        const result=await addCategoryAPI(body)
        console.log(result);
        if(result.status>=200 && result.status<300){
          handlegetcategory()
          Swal.fire({
            title: 'success',
            text: 'category added successfully',
            icon: 'success',
            confirmButtonText: 'Close'
          })
          setcategoryName("")
          toggleOpen()
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: result.message,
            icon: 'error',
            confirmButtonText: 'Close'
          })
        }

      } catch (error) {
        alert(error)
      }
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'please fill the form',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
  }
  const handlegetcategory=async()=>{
    try {
      const result=await getcategoryAPI()
      console.log(result);
      if(result.status>=200&&result.status<300)
      {
        setcategoryDetails(result.data)
      }
      else{
        alert(result.message)
      }
    } catch (error) {
      console.log(error);
      
    }
    
  }
  console.log(categoryDetails);
  const handledeletecat=async(id)=>{
    try {
      const result=await deleteCategory(id)
      console.log(result);
      Swal.fire({
        title: 'success',
        text: 'deleted successfully',
        icon: 'success',
        confirmButtonText: 'Close'
      })
      handlegetcategory()

    } catch (error) {
      console.log(error);
      
    }
  }
  const videoOver=(e)=>{
    console.log("video hover");   
    console.log(e);
    e.preventDefault();

  }
  const videoDrop=async(e,cid)=>{
    console.log("video dropped " +cid);
    console.log(e);    
    let vid=e.dataTransfer.getData("videoId")
    console.log("videoId:",vid);
    const {data}=await getAvideo(vid)
    console.log(data);
    
  }
  useEffect(()=>{handlegetcategory()},[])
  const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);

  return (
    <div>
<MDBBtn onClick={toggleOpen} className='btn-warning mx-5'>Add Cateory</MDBBtn>
    <div className="row">
      {
        categoryDetails.length>0?categoryDetails.map((item)=>(
          <div onDragOver={e=>videoOver(e)} onDrop={e=>videoDrop(e,item.id)} className="col p-3 my-3 mx-5 d-flex justify-content-between border">
            <h4 className='me-5 fs-5'>{item.categoryName}</h4>
            <MdOutlineDelete onClick={()=>handledeletecat(item.id)} className='fs-3 text-danger ms-5' /> 
          </div>
        )):"no category"
      }
    </div>
<MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
  <MDBModalDialog>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Add cateory</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        <div>
        <MDBInput onChange={e=>setcategoryName(e.target.value)} label="Add category" id="typeText" type="text" className='my-2' style={{ color: 'orange' }}/>

        </div>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={toggleOpen}>
          Close
        </MDBBtn>
        <MDBBtn color='warning' onClick={handleCategory}>Upload</MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>

    </div>
  )
}

export default Addcateory