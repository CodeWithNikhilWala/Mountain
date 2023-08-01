import Box from '@mui/material/Box';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';

const Team = () => {
  const backgroundImageSrc = '/mountain.jpeg';
  return (
    <>
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
        }}
      >
        <Box style={{ display: 'flex', padding: '8px', paddingLeft: '150px', background: '#394867' }}>
          <Box>
            <Link to="/history" style={{ background: 'grey', padding: 5, marginRight: '10px', color: '#394867' }}>
              Mountain1
            </Link>
          </Box>
          <Box>
            <Link to="/team" style={{ color: 'white' }}>
              Mountain2
            </Link>
          </Box>
        </Box>

        <Card style={{ background: '#ffffff', minWidth: 200, width: 300, marginLeft: '70px' }}>
          <Card.Body style={{ paddingLeft: '5vh' }}>
            <h1>SCHEDULE</h1>
            <Box sx={{ display: 'flex' }}>
              <p>25Nov 2016</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <p>25Nov 2016</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <p>25Nov 2016</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Box>
          </Card.Body>
        </Card>
        <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#394867', display: 'flex', justifyContent: 'space-evenly', padding: '10px' }}>
          <Avatar src="/mountain.jpeg" alt="Avatar Image" style={{ margin: '5px' }} />
          <Typography style={{ paddingTop: '7px', paddingBottom: '5px' }}>@copyRight</Typography>
        </footer>
      </Box>
    </>
  );
};

export default Team;
