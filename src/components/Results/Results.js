// import "./Results.scss";
// import { useState } from 'react';


// function Results({ dueback }) {

//     const [resultsHeading, setResultsHeading] = useState("");
//     const [resultsText, setResultsText] = useState("");
//     const [resultsNumber, setResultsNumber] = useState("");


//     setResultsHeading("The due back is...");

//     if (dueback >= 0) {
//         setResultsNumber("$" + dueback);
//         setResultsText("The house owes you!");
//     } else {
//         dueback *= -1;
//         setResultsNumber("-$" + dueback);
//         setResultsText("You owe the house!");
//     }

//     return (
//         <div className="calculator__results">
//             <h2>{resultsHeading}</h2>
//             <h3>{resultsNumber}</h3>
//             <h2>{resultsText}</h2>
//         </div>
//     )
// }

// export default Results;