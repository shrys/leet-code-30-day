var Node = function (value) {
    this.value = value;
    this.next = null;
    this.prev = null;
};

/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
    this.nodemap = new Map();
    this.count = 0;
    this.head = null;
    this.tail = null;

    for (let item of nums) {
        this.add(item);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    // console.log(this.nodemap, this.head, this.tail);
    if (this.count === 0) {
        return -1;
    }
    return this.head.value;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    if (this.nodemap.has(value)) {
        if (this.nodemap.get(value).value === null) {
            return;
        }
        this.count -= 1;
        return this.delete(value);
    }
    this.count += 1;
    const add_node = new Node(value);
    this.nodemap.set(value, add_node);
    if (!this.head) {
        this.head = add_node;
        this.tail = add_node;
    } else {
        this.tail.prev = add_node;
        add_node.next = this.tail;
        this.tail = add_node;
    }
};

FirstUnique.prototype.delete = function (value) {
    if (this.nodemap.size === 0) return false;
    const del_node = this.nodemap.get(value);
    if (del_node.prev) {
        // Deleted Node is Middle Node
        if (del_node.next) {
            del_node.next.prev = del_node.prev;
            del_node.prev.next = del_node.next;

            // Deleted Node is Head Node
        } else {
            del_node.prev.next = null;
            this.head = del_node.prev;
        }
    } else {
        // Deleted Node is Tail Node
        if (del_node.next) {
            del_node.next.prev = null;
            this.tail = del_node.next;

            // Deleted Node is lonely Node :(
        } else {
            this.head = null;
            this.tail = null;
        }
    }
    del_node.value = null;
};

FirstUnique.prototype.printQueue = function () {
    if (!this.head) return [];
    let current = this.head;
    const queue = [current.value];
    while (current.prev) {
        current = current.prev;
        queue.push(current.value);
    }
    return queue;
};
FirstUnique.prototype.printNodemap = function () {
    return Array.from(this.nodemap.entries()).map(([k, v]) => ({
        k,
        v: v.value,
    }));
};
  /**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
