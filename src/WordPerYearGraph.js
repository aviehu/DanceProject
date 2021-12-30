import { useRef, useEffect } from "react";
import Page from "./Page";

const WordPerYearGraph = ({ data }) => {
    const graphRef = useRef()
    useEffect(() => {
        if (!graphRef.current) {
            return
        } 
        graphRef.current.innerHTML = ""
        let container;
        const chart = window.anychart.line()
        const series = chart.line(data)
        series.stepDirection("forward");
        series.stroke("#0066cc", 2)
        chart.container("perYearGraphContainer");
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
            <div id="perYearGraphContainer"  ref={graphRef}  style={{width: "100%", height: "100%"}}>

            </div>
        </Page>
    )
}

export default WordPerYearGraph