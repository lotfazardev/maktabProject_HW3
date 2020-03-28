//++++++++++++++++++++++++++ the sky is the limit ++++++++++++++++++++++++++//

/* --coded by mohammad hossien lotfazar-- 
    --M. SHOBERI master of this course--    
*/
//question1
let deleteByIndex = (array, index) => array.filter((element, Index)=> Index - index)

//question2
function combineArrays(){
    let tmp = []
    for(let i in arguments){
        tmp.push(...arguments[i])
    }
    return tmp.sort()
}
//question3
let flatArray = (array = [], ans = []) => {
    for(let i of array){
        typeof i == "number" ? ans.push(i) : flatArray(i , ans)
    }
    return ans
}

//question4
let findByItem = (array = [], item) => {
    let ans = {index:-1, item: item}
    for(let i in array){
        if(array[i]==item) ans.index = i
    }
    return ans
}

//question5
replaceByItem = (array = [], currentItem, newItem) => {
    for(let i in array){
        if(array[i] == currentItem){
            array[i] = newItem
            break;
        }
    }
    return array
}

//question6
findNumInArray = (argStr = "") => argStr.split(" ").filter((elem)=> +elem)

//question7
removeDuplicate = (array) => [...new Set(array)]

// ---------------------- !! mission accomplished !!---------------------- //

/* tests
console.log(deleteByIndex(["a","b","c"], 1))
console.log(combineArrays([1,2,3], [4,5,6], [9,8,7,0] ))
console.log(flatArray([[2,3],5,[[[2,9],4],4],1,0]))
console.log(findByItem([2,3,4], 3))
console.log(replaceByItem( ['a','b','c','d','e','f'] , 'e','t'))
console.log(findNumInArray("i have 2 apples and 3 pineapples"))
console.log(removeDuplicate([1,1,4,5,3,5,3,9]))
*/
