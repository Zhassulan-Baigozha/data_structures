class Queue {
  constructor() {
    this.items = {}
    this.frontIndex = 0
    this.backIndex = 0
  }
// {
// // 0: 0,
// 1: 3,
// 2: 5
// }
  enqueue(item) {
    this.items[this.backIndex] = item
    this.backIndex++
    return item + ' inserted'
  }

  dequeue() {
    const item = this.items[this.frontIndex]
    delete this.items[this.frontIndex]
    this.frontIndex++
    return item
  }

  peek() {
    return this.items[this.frontIndex]
  }

  printQueue() {
    return this.items;
  }
}

const queue = new Queue()
console.log(queue.enqueue(7))

console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.printQueue());
