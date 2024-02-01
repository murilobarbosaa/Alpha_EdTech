function range(start, end) {
    if (end === undefined) {
        if (start <= 0) {
            return [];
        }
        return Array.from({ length: start }, (_, index) => index);
    } else {
        if (end <= start) {
            return [];
        }
        return Array.from({ length: end - start }, (_, index) => start + index);
    }
}

console.log(range(4));
console.log(range(3, 7));
console.log(range(7, 3));
console.log(range(0));
