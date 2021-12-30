import PiChartGraph from './PieChartGraph';
import Page from './Page';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';
import {
    useParams
} from "react-router-dom";
import Controller from './Controller';

const dict = {
    hebeng: Controller.getHebEng(),
    groupmeans: Controller.getGroupMeans(),
    indiemeans: Controller.getIndieMeans()
}
const PiChart = () => {
    let { url } = useParams();
    url = url.substring(1)
    const [data, setData] = useState({})
    useEffect(async () => {
        const data = dict[url]
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