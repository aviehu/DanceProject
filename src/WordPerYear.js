import WordPerYearGraph from './WordPerYearGraph'
import Page from './Page';
import {
    useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Controller from './Controller';

const WordPerYear = () => {
    const [data, setData] = useState({})
    let { word } = useParams();
    const currWord = word.substring(1)

    useEffect(async () => {
        setData({})
        const data = Controller.getAvgWordPerYear(currWord)
        setTimeout(() => setData(data), 50)
    }, [])

    return (
        <Page>
            {data && data.length > 0 ? <WordPerYearGraph data={data}/> : <div/>}
        </Page>
    );
};
export default WordPerYear;