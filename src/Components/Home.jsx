import React from 'react'
import { Container } from 'react-bootstrap'
import  Box  from '@mui/material/Box'
import  Avatar  from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
const Home = () => {
    const backgroundImageSrc = '/mountain.jpeg';
  return (
    <>
  <Container>
      <Box
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          padding: '20px',
        }}
      >
        <Container style={{display:"flex",justifyContent:"space-around"}} >
            <Avatar src="/mountain.jpeg" alt="Avatar Image"/>
            <Box sx={{}}>
            <Link to='/history'>01.History</Link>
            </Box>
            <Box>
            <Link to='/team'>02.Team</Link>
            </Box>

        </Container>
        <Container style={{marginTop:"18vh"}}>
            <h1 style={{ textAlign: 'center', fontSize: '56px', fontWeight: 'bolder',}}> <span style={{color:"#4F4557"}}>LosAngeles</span> <br /> <span style={{color:"#3C486B"}}>Mountaines</span></h1>
        </Container>
      </Box>
     
    </Container>
   
    
    </>
  )
}

export default Home
