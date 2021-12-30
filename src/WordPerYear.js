import WordPerYearGraph from './WordPerYearGraph'
import Page from './Page';
import {
    useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';

const WordPerYear = () => {
    const [data, setData] = useState({})
    let { word } = useParams();
    const currWord = word.substring(1)

    useEffect(async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ word: currWord })
        };
        const response = await fetch('http://localhost:8080/wordperyear', requestOptions)
        const data = await response.json()
        setData(data)
    }, [])

    return (
        <Page>
            {data.length > 0 ? <WordPerYearGraph data={data}/> : <div/>}
        </Page>
    );
};
export default WordPerYear;