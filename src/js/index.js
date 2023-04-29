

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondCounter from "./component/secondCounter.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";

//counters
let counters ={
 counter1 :0,
 counter2 :0,
 counter3 :0,
 counter4 :0,
 counter5 :0,
 counter6 :0,
}
//setInterval function
let interval=1000;
setInterval (() => {
    counters.counter1 ++;
    if (counters.counter1===10){
        counters.counter1=0;
        counters.counter2++;
    }
    if (counters.counter2===6){
        counters.counter2=0;
        counters.counter3++;
    }
    if (counters.counter3===10){
        counters.counter3=0;
        counters.counter4++;
    }
    if (counters.counter4===6){
        counters.counter4=0;
        counters.counter5++;
    }
    if (counters.counter5===10){
        counters.counter5=0;
        counters.counter6++;
    }
    if (counters.counter6===2 && counters.counters5===4){
        counters.counter6=0;
        counters.counter5=0;
    }
    ReactDOM.render(<SecondCounter counters= {counters}/>, document.querySelector("#app"));
},interval)

//render your react application
ReactDOM.render(<SecondCounter counters= {counters}/>, document.querySelector("#app"));
