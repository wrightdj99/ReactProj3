/* Time for hooks! React hooks allow us to utilize (the "hook into" phrasing on the React site is a bit weird) 
functions that manage state and lifecycle features to our greater project. These can be useState, useEffect, 
and of course you can build your own, too. The two important things to know about React hooks are as follows:

1. No more class constructors. React hooks only work in function-based components and their whole point is to
eliminate all the constructor(props)-parent-component-class song and dance. 

2. We can easily sidestep infinite loops regarding state. Because of the way that hooks are built, we can
now update the state multiple times by simply passing a reference to a function that updates the state as opposed
to just calling it literally multiple times over. I'm really glad I devoted a bit of time to using function pointers in my code back
in college!*/

import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';

const baseRequest = 'http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=1&max=100&count=0';

function App(){
    //first arg: the var that will be updated. Second arg: the function that will update it.
    //then our assignment to useState() will return two things: the state of the first arg, and a 
    //handy reference to the second arg function that updates the state of the first.
    //useState is really there to say "Here is the state of this variable, and a function to further update it"
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const [loading, setLoading] = useState(true);

    //useEffect is loaded each time the page is rendered. useState deals with state, useEffect deals with the lifecycle of the page.
    //One way in which useEffect might prove useful is if you wanted to go fetch some data from an API as soon as the page loads.
    useEffect((num, loading)=>{
      axios.get(baseRequest)
      .then(res => {
        setLoading(false);
        setNum(res.data[0]);
        console.log(res.data);
        console.log(loading);
      })
    }, [])
    
    return (
      <div className="App">
         <p>{loading ? "Loading..." : "Your random number is: " + num}</p>
        <h1>Welcome to the World's Greatest Counter!</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <br/>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <br/>
        <h1>{count}</h1>
      </div>
    );
  }

export default App;
