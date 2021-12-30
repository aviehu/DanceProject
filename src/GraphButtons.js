import { Button } from "@mui/material"

const GraphButtons = ({first, second, third}) => {

    const changePage = () => {
        window.location.href=`http://localhost:3000/addShow`
        return <div></div>
    }

    return (
        <div>
            <Button onClick={changePage}>הוסף יצירה</Button>
            <Button onClick={first}>כוריאוגרפים</Button>
            <Button onClick={second}>יצירות</Button>
            <Button onClick={third}>גרף</Button>
        </div>
    )
}

export default GraphButtons