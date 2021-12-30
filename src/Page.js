import React from 'react';
import Box from '@mui/material/Box';
import { Stack, Button } from '@mui/material';

const Page = ({ children }) => {
    
const changePage = () => {
    window.location.href=`http://localhost:3000/`
    return <div></div>
}

    return (
        <Box sx ={{width:1400, height:700, marginTop:5}} style={{backgroundImage:"linear-gradient(#ffffff, #ffffff, #ffffff)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Stack direction="row" style={{position: 'fixed', left: 0, top: 15, zIndex:99}}>
                <Button onClick={changePage}>בית</Button>
            </Stack>
         { children }
        </Box>
    );
};
export default Page;