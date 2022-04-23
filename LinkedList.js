let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let list2 = [10, 11, 12, 13, 14]

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

function createLinkedList(array){
    let nodeList = []
    for(let i = 0; i < array.length; i++){
        let node = new Node(array[i])
        nodeList.push(node)
    }
    for(let i = 0; i < nodeList.length - 1; i++){
        nodeList[i].next = nodeList[i + 1]
    }

    return nodeList[0]
}

let head = createLinkedList(list)
export let head2 = createLinkedList(list2)

function traverseLinkedList(head){
    let current = head
    while(current !== null){
        console.log(current.value)
        current = current.next
    }
}

// traverseLinkedList(head)

export default head