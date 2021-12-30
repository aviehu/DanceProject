import Page from "./Page.js"
import Content from "./Content.js"
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Controller from "./Controller.js";

const RandomPara = () => {
    const colors = ['#34a853', '#555555','#f1c232', '#f44336', '#16537e' ]
    const hebrew ={
        newParagraph: "פסקה חדשה",
        show: 'הצג',
        hide: 'הסתר'
    }

    const [display, setDisplay] = useState(false)
    const [data, setData] = useState([])


    const getNewPhrase = async () => {
        try {
            const ans = Controller.getRandomParagraph()
            setData(ans)
            setDisplay(false)
        } catch (e) {
            setData("Eror...")
        }
    }

    const getPhrase = () =>{
        return colors.map((col, i) => {
            return display ? <h1 style={{ color: col, display: 'inline'}}>{data[i].phrase}. </h1> : <h1 style={{display: 'inline'}}>{data[i].phrase}. </h1>
        })
    }

    useEffect(() => {
        getNewPhrase()
    }, [])

    return (
        <Page>
            <Content>
                <Stack spacing={2}>
                    <div style={{display: 'inline'}}>{data.length > 0 ? getPhrase() : <div></div>}</div>
                    <Button onClick={getNewPhrase}> {hebrew.newParagraph} </Button>
                    {data.length > 0 ? <Button onClick={() => setDisplay(!display)}>{display ? hebrew.hide : hebrew.show }</Button> : <div></div>}
                    {display ? colors.map((col, i) => {
                        return <h1 style={{color: col}}>{data[i].creator}</h1>
                    }) : <div></div>}
                </Stack>
            </Content>
        </Page>
    );
  }

  export default RandomPara;
  