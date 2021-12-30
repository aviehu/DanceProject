import Data from "./Data"

function dictText(text) {
    const ans = []
    const words = text.split(' ')
    words.map((word) => {
        const keyWord = Data.getDict()[word]
        if(keyWord) {
            ans.push(keyWord)
        } else {
            ans.push(word)
        }

    })
    return ans.join(' ')
}

function removeEnds(word){
    const toRemove = [' ', '.' , ',', '\'', '(', ')']
    let ans = word
    while(toRemove.includes(ans[0]) || toRemove.includes(ans[ans.length - 1])) {
        if(toRemove.includes(ans[0])) {
            ans = ans.substring(1)
        } else {
            ans = ans.substring(0,ans.length - 1)
        }
    }
    return ans
}

const Util = {
    splitStr(str){
        if(str && str.length > 0) {
            let ans = str.split(', ')
            if (ans.length === 1) {
                return str.split(',')
            } else {
                return ans
            }
        }
    },

    getRandomInt(max){
        return Math.floor(Math.random() * max);
    },

    makeClique(nodes){
        const edges = []
        nodes.map((nodeOne, i) => {
            nodes.map((nodeTwo, j) => {
                if (j > i) {
                    edges.push({from: nodeOne, to: nodeTwo})
                }
            })
        })
        return edges
    },

    makeCliqueId(nodes, id){
        const edges = []
        nodes.map((nodeOne, i) => {
            nodes.map((nodeTwo, j) => {
                if (j > i) {
                    edges.push({from: nodeOne + '' + id, to: nodeTwo + '' + id})
                }
            })
        })
        return edges
    },

    concatSet(arr1, arr2){
        let obj = {}
        if(arr1) {
            arr1.map(a => {
                if (!obj[a] && a.length > 0) {
                    obj[a] = true
                }
            })
        }
        if(arr2) {
            arr2.map(a => {
                if (!obj[a] && a.length > 0) {
                    obj[a] = true
                }
            })
        }
        return Object.keys(obj)
    },

    countInString(word, string){
        let count = 0
        let str = dictText(string)
        const len = string.split(' ')
        const keyWord = Data.getDict()[word]
        while (str && str.length > 1 && str.search(word) > 0) {
            count ++
            str = str.substring(keyWord.length + str.search(keyWord))
        }
        return {numOfIns: count, numOfWords: len.length}
    },

    removeEnds(word){
        const toRemove = [' ', '.' , ',', '\'', '(', ')']
        let ans = word
        while(toRemove.includes(ans[0]) || toRemove.includes(ans[ans.length - 1])) {
            if(toRemove.includes(ans[0])) {
                ans = ans.substring(1)
            } else {
                ans = ans.substring(0,ans.length - 1)
            }
        }
        return ans
    },

    removeEndsList(list){
        if(list) {
            return list.map((l) => {
                return removeEnds(l)
            })
        }
        return [];
    },

    differentOfLists(removeFromList, otherList){
        const ans = []
        removeFromList.map((a) => {
            if(!otherList.includes(a)) {
                ans.push(a)
            }
        })
        return ans
    }

}

export default Util
