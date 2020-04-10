/**
 * initialize your data structure here.
 */
const MinStack = function () {
    this.stack = [];
    this.topIndex = -1;
    this.min = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    // console.log(x + ' pushed');
    if (this.topIndex === -1) {
        this.topIndex++;
        this.min = x;
        this.stack.push(x);
        // console.log(this);
        return;
    }
    if (x < this.min) {
        this.stack.push(2 * x - this.min);
        this.min = x;
    } else {
        this.stack.push(x);
    }
    this.topIndex++;
    // console.log(this);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.topIndex === -1) {
        // console.log('stack is empty');
        return;
    }
    const t = this.stack[this.topIndex];
    if (t < this.min) {
        this.min = 2 * this.min - t;
    } else if (this.topIndex === 0) {
        this.min = undefined;
    }
    this.topIndex--;
    this.stack.splice(this.stack.length - 1, 1)[0];
    // console.log(t + ' popped');
    // console.log(this);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const t = this.stack[this.topIndex];
    const top = t < this.min ? this.min : t;
    // console.log(top + ' is top');
    // console.log(this);
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    const min = this.topIndex === -1 ? undefined : this.min;
    // console.log(min + ' is min');
    // console.log(this);
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 */
const obj = new MinStack();
const x = 1;
obj.push(x);
obj.pop();
const param_3 = obj.top();
const param_4 = obj.getMin();

// console.log('--------');

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // --> Returns -3.
minStack.pop();
minStack.top(); // --> Returns 0.
minStack.getMin(); // --> Returns -2.

// console.log('--------');

const in1 = ["push", "push", "push", "top", "pop", "getMin", "pop", "getMin", "pop", "push", "top", "getMin", "push", "top", "getMin", "pop", "getMin"];
const in2 = [[2147483646], [2147483646], [2147483647], [], [], [], [], [], [], [2147483647], [], [], [-2147483648], [], [], [], []];

const s = new MinStack();
in1.forEach(function (f, i) {
    s[f].call(s, ...in2[i]);
});
