import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div>
      <div className="row p-5">
        <div className="col-6 text-center p-5 ">
          <h2>Welcome to <span className='text-warning'>MEDIA</span></h2>
          <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus aliquam, architecto possimus necessitatibus aliquid nihil totam, aut harum at facere, quidem minus iusto iste fuga cupiditate soluta corporis dignissimos!
          Dolorem exercitationem iure, quaerat odio nam tempora laborum optio quos, veritatis aut odit non? Quo cumque ex in quaerat veritatis amet non? Illo vero laudantium voluptatem voluptates, maiores alias et.
          Tempore, dolore! Nisi eveniet laboriosam nemo eligendi magnam nulla sequi animi delectus molestias perferendis adipisci tenetur dolorem, ad sint quis optio quos deserunt saepe est corrupti? Vitae quo aut quia!</p>
          <Link to={'/home'}>
          <button className='btn btn-warning'>Get started</button>
          </Link>
        </div>
        <div className="col-6 text-center">
          <img src="https://media.tenor.com/11u8gg1tMs4AAAAM/music-rock.gif" alt="" width={'400px'} height={'400px'} />
        </div>
      </div>

      <div className="row p-4">
        <h2 className='text-center text-warning'>FEATURES</h2>
        <div className="col-1"></div>
        <div className="col-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://media.tenor.com/MMQLFgdTW4sAAAAM/music-anime-anime.gif' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://i.pinimg.com/originals/94/c4/ce/94c4cee816a0ff61372defb6d1271054.gif' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://media.tenor.com/images/d837c1b68a1f23de6022b57045b488e0/tenor.gif' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
      </div>
      <div>
        <div className="row border m-2">
          <div className="col-2"></div>
          <div className="col-4 p-4">
            <h4 className='text-warning'>New Release</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae debitis qui ipsum porro maiores culpa placeat explicabo, sit, rerum dolorum officiis ad quia beatae necessitatibus quidem ducimus sunt itaque. Enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae debitis qui ipsum porro maiores culpa placeat explicabo, sit, rerum dolorum officiis ad quia beatae necessitatibus quidem ducimus sunt itaque. Enim.</p>
          </div>
          <div className="col-4 p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LaJqBhfcrhQ?si=1e8liBXHjLgFd1BN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Intro