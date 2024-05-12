function counts(arr, K, L) {
    let count = 0;
    for (let i = K; i <= L; i++) {
        count += arr[i];
    }
    return count;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let K = 2;
let L = 5;

let result = counts(arr, K, L);
console.log("Yig'indi:", result);