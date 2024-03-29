document.addEventListener('DOMContentLoaded', function () {
    //FORM FIELDS
    const sendAmount = document.querySelector('#send-amount');
    const originRegion = document.querySelector('#origin-region');
    const receiveAmount = document.querySelector('#receive-amount');
    const destinyRegion = document.querySelector('#dest-region');

    const countrySel = document.querySelector('#country-selector');
    const selUru = document.querySelector('#select-uru');
    const selEcu = document.querySelector('#select-ecu');

    const originSel = document.querySelector('#origin-selector');
    const selUYU = document.querySelector('#select-uyu');
    const selUSD = document.querySelector('#select-usd');

    const destSel = document.querySelector('#dest-selector');
    const selARS = document.querySelector('#select-ars');
    const selVEF = document.querySelector('#select-vef');
    const selCOP = document.querySelector('#select-cop');
    const selUSVEF = document.querySelector('#select-usvef');
    // END FORM FIELDS

    //TODAY VALUE SELECTORS
    const country = document.querySelector('#country');
    const countryText = document.querySelector('#country-text');
    const countryFlag = document.querySelector('#country-flag');
    const countryIcon = document.querySelector('#pais');

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
        country: {
            text: "Uruguay",
            clicked: false
        },
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
        col: "https://tusgiros.io/wp-content/uploads/2023/02/colombia.png",
        ecu: "https://tusgiros.io/wp-content/uploads/2023/02/ecuador.png"
    }

    //SET INITIAL TODAY VALUES
    countryText.innerHTML = status.country.text
    countryFlag.style.backgroundImage = `url(${flags.uyu})`
    originText.innerHTML = status.origin.text;
    destText.innerHTML = status.destiny.text;
    originCurrency.innerHTML = status.origin.text;
    destinyCurrency.innerHTML = status.destiny.text;
    originFlag.style.backgroundImage = `url(${flags.uyu})`
    destFlag.style.backgroundImage = `url(${flags.ar})`
    selVEF.style.display = "none";
    selCOP.style.display = "none";
    selUSVEF.style.display = "none";
    destSel.style.bottom = "-65px";

    apiData.filter(el => {
        if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
            conversion.innerHTML = el.valor;
            sendAmount.oninput = () => {
                const total = sendAmount.value * el.valor;
                receiveAmount.value = total;
            }
        }
    })

    //functions
    country.onclick = () => {
        status.country.clicked = !status.country.clicked

        if(status.country.clicked) {
            countryIcon.style.transform = "translateY(-50%) rotate(180deg)";
            countrySel.style.display="initial"
        } else {
            countryIcon.style.transform = "translateY(-50%) rotate(0deg)";
            countrySel.style.display="none"
        }
    }

    selUru.onclick = () => {
        selVEF.style.display = "none";
        selUSVEF.style.display = "none";
        destSel.style.bottom = "-65px";
        status.country.text = "Uruguay";
        countryText.innerHTML = status.country.text;
        countryFlag.style.backgroundImage = `url(${flags.uyu})`;
        status.country.clicked = false;
        countryIcon.style.transform = "translateY(-50%) rotate(0deg)";
        countrySel.style.display = "none"
        selUYU.style.display = 'flex';
        originSel.style.bottom = '-104px';
        if(screen.width === 893) {
            originSel.style.bottom = '-152px';
        }
        status.origin.text = 'UYU';
        status.destiny.text = "ARS";
        destText.innerHTML = status.destiny.text;
        originText.innerHTML = status.origin.text;
        destFlag.style.backgroundImage = `url(${flags.ar})`
        destinyCurrency.innerHTML = status.destiny.text;
        originFlag.style.backgroundImage =`url(${flags.uyu})`;
        originCurrency.innerHTML = status.origin.text;
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                const total = sendAmount.value * el.valor;
                receiveAmount.value = total;
            }
        })
    }

    selEcu.onclick = () => {
        selVEF.style.display = "flex";
        selUSVEF.style.display = "flex";
        destSel.style.bottom = "-136px";
        status.country.text = "Ecuador";
        countryText.innerHTML = status.country.text;
        countryFlag.style.backgroundImage = `url(${flags.ecu})`;
        status.country.clicked = false;
        countryIcon.style.transform = "translateY(-50%) rotate(0deg)";
        countrySel.style.display = "none"
        selUYU.style.display = 'none';
        originSel.style.bottom = '-67px';
        if(screen.width === 893) {
            originSel.style.bottom = '-93px';
        }
        status.origin.text = 'USD';
        originText.innerHTML = status.origin.text;
        originFlag.style.backgroundImage =`url(${flags.usa})`;
        originCurrency.innerHTML = status.origin.text;
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                const ctotal = sendAmount.value * el.valor;
                receiveAmount.value = ctotal;
            }
        })
    }

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
            destSel.style.display = "initial"
        } else {
            destinyIcon.style.transform = "translateY(-50%) rotate(0deg)"
            destSel.style.display = "none"
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
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
                const total = sendAmount.value * el.valor;
                receiveAmount.value = total;
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
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
                const total = sendAmount.value * el.valor;
                receiveAmount.value = total;
            }
        })
    }

    selARS.onclick = () => {
        status.destiny.text = "ARS";
        destText.innerHTML = status.destiny.text
        destFlag.style.backgroundImage = `url(${flags.ar})`
        destinyCurrency.innerHTML = status.destiny.text;
        status.destiny.clicked = false;
        destinyIcon.style.transform = "translateY(-50%) rotate(0deg)";
        destSel.style.display = "none"
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
                const uptotal = sendAmount.value * el.valor;
                receiveAmount.value = uptotal;
            }
        })
    }
    selVEF.onclick = () => {
        status.destiny.text = "VEF";
        destText.innerHTML = status.destiny.text
        destFlag.style.backgroundImage = `url(${flags.ven})`
        destinyCurrency.innerHTML = status.destiny.text;
        status.destiny.clicked = false;
        destinyIcon.style.transform = "translateY(-50%) rotate(0deg)";
        destSel.style.display = "none"
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
                const uptotal = sendAmount.value * el.valor;
                receiveAmount.value = uptotal;
            }
        })
    }
    selCOP.onclick = () => {
        status.destiny.text = "COP";
        destText.innerHTML = status.destiny.text
        destFlag.style.backgroundImage = `url(${flags.col})`
        destinyCurrency.innerHTML = status.destiny.text;
        status.destiny.clicked = false;
        destinyIcon.style.transform = "translateY(-50%) rotate(0deg)";
        destSel.style.display = "none"
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
                const uptotal = sendAmount.value * el.valor;
                receiveAmount.value = uptotal;
            }
        })
    }
    selUSVEF.onclick = () => {
        status.destiny.text = "USD";
        destText.innerHTML = status.destiny.text
        destFlag.style.backgroundImage = `url(${flags.ven})`
        destinyCurrency.innerHTML = status.destiny.text;
        status.destiny.clicked = false;
        destinyIcon.style.transform = "translateY(-50%) rotate(0deg)";
        destSel.style.display = "none"
        apiData.filter(el => {
            if(el.moneda_origen === status.origin.text && el.moneda_destino === status.destiny.text) {
                conversion.innerHTML = el.valor;
                sendAmount.oninput = () => {
                    const total = sendAmount.value * el.valor;
                    receiveAmount.value = total;
                }
                const uptotal = sendAmount.value * el.valor;
                receiveAmount.value = uptotal;
            }
        })
    }

    document.onclick = (e) => {
        if(!countrySel.contains(e.target) && !country.contains(e.target)){
            status.country.clicked = false;
            //console.log(status.country.clicked);
        }
        if(status.country.clicked) {
            countryIcon.style.transform = "translateY(-50%) rotate(180deg)";
            countrySel.style.display="initial"
        } else {
            countryIcon.style.transform = "translateY(-50%) rotate(0deg)";
            countrySel.style.display="none"
        }

        if(!originSel.contains(e.target) && !originRegion.contains(e.target)){
            status.origin.clicked = false;
            //console.log(status.origin.clicked);
        }
        if(status.origin.clicked) {
            originIcon.style.transform = "translateY(-50%) rotate(180deg)";
            originSel.style.display="initial"
        } else {
            originIcon.style.transform = "translateY(-50%) rotate(0deg)";
            originSel.style.display="none"
        }

        if(!destSel.contains(e.target) && !destinyRegion.contains(e.target)){
            status.destiny.clicked = false;
            //console.log(status.destiny.clicked);
        }
        if(status.destiny.clicked) {
            destinyIcon.style.transform = "translateY(-50%) rotate(180deg)";
            destSel.style.display="initial"
        } else {
            destinyIcon.style.transform = "translateY(-50%) rotate(0deg)";
            destSel.style.display="none"
        }
    }
});