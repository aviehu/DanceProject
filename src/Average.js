import WordPerYearGraph from './WordPerYearGraph'
import Page from './Page';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const Average = () => {
    const [data, setData] = useState({})
    let { url } = useParams();
    url = url.substring(1)
    useEffect(async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(`http://localhost:8080/${url}`, requestOptions)
        const data = await response.json()
        setData(data)
    }, [])

    return (
        <Page>
            {data.length > 2 ? <WordPerYearGraph data={data}/> :             
            <Box sx={{ display: 'flex' }}>
                <CircularProgress indeterminate disableShrink/>
            </Box>}
        </Page>
    );
};
export default Average;