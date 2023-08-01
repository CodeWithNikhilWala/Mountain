import { Box, Typography } from '@mui/material';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const History = () => {
  const backgroundImageSrc = '/mountain.jpeg';

  return (
    <>
      <style>
        {`
        body, #root {
          margin: 0;
        }

        @media screen and (max-width: 600px) {
          /* Adjust the image section for small screens */
          .image-section {
            flex-direction: column;
            align-items: center;
          }

          /* Adjust the footer section for small screens */
          footer {
            text-align: center;
          }
        }
        `}
      </style>
      <Navbar>
        <Box>
          <Container style={{ display: 'flex', justifyContent: 'space-around', padding: '8px' }}>
            <Avatar src="/mountain.jpeg" alt="Avatar Image" />
            <Box>
              <Link to="/history">01. History</Link>
            </Box>
            <Box>
              <Link to="/team">02. Team</Link>
            </Box>
          </Container>
        </Box>
      </Navbar>
      <Box
        className="image-section"
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          position: 'fixed',
          top: '10vh',
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '70px', margin: 0, color: '#61677A' }}>01.</h1>
          <h5 style={{ fontSize: '20px',color:"#213555" }}>History</h5>
        </Box>
        <Container style={{ paddingLeft: '20px', marginTop: '0px' }}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Delectus quos eum saepe repudiandae aperiam dicta qui quas. Beatae repellendus magni cum voluptate
            corrupti, repudiandae natus laborum minima, reiciendis dolor fuga? Beatae quisquam facere sunt fugit?
            Eligendi voluptates aliquam iste sunt, reiciendis, nulla quisquam cumque repudiandae perferendis consequatur
            ipsam. Et, accusamus!
          </Typography>
        </Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: '40px',
            background: '#394867',
            position: 'fixed', bottom: "20vh", left: 0, right: 0, 
          }}
        >
          <img src="boy.jpeg" alt="" style={{ width: '100px', height: '100px', paddingTop: 5, paddingBottom: 5 }} />
          <img src="mount.jpeg" alt="" style={{ width: '100px', height: '100px', marginLeft: 3, paddingTop: 5, paddingBottom: 5 }} />
          <img src="boy.jpeg" alt="" style={{ width: '100px', height: '100px', marginLeft: 3, paddingTop: 5, paddingBottom: 5 }} />
          <img src="mount.jpeg" alt="" style={{ width: '100px', height: '100px', marginLeft: 3, paddingTop: 5, paddingBottom: 5 }} />
        </Box>
        <footer style={{position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-evenly', padding: '10px'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <h1 style={{ fontSize: '70px', margin: 0 ,color: '#61677A'}}>02.</h1>
            <h5 style={{ fontSize: '20px' }}>Climb</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, amet?</p>
          </Box>
        </footer>
      </Box>
    </>
  );
};

export default History;
