import Page from './Page';
import NetworkGrap from './NetworkGraph'
import { useEffect, useState } from 'react';
import GraphButtons from './GraphButtons';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { CircularProgress, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const Network = () => {
    const [data, setData] = useState({})
    const [type, setType] = useState(1)
    const [search, setSearch] = useState('')
    const [showJob, setShowJob] = useState(false)
    let { start } = useParams();

    useEffect(() => {
        if(start.length>1) {
            loadthird()
        } else {
            loadFirst()
        }
    }, [])

    const loadGraph = async (url, type) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(url, requestOptions)
        const data = await response.json()
        let newNodes = data.nodes
        if(search.length > 2) {
            newNodes = newNodes.map((node) => {
                let ans = node
                if(node.id.startsWith(search)) {
                    ans.normal = {height: 40}
                    if (type === 2) {
                        ans.normal.height = 5
                    }
                    if (type === 3) {
                        ans.normal.height = 10
                    }
                } else {
                    delete ans.normal
                }
                return ans
            })
            setData({nodes: newNodes, edges:data.edges})
        } else {
            setData(data)
        }
        setType(type)
    }

    const loadFirst = () => {
        setData({})
        loadGraph('http://localhost:8080/firstng', 1)
    }

    
    const loadSecond = () => {
        setData({})
        loadGraph('http://localhost:8080/secondng', 2)
    }

    
    const loadthird = () => {
        setData({})
        loadGraph('http://localhost:8080/thirdng', 3)
    }

    const runSearch = () => {
        if (type === 1) {
            loadFirst()
        } else if (type === 2) {
            loadSecond()
        } else {
            loadthird()
        }
    }

    const hideOrShow = () => {
        setShowJob(!showJob)
        runSearch()
    }

    return (
        <Page>
            {data.edges ? 
            <div>
                <Stack direction="row" style={{position: 'fixed', right: 0, top: 15, zIndex:99}}>
                    <Button onClick={hideOrShow}>{showJob ? 'הסתר תפקידים' : 'הצג תפקידים' }</Button>
                    <Button onClick={runSearch}>חפש</Button>
                    <TextField autoComplete='off' id="outlined-basic" label="חיפוש" value={search} onChange={(a)=>{setSearch(a.target.value)}} variant="outlined" />
                    <GraphButtons first={loadFirst} second={loadSecond} third={loadthird}/> 
                </Stack>
                <NetworkGrap showJob={showJob} data={data} type={type} search={search}/>
            </div> : 
            <Box sx={{ display: 'flex' }}>
                <CircularProgress indeterminate disableShrink/>
            </Box>
            }
        </Page>
    );
};
export default Network;