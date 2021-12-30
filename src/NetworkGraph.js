import { useRef, useEffect} from "react";
import Page from "./Page";

const NetworkGrap = ({ showJob, data, type }) => {
    const graphRef = useRef()

    useEffect(() => {
        if (!graphRef.current) {
            return
        }
        graphRef.current.innerHTML = ""
        let container;
        const chart = window.anychart.graph(data);
        chart.layout().iterationCount(250);
        chart.nodes().normal().height(1)
        chart.nodes().normal().stroke(0.4)
        chart.edges().normal().stroke('#1bc9b6', 0.1);
        chart.fit();
        if(showJob) {
            const Cs = chart.group('Cs')
            const Ds = chart.group('Ds')
            if(Ds) {
                Ds.normal().fill('#005f9e')
            }
            Cs.normal().fill('#da420f')
        } else {
            chart.nodes().normal().fill('#005f9e')
        }
        if(type === 1) {
            chart.layout().type("fixed");
            chart.nodes().normal().height(20)
            chart.nodes().normal().stroke(2)
        } else if (type === 2) {
            chart.nodes().tooltip().format(
                "{%name}"
                );

        } else {
            chart.nodes().normal().height(3)
        }
        container = chart.container("mainGraphContainer");
        container.draw();
        return () => {
            if(!container) {
                return
            }
            container.remove()
        }
    },[graphRef.current])
    

    return (
        <Page>            
            <div id="mainGraphContainer" ref={graphRef} style={{width: "100%", height: "100%"}}>
            </div>
        </Page>
    );
}

export default NetworkGrap;
