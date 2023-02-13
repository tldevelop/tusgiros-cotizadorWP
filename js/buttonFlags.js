document.addEventListener('DOMContentLoaded', function () {
    //FORM FIELDS
    const sendAmount = document.querySelector('#send-amount');
    const originRegion = document.querySelector('#origin-region');
    const receiveAmount = document.querySelector('#receive-amount');
    const destinyRegion = document.querySelector('#dest-region');

    const originSel = document.querySelector('#origin-selector');
    const selUYU = document.querySelector('#select-uyu');
    const selUSD = document.querySelector('#select-usd');
    // END FORM FIELDS

    //TODAY VALUE SELECTORS
    const originCurrency = document.querySelector('#origen');
    const originText = document.querySelector("#origin-text");
    const originFlag = document.querySelector("#origin-flag");
    const originIcon = document.querySelector("#origi");

    const conversion = document.querySelector('#conversion');

    const destinyCurrency = document.querySelector('#destino');
    const destText = document.querySelector("#dest-text");
    const destFlag = document.querySelector("#dest-flag");
    const destinyIcon = document.querySelector("#desti");
    //END TODAY VALUE SELECTORS

    const apiData = [
        {
            pais_origen: "Uruguay",
            moneda_origen: "USD",
            pais_destino: "Venezuela",
            moneda_destino: "USD",
            valor: 0.93
        },
        {
            pais_origen: "Ecuador",
            moneda_origen: "USD",
            pais_destino: "Venezuela",
            moneda_destino: "USD",
            valor: 0.93
        },
        {
            pais_origen: "Uruguay",
            moneda_origen: "UYU",
            pais_destino: "Venezuela",
            moneda_destino: "VEF",
            valor: 0.13
        },
        {
            pais_origen: "Uruguay",
            moneda_origen: "USD",
            pais_destino: "Venezuela",
            moneda_destino: "VEF",
            valor: 5.2
        },
        {
            pais_origen: "Ecuador",
            moneda_origen: "USD",
            pais_destino: "Colombia",
            moneda_destino: "COP",
            valor: 3752.0
        },
        {
            pais_origen: "Uruguay",
            moneda_origen: "UYU",
            pais_destino: "Argentina",
            moneda_destino: "ARS",
            valor: 0.01
        },
        {
            pais_origen: "Uruguay",
            moneda_origen: "USD",
            pais_destino: "Argentina",
            moneda_destino: "ARS",
            valor: 0.48
        },
        {
            pais_origen: "Uruguay",
            moneda_origen: "UYU",
            pais_destino: "Venezuela",
            moneda_destino: "USD",
            valor: 0.025
        },
        {
            pais_origen: "Ecuador",
            moneda_origen: "USD",
            pais_destino: "Venezuela",
            moneda_destino: "VEF",
            valor: 5.09
        }
    ]

    //DEFINE STATUS OBJECT
    const status = {
        origin: {
            text: "UYU",
            clicked: false
        },
        destiny: {
            text: "ARS",
            clicked: false
        }
    }

    //DEFINE ASSETS
    const flags = {
        uyu: "https://tusgiros.io/wp-content/uploads/2023/02/uruguay.png",
        ar: "https://tusgiros.io/wp-content/uploads/2023/02/argentina.png",
        usa: "https://tusgiros.io/wp-content/uploads/2023/02/estados-unidos.png",
        ven: "https://tusgiros.io/wp-content/uploads/2023/02/venezuela.png",
        col: "https://tusgiros.io/wp-content/uploads/2023/02/colombia.png"
    }

    //SET INITIAL TODAY VALUES
    originText.innerHTML = status.origin.text;
    destText.innerHTML = status.destiny.text;
    originCurrency.innerHTML = status.origin.text;
    destinyCurrency.innerHTML = status.destiny.text;
    originFlag.style.backgroundImage = `url(${flags.uyu})`
    destFlag.style.backgroundImage = `url(${flags.ar})`

    apiData.filter(el => {
        if(el.moneda_origen === status.origin.text || el.moneda_destino === status.destiny.text) {
            conversion.innerHTML = el.valor;
            sendAmount.oninput = () => {
                const total = sendAmount.value * el.valor;
                receiveAmount.value = total;
            }
        }
    })

    //functions
    originRegion.onclick = () => {
        status.origin.clicked = !status.origin.clicked;

        if(status.origin.clicked) {
            originIcon.style.transform = "translateY(-50%) rotate(180deg)";
            originSel.style.display = "initial"
        } else {
            originIcon.style.transform = "translateY(-50%) rotate(0deg)";
            originSel.style.display = "none"
        }
    }
    destinyRegion.onclick = () => {
        status.destiny.clicked = !status.destiny.clicked;

        if(status.destiny.clicked) {
            destinyIcon.style.transform = "translateY(-50%) rotate(180deg)"
        } else {
            destinyIcon.style.transform = "translateY(-50%) rotate(0deg)"
        }
    }

    selUYU.onclick = () => {
        status.origin.text = "UYU";
        originText.innerHTML = status.origin.text
        originFlag.style.backgroundImage = `url(${flags.uyu})`
        originCurrency.innerHTML = status.origin.text;
        status.origin.clicked = false;
        originIcon.style.transform = "translateY(-50%) rotate(0deg)";
        originSel.style.display = "none"
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text || el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
            }
        })
    }
    selUSD.onclick = () => {
        status.origin.text = "USD";
        originText.innerHTML = status.origin.text
        originFlag.style.backgroundImage = `url(${flags.usa})`
        originCurrency.innerHTML = status.origin.text;
        status.origin.clicked = false;
        originIcon.style.transform = "translateY(-50%) rotate(0deg)";
        originSel.style.display = "none"
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text || el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
            }
        })
    }
});