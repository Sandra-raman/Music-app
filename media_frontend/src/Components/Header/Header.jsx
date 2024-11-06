import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { GrMultimedia } from "react-icons/gr";
  function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <GrMultimedia className='fs-4 text-dark'/>
            <h5 className='m-1 text-warning'>Media</h5>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header