import Util from './Util';
import shows from './shows.json'
import groupMeans from './groupMeans.json'
import indieMeans from './indieMeans.json'
import dict from './dict.json'

const phrases = []
const choreographers = []
const dancers = []
let wordsCount = {}
let minYear = 2500
let maxYear = 0

function addWords(text) {
    let wordsInRow = text.split(' ')
    let keyWordsInRow = wordsInRow.map(wordInRow => {
        if(dict[wordsInRow]){
            return dict[wordInRow]
        } else {
            return wordInRow
        }
    })
    keyWordsInRow.map((word) => {
        if(!wordsCount[word]) {
            wordsCount[word] = 1
        } else {
            wordsCount[word] = wordsCount[word] + 1
        }
    })
}

function addPhrases(text) {
    var ps = text.split('.')
    ps.map(p => {
        while(p[0] === ' ') {
            p = p.substring(1)
        }
        if(p.length > 0) {
            phrases.push(p)
        }
    })
}

const Data = {
    addNewShow() {
        //shows.push(show) not suppurted for now
    },

    checkRange(year) {
        let yearNum = parseInt(year)
        if(yearNum < minYear) {
            minYear = yearNum
        }
        if(yearNum > maxYear) {
            maxYear = yearNum
        }
    },


    getShows() { return shows },

    getWordsCount() { 
        wordsCount = {}
        shows.map(show => {
            if(show) {
                const text = show.Text
                if(text && text.length > 1) {
                    addWords(text)
                }
            }
        })
        return wordsCount
    },

    getPhrases() { return phrases },
    
    getMinYear() { return minYear },

    getMaxYear() { return maxYear },

    getChoreographers() {
        let ans = []
        shows.map(show => {
            if(show) {
                const showCs = show.Choreographer
                if(showCs && showCs.length > 1){
                    let cleanCs = showCs.split(',')
                    cleanCs = Util.removeEndsList(cleanCs)
                    ans = Util.concatSet(ans, cleanCs)
                }
            }
        })
        return ans
    },

    getGroupMeans(){ return groupMeans },

    getIndieMeans(){ return indieMeans },

    getDict() { return dict }
}

export default Data
