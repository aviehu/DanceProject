import Page from "./Page"
import Content from "./Content"
import { Stack, Button } from "@mui/material"
import { useState } from "react"

const Means = () => {
    const [page, setPage] = useState({})

    const hebrew = {
        group: "להקות",
        indie: "יוצרים עצמאיים",
        compare: 'השוואת תקציב'
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
                    <Button style={buttonStyle} onClick={() => setPage({url: 'piechart:groupmeans'})}>{hebrew.group}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'piechart:indiemeans'})}>{hebrew.indie}</Button>
                </Stack>
                {page.url ? changePage() : <div></div>}
            </Content>
        </Page>
    )
}

export default Means