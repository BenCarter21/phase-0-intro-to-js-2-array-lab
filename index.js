// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
   cats.pop() 
}
function destructivelyRemoveFirstCat(){
   cats.shift()
}
function appendCat(name) {
    const extraCat = [...cats]
    extraCat.push(name)
    return extraCat
}
function prependCat(name) {
    const extraCatTwo = [...cats]
    extraCatTwo.unshift(name)
    return extraCatTwo
}
function removeLastCat() {
    const extraCatTwo = [...cats]
    extraCatTwo.pop()
    return extraCatTwo
}
function removeFirstCat() {
    const extraCatTwo = [...cats]
    extraCatTwo.shift()
    return extraCatTwo
}