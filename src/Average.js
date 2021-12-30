import WordPerYearGraph from './WordPerYearGraph'
import Page from './Page';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Controller from './Controller';

const dict = {
    avgwordsintext: Controller.getAvgWordsInText(),
    avgqoutesintext: Controller.getAvgQoutesInText(),
}

const Average = () => {
    const [data, setData] = useState({})
    let { url } = useParams();
    url = url.substring(1)
    useEffect(async () => {
        const data = dict[url]
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