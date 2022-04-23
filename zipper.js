import head, { head2 } from "./LinkedList.js"


// This is the iterative solution
function zipper(head1, head2){
    let tail = head1
    let current1 = head1.next
    let current2 = head2
    let count = 0

    while(current1 !== null && current2 !== null){
        if(count % 2 === 0) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1
            current1 = current1.next
        }
        tail = tail.next
        count++
    }

    if(current1 === null) tail.next = current2
    else if(current2 === null) tail.next = current1


    return head1
}

function zipper2(head1, head2){
    if(head1 === null && head2 === null) return null
    if(head1 === null) return head2
    if(head2 === null) return head1

    let next1 = head1.next
    let next2 = head2.next

    head1.next = head2
    head2.next = zipper2(next1, next2)

    return head1
}