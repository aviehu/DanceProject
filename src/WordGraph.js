import { useRef, useEffect } from "react";
import Page from "./Page";

const WordGraph = ({ data }) => {
    const graphRef = useRef()
    useEffect(() => {
        if (!graphRef.current) {
            return
        } 
        graphRef.current.innerHTML = ""
        let container;        
        const chart = window.anychart.tagCloud(data);
        chart.container("wordGraphContainer");
        chart.draw();
        chart.listen("pointClick", function(e){
            var url = "http://localhost:3000/peryeargraph:" + e.point.get("x");
            window.open(url, "_blank");
        });
        return () => {
            if(!container) {
                return
            }
            container.remove()
        }
    },[graphRef.current])

    return (
        <Page>
            <div id="wordGraphContainer"  ref={graphRef}  style={{width: "100%", height: "100%"}}>

            </div>
        </Page>
    )
}

export default WordGraph