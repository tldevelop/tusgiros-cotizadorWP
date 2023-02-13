document.addEventListener('DOMContentLoaded', function () {
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

    //SHOW MORE TEAM MEMBERS
    const hiddenMembers = document.querySelector('#equipoescondido');
    const hiddenMembers2 = document.querySelector('#equipoescondido2');
    const hiddenMembers3 = document.querySelector('#equipoescondido3');
    const showButton = document.querySelector('#mas-equipo');

    //SET INITIAL TODAY VALUES
    originCurrency.innerHTML = originRegion.value;
    destinyCurrency.innerHTML = destinyRegion.value;

    //FETCH AND SET DATA
    const getData = async () => {
        const url = './data.js';

        await fetch(url)
        .then(res => res.json())
        .then(data => {
            todayData = data;
            todayData.filter(currency => {
                if(currency.moneda_origen === 'UYU' && currency.moneda_destino === 'ARS') {
                    conversion.innerHTML = currency.valor;
                    sendAmount.oninput = () => {
                        const total = sendAmount.value * currency.valor;
                        receiveAmount.value = total;
                    }
                }
            });

            originRegion.onchange = (e) => {
                originCurrency.innerHTML = e.target.value;
                todayData.filter(currency => {
                    if(currency.moneda_origen === originRegion.value && currency.moneda_destino === destinyRegion.value) {
                        conversion.innerHTML = currency.valor;
                        sendAmount.oninput = () => {
                            const total = sendAmount.value * currency.valor;
                            receiveAmount.value = total;
                        }
                    }
                })
            }

            destinyRegion.onchange = (e) => {
                destinyCurrency.innerHTML = e.target.value;
                todayData.filter(currency => {
                    if(currency.moneda_origen === originRegion.value && currency.moneda_destino === destinyRegion.value) {
                        conversion.innerHTML = currency.valor;
                        sendAmount.oninput = () => {
                            const total = sendAmount.value * currency.valor;
                            receiveAmount.value = total;
                        }
                    }
                })
            }
        });
    }

    getData();
    
    showButton.onclick = (e) => {
        e.preventDefault();
        
        hiddenMembers.style.opacity = "1";
        hiddenMembers.style.height = "initial";
        
        hiddenMembers2.style.opacity = "1";
        hiddenMembers2.style.height = "initial";
        
        hiddenMembers3.style.opacity = "1";
        hiddenMembers3.style.height = "initial";
        
        showButton.style.display = "none"
    }
});