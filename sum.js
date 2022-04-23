import head from "./LinkedList.js"


// This is the iterative solution
function sum1(head){
    let sum = 0
    let current = head

    while(current !== null){
        sum += current.value
        current = current.next
    }

    return sum
}

// This is the recursive solution
// function sum2(head){
//     if(head === null) return 0
//     return head.value + sum2(head.next)
// }
const sum2 = head => head === null ? 0 : head.value + sum2(head.next)

console.log(sum2(head))
