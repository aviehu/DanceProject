import React from 'react';
import Box from '@mui/material/Box';
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Page = ({ children }) => {
    return (
        <Box sx ={{width:1400, height:700, marginTop:5}} style={{backgroundImage:"linear-gradient(#ffffff, #ffffff, #ffffff)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Stack direction="row" style={{position: 'fixed', left: 0, top: 15, zIndex:99}}>
            <Link to='/' style={{ textDecoration: 'none' }}><Button>בית</Button></Link>
            </Stack>
         { children }
        </Box>
    );
};
export default Page;