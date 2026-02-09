const res = new Promise((res, rej) => {
    const rdm = Math.random();

    setTimeout(() => {
        if (rdm > 0.5) {
            res(rdm)
        } else {
            rej(rdm)
        }
    }, 1000)
})
res.then((val) => {
    console.log(val)
    console.log('done')
})

class MinHead {

    constructor() {
        this.heap = []
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(val) {
        this.heap.push(val)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            if (this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
                this.swap(index, Math.floor((index - 1) / 2))
                index = Math.floor((index - 1) / 2)
            } else {
                break;
            }
        }
    }
}