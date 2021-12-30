import Data from "./Data.js"
import Util from "./Util.js"

function getHebEngPerYear(heb) {
    const shows = Data.getShows()
    let yearToCount = {}
    const ans = []
    shows.map((show) => {
        const year = show.Year
        const text = show['Piece Name']
        if (year && year.length > 0 && text && text.length > 0) { 
            const firstChar = text.charAt(0)
            if(firstChar >= 'a' && firstChar <= 'z' || firstChar >= 'A' && firstChar <= 'Z') {
                if(!heb) {
                    if(yearToCount[year]) {
                        yearToCount[year].numOfShows = yearToCount[year].numOfShows + 1
                        yearToCount[year].totalNumOfLan = yearToCount[year].totalNumOfLan + 1 
                     } else {
                         yearToCount[year] = {numOfShows: 1, totalNumOfLan: 1}
                     }
                } else  {
                    if(yearToCount[year]) {
                        yearToCount[year].numOfShows = yearToCount[year].numOfShows + 1
                    } else {
                        yearToCount[year] = {numOfShows: 1, totalNumOfLan: 0}
                    }
                }
            } else {
                if(heb) {
                    if(yearToCount[year]) {
                        yearToCount[year].numOfShows = yearToCount[year].numOfShows + 1
                        yearToCount[year].totalNumOfLan = yearToCount[year].totalNumOfLan + 1 
                     } else {
                         yearToCount[year] = {numOfShows: 1, totalNumOfLan: 1}
                     }
                } else  {
                    if(yearToCount[year]) {
                        yearToCount[year].numOfShows = yearToCount[year].numOfShows + 1
                    } else {
                        yearToCount[year] = {numOfShows: 1, totalNumOfLan: 0}
                    }
                }
            }
        }
    })
    console.log(yearToCount)
    Object.keys(yearToCount).map((year) => {
        ans.push([year, yearToCount[year].totalNumOfLan / yearToCount[year].numOfShows])
    })
    return ans
}

