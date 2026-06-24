function positiveSum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (num > 0) {
            sum = sum + num
            
        }
    }
    return(sum)
}
positiveSum([1, -4, 7, 12])