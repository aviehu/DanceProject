import Page from "./Page"
import Content from "./Content"
import { Stack, Button } from "@mui/material"
import { useState } from "react"
import { TextField } from "@mui/material"

const AddShow = () => {
    const [showName, setShowName] = useState('')
    const [showDs, setShowDs] = useState('')
    const [showCs, setShowCs] = useState('')
    const [showArtisticDir, setShowArtisticDir] = useState('')
    const [showDesc, setShowDesc] = useState('')
    const [showYear, setShowYear] = useState('')

    const addShow = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'Piece Name': showName, Dancers: showDs, Choreographer: showCs, 'Artistic director': showArtisticDir, Text: showDesc, Year: showYear, quote:'' })
        };
        const response = await fetch('http://localhost:8080/addshow', requestOptions)
        const data = await response.json()
        window.location.href=`http://localhost:3000/network:third`
    }

    const goBack = () => {

    }

    return(
        <Page>
            <Content>
                <Stack spacing={2}>
                    <h1>הוספת מופע</h1>
                    <TextField autoComplete='off' id="outlined-basic" label= "שם היצירה" value={showName} onChange={(a)=>{setShowName(a.target.value)}} variant="outlined" />
                    <TextField autoComplete='off' id="outlined-basic" label= "שמות הרקדנים" value={showDs} onChange={(a)=>{setShowDs(a.target.value)}} variant="outlined" />
                    <TextField autoComplete='off' id="outlined-basic" label= "מנהל אומנותי" value={showArtisticDir} onChange={(a)=>{setShowArtisticDir(a.target.value)}} variant="outlined" />
                    <TextField autoComplete='off' id="outlined-basic" label= "שם היוצר" value={showCs} onChange={(a)=>{setShowCs(a.target.value)}} variant="outlined" />
                    <TextField autoComplete='off' id="outlined-basic" label= "שנת היצירה" value={showYear} onChange={(a)=>{setShowYear(a.target.value)}} variant="outlined" />
                    <TextField autoComplete='off' id="outlined-basic" label= "תיאור המופע" value={showDesc} onChange={(a)=>{setShowDesc(a.target.value)}} variant="outlined" />
                    <Button onClick={addShow}>הוסף יצירה</Button>
                </Stack>
            </Content>
        </Page>
    )
}

export default AddShow