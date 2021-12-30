import { useRef, useEffect } from "react";
import Page from "./Page";
import { useNavigate } from "react-router-dom";

const WordGraph = ({ data }) => {
    const navigate = useNavigate()
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
            navigate(`/peryeargraph:${e.point.get("x")}`, { replace: true })
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