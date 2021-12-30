import WordGraph from './WordGraph';
import Page from './Page';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';

const WordCount = () => {
    const [data, setData] = useState({})

    useEffect(async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch('http://localhost:8080/words', requestOptions)
        const data = await response.json()
        setData(data)
    }, [])

    return (
        <Page>
            {data.length > 2 ? <WordGraph data={data}/> :             
            <Box sx={{ display: 'flex' }}>
                <CircularProgress indeterminate disableShrink/>
            </Box>}
        </Page>
    );
};
export default WordCount;