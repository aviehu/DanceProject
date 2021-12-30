import Page from "./Page"
import Content from "./Content"
import { Stack, Button } from "@mui/material"
import { Link } from "react-router-dom"

const Means = () => {
    const hebrew = {
        group: "להקות",
        indie: "יוצרים עצמאיים",
        compare: 'השוואת תקציב'
    }

    const buttonStyle ={
        height: 90,
        fontSize: 45
    }

    return(
        <Page>
            <Content>
                <Stack spacing={4}>
                    <Link to='/piechart:groupmeans' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.group}</Button></Link>
                    <Link to='/piechart:indiemeans' style={{ textDecoration: 'none' }}><Button style={buttonStyle}>{hebrew.indie}</Button></Link>
                </Stack>
            </Content>
        </Page>
    )
}

export default Means