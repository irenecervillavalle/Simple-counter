import React from "react";

//create your first component
const SecondCounter = (props) => {
	console.log (props);
			return (
				<div className="d-flex justify-content-center">
					<div className="clock  counter-fsize counter-container"><i className="fa-regular fa-clock"></i></div>
					<div className="counter-fsize counter-container">{props.counters.counter6}</div>
					<div className="counter-fsize counter-container">{props.counters.counter5}</div>
					<div className="counter-fsize counter-container">:</div>
					<div className="counter-fsize counter-container">{props.counters.counter4}</div>
					<div className="counter-fsize counter-container">{props.counters.counter3}</div>
					<div className="counter-fsize counter-container">:</div>
					<div className="counter-fsize counter-container">{props.counters.counter2}</div>
					<div className="counter-fsize counter-container">{props.counters.counter1}</div>
				</div>
			);																																																								
		};
export default SecondCounter;
