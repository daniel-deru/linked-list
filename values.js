import head from "./LinkedList.js"

// This is the recursive solution
function toArray1(head, list=[]){
    let current = head

    if(current === null) return

    list.push(current.value)
    toArray1(current.next, list)

    return list
}

//  this is the iterative solution
function toArray2(head){
    let list = []
    let current = head

    while(current !== null){
        list.push(current.value)
        current = current.next
    }

    return list
}

console.log(toArray2(head))