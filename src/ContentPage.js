import Page from "./Page"
import Content from "./Content"
import { Stack, Button } from "@mui/material"
import { useState } from "react"

const ContentPage = () => {
    const [page, setPage] = useState({})

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


    const changePage = () => {
        console.log('clicked')
        window.location.href=`http://localhost:3000/${page.url}`
        return <div></div>
    }

    return(
        <Page>
            <Content>
                <Stack spacing={4}>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'average:avgwordsintext'})}>{hebrew.avgWord}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'average:avgqoutesintext'})}>{hebrew.avgQoute}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'piechart:hebeng'})}>{hebrew.nameHebEng}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'peryeargraph:lan'})}>{hebrew.hebAvg}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'randomshow'})}>{hebrew.rndText}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'randomparagraph'})}>{hebrew.synText}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'wordscount'})}>{hebrew.wordCloud}</Button>
                </Stack>
                {page.url ? changePage() : <div></div>}
            </Content>
        </Page>
    )
}

export default ContentPage