window.onload = function () {
    //FORM FIELDS
    const sendAmount = document.querySelector('#send-amount');
    const originRegion = document.querySelector('#origin-region');
    const receiveAmount = document.querySelector('#receive-amount');
    const destinyRegion = document.querySelector('#dest-region');
    // END FORM FIELDS

    //TODAY VALUE SELECTORS
    const originCurrency = document.querySelector('#origen');
    const conversion = document.querySelector('#conversion');
    const destinyCurrency = document.querySelector('#destino');
    //END TODAY VALUE SELECTORS

    //SET INITIAL TODAY VALUES
    originCurrency.innerHTML = originRegion.value;
    destinyCurrency.innerHTML = destinyRegion.value;

    //ON TODAY VALUES CHANGE
    originRegion.onchange = (e) => {
        originCurrency.innerHTML = e.target.value;
    }
    destinyRegion.onchange = (e) => {
        destinyCurrency.innerHTML = e.target.value;
    }
}