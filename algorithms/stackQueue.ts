// Stack Implementation using Array

class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Push element to top
    push(element: T): void {
        this.items.push(element);
    }

    // Remove and return top element
    pop(): T | undefined {
        return this.items.pop();
    }

    // Return top element without removing
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return size
    size(): number {
        return this.items.length;
    }

    // Clear stack
    clear(): void {
        this.items = [];
    }

    // Print stack
    print(): void {
        console.log(this.items.join(' <- '));
    }
}

// Queue Implementation using Array

class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Add element to end
    enqueue(element: T): void {
        this.items.push(element);
    }

    // Remove and return first element
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Return first element without removing
    front(): T | undefined {
        return this.items[0];
    }

    // Check if empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return size
    size(): number {
        return this.items.length;
    }

    // Clear queue
    clear(): void {
        this.items = [];
    }

    // Print queue
    print(): void {
        console.log(this.items.join(' <- '));
    }
}

// Example usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // 1 <- 2 <- 3
console.log(stack.pop()); // 3
stack.print(); // 1 <- 2

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // 1 <- 2 <- 3
console.log(queue.dequeue()); // 1
queue.print(); // 2 <- 3

export { Stack, Queue };