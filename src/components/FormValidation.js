import React, { useState, useEffect } from 'react';
import CardFacePreview from './CardFacePreview';
import CardBackPreview from './CardBackPreview';


const FormValidation = () => {
    //Setting multiple state variables
    const [fullName, setFullName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [CVC, setCVC] = useState("");

    const onSubmitBtn = () => {
        if(!fullName) {
            
        }
    }


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
                            //Max lenght to be 16
                            maxLength="16"
                            type="text" //Has to be text so maxLength works
                            placeholder="e.g 1234 5678 9123 4567"
                            onChange={(e) => { setCardNumber(e.target.value) }}
                            className="wide-input card-number-input"
                            //Function to only allow input of numbers
                            onKeyPress={(e) => preventLetters(e)}
                        />
                        <div className="card-number-error-text">
                            Please Enter Your Full Card Number
                        </div>
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
}


const preventLetters = (e) => {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
}

const preventNumbers = (e) => {
    if (/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
}

export default FormValidation;