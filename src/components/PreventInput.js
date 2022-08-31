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


export  { preventLetters, preventNumbers }