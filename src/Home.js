import Page from "./Page"
import Content from "./Content"
import { Button, Stack } from "@mui/material"
import { useState } from "react"
const HomePage = () => {
    const [page, setPage] = useState({})
    const hebrew ={
        people: "אנשים",
        content: "תוכן",
        means: "אמצעים"
    }
    const buttonStyle ={
        height: 150,
        fontSize: 70
    }

    const changePage = () => {
        window.location.href=`http://localhost:3000/${page.url}`
        return <div></div>
    }

    return (
        <Page>
            <Content>
                <Stack spacing={4}>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'network:'})}>{hebrew.people}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'content'})}>{hebrew.content}</Button>
                    <Button style={buttonStyle} onClick={() => setPage({url: 'means'})}>{hebrew.means}</Button>
                </Stack>
                {page.url ? changePage() : <div></div>}
            </Content>
        </Page>
    )
}

export default HomePage
