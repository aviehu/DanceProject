import Page from "./Page.js"
import Content from "./Content.js"
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Controller from "./Controller.js";

const RandomShow = () => {
    const hebrew={
        showName: "שם יצירה",
        choreographer: "כוריאוגרף",
        artisticDirector: "מנהל אומנותי",
        dancers: "רקדנים",
        year: "שנה",
        randomShow: "יצירה אקראית",
        showInfo: "הצג מידע",
        hideInfo: "הסתר מידע"
    }

    const [show, setShow] = useState({Text: "Press the button to get a random show"})
    const [display, setDisplay] = useState(false)
    
    const getNewShow = async () => {
        try {
            const ans = Controller.getRandShow()
            setShow(ans)
            setDisplay(false)
        } catch (e) {
            setShow({Text: "Eror..."})
        }
    }

    const getInfo = () => {
        return(
            <div>
                <h3>{hebrew.showName}: {show["Piece Name"]}</h3>
                <h3>{hebrew.choreographer}: {show.Choreographer}</h3>
                {show["Artistic director"].length>0? <h3>{hebrew.artisticDirector}: {show["Artistic director"]}</h3> : <div/>}
                <h3>{hebrew.dancers}: {show.Dancers}</h3>
                <h3>{hebrew.year}: {show.Year}</h3>
            </div>
        )
    }

    useEffect(() => {
        getNewShow()
    }, [])

    return (
        <Page>
            <Content>
            <Stack spacing={2}>
                <h1>
                    {show.Text}
                </h1>
                <Button onClick={getNewShow}>{hebrew.randomShow}</Button>
                {display ?
                    getInfo() :
                    <div></div>}
                {show.Dancers? <Button onClick={() => setDisplay(!display)}>{display ? hebrew.hideInfo : hebrew.showInfo}</Button> : <div></div>}
            </Stack>
            </Content>
        </Page>
    );
  }

  export default RandomShow;
  