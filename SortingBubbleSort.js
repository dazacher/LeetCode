function countSwaps(a) {
    var swapCount = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                
                [a[j], a[j + 1]] = [a[j + 1], a[j]];

                swapCount++;                
            }
        }
    }
    console.log ("Array is sorted in " + swapCount + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length -1]);

}
