import Page from "./Page"
import Content from "./Content"
import { Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"
const HomePage = () => {
    const hebrew ={
        people: "אנשים",
        content: "תוכן",
        means: "אמצעים"
    }
    const buttonStyle ={
        height: 150,
        fontSize: 70
    }

    return (
        <Page>
            <Content>
                <Stack spacing={4}>
                    <Link to='/network:' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.people}</Button></Link>
                    <Link to='/content' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.content}</Button></Link>
                    <Link to='/means' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.means}</Button></Link>
                </Stack>
            </Content>
        </Page>
    )
}

export default HomePage
