import head from "./LinkedList.js"

//  This is the iterative solution
function reverse1(head){
    let current = head
    let prev = null

    while(current !== null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}


function reverse2(head, prev=null){
    if(head === null) return prev
    let next = head.next
    head.next = prev
    return reverse2(next, head)
}

console.log(reverse2(head).next.value)