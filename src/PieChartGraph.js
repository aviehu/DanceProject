import { Stack } from "@mui/material";
import { useRef, useEffect } from "react";
import Page from "./Page";

const PiChartGraph = ({ data }) => {
    console.log(data)
    const graphRef = useRef()
    useEffect(() => {
        if (!graphRef.current) {
            return
        } 
        graphRef.current.innerHTML = ""
        let container;
        const chart = window.anychart.pie(data.graphData)
        chart.container("perYearGraphContainer");
        chart.normal().stroke("black", 0.5);
        chart.draw();
        return () => {
            if(!container) {
                return
            }
            container.remove()
        }
    },[graphRef.current])
    return (
        <Page>
            <Stack alignItems={'center'} style={{width: "100%", height: "100%"}}>
                {data.title ? <h1>{data.title}</h1> : <div></div>}
                {data.total ? <h3>{data.total}</h3> : <div></div>}
                <div id="perYearGraphContainer"  ref={graphRef}  style={{width: "100%", height: "100%"}}>

                </div>
            </Stack>
        </Page>
    )
}

export default PiChartGraph