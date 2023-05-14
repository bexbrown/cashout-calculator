// import { useEffect } from "react";
import "./Calculator.scss";
import { useState } from 'react';

function Calculator() {

    const [resultsHeading, setResultsHeading] = useState("");
    // const [resultsText, setResultsText] = useState("");
    const [resultsNumber, setResultsNumber] = useState("");
    const [calculated, setCalculated] = useState(false);

    function submitHandler(event) {
        event.preventDefault();
        setResultsHeading("The due back is...")
        setCalculated(true);

        let netSales = parseFloat(event.target.netSales.value);
        let xferIn = parseFloat(event.target.xferIn.value);
        let xferOut = parseFloat(event.target.xferOut.value);
        let chargeTips = parseFloat(event.target.chargeTips.value);
        let bankDue = parseFloat(event.target.bankDue.value);
        let sommelierFee = parseFloat(event.target.sommelierFee.value);

        xferIn = xferIn / 1.13;
        netSales = netSales + xferIn;
        xferOut = xferOut / 1.13;
        netSales = netSales - xferOut;
        let tipOut = netSales * 0.075;
        let dueBack = tipOut + sommelierFee + bankDue - chargeTips;
        dueBack = dueBack.toFixed(2);

        // console.log(dueBack);

        // setDueback(dueBack);


        if (dueBack >= 0) {
            setResultsNumber("$" + dueBack);
            // setResultsText("(The house owes you)");
        } else {
            dueBack *= -1;
            setResultsNumber("-$" + dueBack);
            // setResultsText("(You owe the house)");
        }

        console.log(xferIn)
        console.log(xferOut)
        console.log(chargeTips)
        console.log(bankDue)
        console.log(sommelierFee);
    }

    return (

        <div className="calculator">
            <div className="calculator__container">
                <h1 className="calculator__title">Cash out Calculator</h1>
                <form className="calculator__form" onSubmit={submitHandler}>
                    <div className="calculator__row">
                        <label className="calculator__label">Net Sales</label>
                        <input type="number" name="netSales" required className="calculator__input" step="0.01" />
                    </div>
                    <div className="calculator__row">
                        <label className="calculator__label">Xfer In</label>
                        <input type="number" name="xferIn" required className="calculator__input" step="0.01" />
                    </div>
                    <div className="calculator__row">
                        <label className="calculator__label">Xfer Out</label>
                        <input type="number" name="xferOut" required className="calculator__input" step="0.01" />
                    </div>
                    <div className="calculator__row">
                        <label className="calculator__label">Charge Tips</label>
                        <input type="number" name="chargeTips" required className="calculator__input" step="0.01" />
                    </div>
                    <div className="calculator__row">
                        <label className="calculator__label">Bank Due</label>
                        <input type="number" name="bankDue" required className="calculator__input" step="0.01" />
                    </div>
                    <div className="calculator__row">
                        <label className="calculator__label">Som Fee</label>
                        <input type="number" name="sommelierFee" required className="calculator__input" step="0.01" />
                    </div>
                    <button className="calculator__button">Calculate</button>
                </form>

            </div>
            {calculated &&
                <div className="calculator__results">
                    <h2 className="calculator__heading">{resultsHeading}</h2>
                    <h3 className="calculator__number">{resultsNumber}</h3>
                    {/* <h3>{resultsText}</h3> */}

                </div>}
        </div >
    )
}

export default Calculator;