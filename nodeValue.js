import head from "./LinkedList.js"

// This is the iterative solution
function value(head, index){
    let current = head

    while(head !== null){
        if(index === 0) return current.value
        index--
        current = current.next
    }

    return "Not Found"
}


function value2(head, index){
    if(head === null) return "Not Found"
    if(index === 0) return head.value

    index--
    return value2(head.next, index)
}

console.log(value2(head, 7))