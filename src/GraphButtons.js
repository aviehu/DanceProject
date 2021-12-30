import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const GraphButtons = ({first, second, third}) => {

    return (
        <div>
            <Link to='/addShow' style={{ textDecoration: 'none' }}><Button>הוסף יצירה</Button></Link>
            <Button onClick={first}>כוריאוגרפים</Button>
            <Button onClick={second}>יצירות</Button>
            <Button onClick={third}>גרף</Button>
        </div>
    )
}

export default GraphButtons