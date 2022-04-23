import head from "./LinkedList.js"


function find1(head, target){
    let index = 0
    let current = head

    while(current !== null){
        if(current.value === target) return index
        index++
        current = current.next
    }

    return -1
}
// return true or false
// function find2(head, target, index=0){
//     if(head === null) return false
//     if(head.value === target) return true
//     return find2(head.next, target, index++)
//     // return find2(head.next, target, index++)
    
// }

function find2(head, target){
    let index = 0

    index = getIndex(head, target, index)

    return index
}

// Recursive solution
function getIndex(head , target, index){
    if(head === null) return
    if(head.value === target) return index
    index++
    return getIndex(head.next , target, index)
}

console.log(find2(head, 9))