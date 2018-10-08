---


---

<h1 id="sorting-algorithm">Sorting Algorithm</h1>
<h2 id="bubble-sorting">Bubble sorting</h2>
<p>How it works:</p>
<p><strong>step-1</strong>: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.<br>
<strong>step-2:</strong> And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.<br>
<strong>step-3:</strong> we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.<br>
<strong>step-4:</strong> Look at the inner loop in the code below.<br>
<strong>step-5:</strong> We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.<br>
<strong>step-6:</strong> and then we move backward inside the outer loop.</p>
<h2 id="selection-sorting">Selection sorting</h2>
<p>how does it works: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array. Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element. thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.</p>

