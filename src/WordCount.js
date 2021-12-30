import WordGraph from './WordGraph';
import Page from './Page';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material'
import Controller from './Controller';

const WordCount = () => {
    const [data, setData] = useState({})

    useEffect(async () => {
        const data = Controller.getWordsCount()
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