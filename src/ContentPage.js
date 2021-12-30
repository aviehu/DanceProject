import Page from "./Page"
import Content from "./Content"
import { Stack, Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

const ContentPage = () => {

    const hebrew = {
        avgWord: "ממוצע מלים לתוכנייה",
        avgQoute: "ממוצע ציטוטים לתוכנייה",
        nameHebEng: 'שמות בעברית/אנגלית',
        rndText: 'טקסט אקראי',
        synText: 'טקסט סינטתי',
        wordCloud: 'ענן מילים',
        hebAvg: "שמות יצירה באנגלית",
    }

    const buttonStyle ={
        height: 90,
        fontSize: 45
    }

    return(
        <Page>
            <Content>
                <Stack spacing={4}>
                    <Link to='/average:avgwordsintext' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.avgWord}</Button></Link>
                    <Link to='/average:avgqoutesintext' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.avgQoute}</Button></Link>
                    <Link to='/piechart:hebeng' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.nameHebEng}</Button></Link>
                    <Link to='/peryeargraph:lan' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.hebAvg}</Button></Link>
                    <Link to='/randomshow' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.rndText}</Button></Link>
                    <Link to='/randomparagraph' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.synText}</Button></Link>
                    <Link to='/wordscount' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.wordCloud}</Button></Link>
                </Stack>
            </Content>
        </Page>
    )
}

export default ContentPage