# ReactProj3

This project is a demonstration of my knowledge regarding React State/Effect functionality and also functions as a simple CRUD demonstration for react as well.
The end-user can increment the count of the main integer at the top of the page, in addition to multiplying or dividing their current count with a random integer grabbed 
from a Python API called "Random Number API" (See here: https://github.com/jameskozlowski/randomnumberapi). 

This is where React's useEffect method comes in, as I make the call to the API each time the page is loaded with Axios. In addition, I use a Hook to update the state of the header field where the random number is loaded! When Axios whips up an async get request to the API, the browser will just be waiting for the request to make a return since it's all async. During this time, "Loading Number..." is displayed in lieu of the promised "Your random number is: " followed by the random number. 

Finally, the user can save counts at any time in a list at the bottom of the page.

Further comments can be seen in the code.

P.S. Special thanks to James Kozlowski for this API! 

![image](https://user-images.githubusercontent.com/60994655/210630419-70c6ddc0-75a2-4230-8d58-f1437ca8953d.png)

