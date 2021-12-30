import React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Content = ({ children }) => {

    const theme = createTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
    });

    const style={
        width: 900,
        height: 700,
        padding:30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <Paper variant="outlined" sx={{height:"100%", width: "70%"}} style={style}>
            <ThemeProvider theme={theme}>
                <div dir="rtl">
                    { children }
                </div>
            </ThemeProvider>
        </Paper>
    );
};
export default Content;
