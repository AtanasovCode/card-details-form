import React, { useState } from 'react';
import CardFacePreview from './CardFacePreview';
import CardBackPreview from './CardBackPreview';
import handleCardNumber from './HandleCardNumber';
import { preventLetters, preventNumbers } from './PreventInput';
import iconComplete from '../assets/images/icon-complete.svg';


const FormValidation = () => {
    //Setting multiple state variables
    const [fullName, setFullName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [CVC, setCVC] = useState("");
    const [displayTY, setDisplayTY] = useState(0);

    const onSubmitBtn = () => {
        if (
            !fullName
            || cardNumber.length !== 19
            || expMonth.length !== 2
            || expYear.length !== 2
            || CVC.length !== 3
        ) {
            console.log("Some input field is empty");
            if(displayTY === 0) {
                setDisplayTY(displayTY + 1);
            }
            console.log(displayTY)
        } else {
            setDisplayTY(displayTY + 2);
            console.log("All input fields are full");
            console.log(displayTY)
        }
    }

    const onSubmitThankYou = () => {
        alert("This is the full design, refresh the page to input new info");
    }


    const display = () => {
        if (displayTY === 0 || displayTY === 1) {
            return (
                <div className="full-container">
                    <div className="left-panel"></div>
                    <div className="card-front-container">
                        <CardFacePreview
                            fullName={fullName}
                            cardNumber={cardNumber}
                            expMonth={expMonth}
                            expYear={expYear}
                        />
                    </div>
                    <div className="card-back-container">
                        <CardBackPreview CVC={CVC} />
                    </div>
                    <div className="right-panel">
                        <form className="input-container">
                            <label>
                                <div>
                                    Placeholder Name
                                </div>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g Jane Appleseed"
                                    onChange={(e) => { setFullName(e.target.value) }}
                                    className="wide-input name-input"
                                    //Only allow input of letters for full name
                                    onKeyPress={(e) => preventNumbers(e)}
                                />
                            </label>
                            <label className="card-number-label">
                                <div>
                                    Card Number
                                </div>
                                <input
                                    required
                                    //Max lenght to be 16 numbers
                                    maxLength="19" //16 plus 3 for the spaces
                                    type="text" //Has to be text so maxLength works
                                    placeholder="e.g 1234 5678 9123 4567"
                                    onChange={(e) => { setCardNumber(e.target.value) }}
                                    className="wide-input card-number-input"
                                    value={handleCardNumber(cardNumber)}
                                    //Function to only allow input of numbers
                                    onKeyPress={(e) => preventLetters(e)}
                                />
                            </label>
                            <label className="card-dates-container">
                                <div className="card-dates-info">
                                    <div>
                                        Exp. Date (MM/YY)
                                    </div>
                                    <div className="cvc">
                                        CVC
                                    </div>
                                </div>
                                <div className="card-dates-input">
                                    <input
                                        required
                                        //Max length to be 2
                                        maxLength="2"
                                        type="text"
                                        placeholder="MM"
                                        onChange={(e) => { setExpMonth(e.target.value) }}
                                        className="exp-input"
                                        //Only allow input of numbers
                                        onKeyPress={(e) => preventLetters(e)}
                                    />
                                    <input
                                        required
                                        //Max length to be 2
                                        maxLength="2"
                                        type="text"
                                        placeholder="YY"
                                        onChange={(e) => { setExpYear(e.target.value) }}
                                        className="exp-input"
                                        //Only allow input of numbers
                                        onKeyPress={(e) => preventLetters(e)}
                                    />
                                    <input
                                        required
                                        //Max length to be 3
                                        maxLength="3"
                                        type="text"
                                        placeholder="e.g 565"
                                        onChange={(e) => { setCVC(e.target.value) }}
                                        className="cvc-input"
                                        //Only allow input of numbers
                                        onKeyPress={(e) => preventLetters(e)}
                                    />
                                </div>
                            </label>
                            {displayTY === 1 &&
                                <div className="error-message">
                                    Please Fill The Input Fields Properly!
                                </div>}
                            <label>
                                <input
                                    type="button"
                                    value="Confirm"
                                    className="btn"
                                    onClick={onSubmitBtn}
                                />
                            </label>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="full-container">
                    <div className="left-panel"></div>
                    <div className="card-front-container">
                        <CardFacePreview
                            fullName={fullName}
                            cardNumber={cardNumber}
                            expMonth={expMonth}
                            expYear={expYear}
                        />
                    </div>
                    <div className="card-back-container">
                        <CardBackPreview CVC={CVC} />
                    </div>
                    <div className="right-panel">
                        <div className="ty-container">
                        <div className="completed-icon-container">
                            <img 
                                src={iconComplete}
                                alt="icon-complete"
                                className="icon-complete"
                            />
                        </div>
                        <div className="completed-heading">
                            <h1>THANK YOU!</h1>
                        </div>
                        <div>
                            <span>
                                We've added your card details
                            </span>
                        </div>
                        <div className="completed-btn">
                            <input 
                                type="button"
                                value="Continue"
                                onClick={onSubmitThankYou}
                                className="btn"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
    }


    return (
        <div>
            {display()}
        </div>
    );
}

export default FormValidation;