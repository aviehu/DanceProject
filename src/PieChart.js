import PiChartGraph from './PieChartGraph';
import Page from './Page';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';
import {
    useParams
} from "react-router-dom";

const PiChart = () => {
    let { url } = useParams();
    url = url.substring(1)
    const [data, setData] = useState({})
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
            {data.graphData ? <PiChartGraph data={data}/> :             
            <Box sx={{ display: 'flex' }}>
                <CircularProgress indeterminate disableShrink/>
            </Box>}
        </Page>
    );
};
export default PiChart;