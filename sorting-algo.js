/*  Bubble sorting
How it works:

step-1: you compare the first item with the second. If the first item is bigger than the second item. 
you swap them so that the bigger one stays in the second position.

step-2: And then compare second with third item. if second item is bigger than the third, we swap them. 
otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

step-3: we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest 
item of the array to the right most position of the array.

step-4: Look at the inner loop in the code below.

step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. 
We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

step-6: and then we move backward inside the outer loop.    */

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

/*  Selection Sorting
how does it works: This is very simple. Go through the array, find the index of the lowest element swap 
the lowest element with the first element. Hence first element is the lowest element in the array. Now go 
through the rest of the array (excluding the first element) and find the index of the lowest and swap it 
with the second element. thats how it continues to select (find out) the lowest element of the array 
and putting it on the left until it hits the last element.
*/

function selectionSort(arr) {
    var minIdx, temp,
        len = arr.length;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

// showing Bubble sort
console.log(`Bubble sort ${bubbleSort([100,5,2,4,3,9])}`)
// showing Selection sort
console.log(`Selection sort ${selectionSort([66,32,45,1,16,105,44])}`)