const Controller = {
    getRandomParagraph() {
        const shows = Data.getShows()
        var numOfShows = 5;
        var answer = []
        while(numOfShows > 0) {
            const rndShow = shows[Util.getRandomInt(shows.length)]
            const phrases = rndShow.Text.split('.')
            const rndPhrase = phrases[Util.getRandomInt(phrases.length)]
            const creator = rndShow['Choreographer']
            if (rndPhrase && rndPhrase.length > 2) {
                answer.push({phrase: Util.removeEnds(rndPhrase), creator: creator})
                numOfShows--
            }
        }
        return answer;
    },

    getHebEng() {
        const shows = Data.getShows()
        let heb = 0
        let eng = 0
        shows.map((show) => {
            const year = show.Year
            const text = show['Piece Name']
            if (year && year.length > 0 && text && text.length > 0) {
                const firstChar = text.charAt(0)
                if(firstChar >= 'a' && firstChar <= 'z' || firstChar >= 'A' && firstChar <= 'Z') {
                    eng++
                } else {
                    heb++
                }
            }
        })
        return {title:'', graphData: [{x: 'עברית', value: heb}, {x: 'אנגלית', value: eng}]}
    },

    getAvgQoutesInText() {
        let yearToCount = {}
        const shows = Data.getShows()
        shows.map((show) => {
            const year = show.Year
            const qoute = show.quote
            if (year && year.length > 0 ) {
                if (qoute) {
                    if(yearToCount[year]) {
                        yearToCount[year].numOfShows = yearToCount[year].numOfShows + 1
                        yearToCount[year].totalNumOfQoutes = yearToCount[year].totalNumOfQoutes + 1 
                     } else {
                         yearToCount[year] = {numOfShows: 1, totalNumOfQoutes: 1}
                     }
                } else {
                    if(yearToCount[year]) {
                        yearToCount[year].numOfShows = yearToCount[year].numOfShows + 1
                     } else {
                         yearToCount[year] = {numOfShows: 1, totalNumOfQoutes: 0}
                     }
                }
            }
        })
        const ans = []
        const years = Object.keys(yearToCount)
        years.map((year) => {
            ans.push([year, yearToCount[year].totalNumOfQoutes / yearToCount[year].numOfShows])
        })
        console.log(ans)
        return ans
    },

    getAvgWordsInText(){
        let yearToCount = {}
        const shows = Data.getShows()
        shows.map((show) => {
            const year = show.Year
            const text = show.Text
            if (text && year && year.length > 0) {
                if(yearToCount[year]) {
                   yearToCount[year].numOfShows = yearToCount[year].numOfShows + 1
                   yearToCount[year].totalNumOfWords = yearToCount[year].totalNumOfWords + text.split(' ').length 
                } else {
                    yearToCount[year] = {numOfShows: 1, totalNumOfWords: text.split(' ').length}
                }
            }
        })
        const ans = []
        const years = Object.keys(yearToCount)
        years.map((year) => {
            ans.push([year, yearToCount[year].totalNumOfWords / yearToCount[year].numOfShows])
        })
        return ans
    },

    getRandShow(){
        const shows = Data.getShows()
        const choice = Util.getRandomInt(shows.length);
        return shows[choice]
    },

    getWordsCount(){
        const wordsCount = Data.getWordsCount()
        const answer = []
        const keys = Object.keys(wordsCount)
        keys.map((key) => {
            if(wordsCount[key] > 1 && key.length > 2) {
                answer.push({x: key, value: wordsCount[key]})
            }
        })
        return answer
    },

    getAvgWordPerYear(word){
        if(word == 'lan') {
            return getHebEngPerYear(false)
        }
        let yearToCount = {}
        const shows = Data.getShows()
        shows.map((show) => {
            const year = show.Year
            const text = show.Text
            if (text && year && year.length > 0) {
                const countShow = Util.countInString(word, text)
                if(yearToCount[year]) {
                    yearToCount[year] = {numOfIns: yearToCount[year].numOfIns + countShow.numOfIns, numOfWords: yearToCount[year].numOfWords + countShow.numOfWords}
                } else {
                    yearToCount[year] = {numOfIns: countShow.numOfIns, numOfWords: countShow.numOfWords}
                }
            }
        })
        const ans = []
        const years = Object.keys(yearToCount)
        years.map((year) => {
            ans.push([year, yearToCount[year].numOfIns / yearToCount[year].numOfWords, yearToCount[year].numOfIns])
        })
        return ans
    },

    getFirstNG(){
        const Cs = Data.getChoreographers()
        const nodes = Cs.map((c) => {
           return {id: c, group: 'Cs', x: Util.getRandomInt(1200), y: Util.getRandomInt(600)}
        })
        return {nodes: nodes, edges: []}
    },

    getSecondNG(){
        const shows = Data.getShows()
        let nodes = []
        let edges = []
        shows.map((show, i) => {
            const Cs = show.Choreographer.split(',')
            const Ds = show.Dancers.split(',')
            let cleanCs = Util.removeEndsList(Cs)
            let cleanDs = Util.removeEndsList(Ds)
            cleanDs = Util.differentOfLists(cleanDs, cleanCs)
            cleanCs.map((c) => {
                if(c && c.length > 0) {
                    const id = c + '' + i
                    nodes.push({id: id, name: c, group: 'Cs'})
                }
            })
            cleanDs.map((d) => {
                if(d && d.length > 0) {
                    const id = d + '' + i
                    nodes.push({id: id, name: d, group: 'Ds'})
                }
            })
            edges = edges.concat(Util.makeCliqueId(Util.concatSet(cleanCs, cleanDs), i))
        })
        return {nodes: nodes, edges: edges}
    },

    getThirdNG(){
        const shows = Data.getShows()
        let totalCs = []
        let totalDs = []
        let nodes = []
        let edges = []
        shows.map((show) => {
            const Cs = show.Choreographer.split(',')
            const Ds = show.Dancers.split(',')
            let cleanCs = Util.removeEndsList(Cs)
            let cleanDs = Util.removeEndsList(Ds)
            cleanDs = Util.differentOfLists(cleanDs, cleanCs)
            totalCs = totalCs.concat(Util.differentOfLists(cleanCs , totalCs))
            totalDs = totalDs.concat(Util.differentOfLists(cleanDs , totalDs))
            const cliqueNodes = Util.concatSet(cleanCs, cleanDs)
            let cliqueEdges = Util.makeClique(cliqueNodes)
            edges = edges.concat(cliqueEdges)
        })
        totalDs = Util.differentOfLists(totalDs, totalCs)
        totalCs.map((c) => {
            if(c && c.length > 0) {
                nodes.push({id: c, group: 'Cs'})
            }
        })
        totalDs.map((d) => {
            if(d && d.length) {
                nodes.push({id: d, group: 'Ds'})
            }
        })
        return {nodes: nodes, edges: edges}
    },

    getGroupMeans(){ return Data.getGroupMeans() },

    getIndieMeans(){ return Data.getIndieMeans() },

    addShow(show){ Data.addNewShow(show) }
}

export default Controller