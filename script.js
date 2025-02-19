let api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`
const fromDropDown = document.getElementById("from-currency-select")
const toDropDown = document.getElementById("to-currency-select")

currencies.forEach((currency)=>{
const option = document.createElement("option");
option.value = currency;
option.text = currency;
fromDropDown.add(option);
})

currencies.forEach((currency)=>{
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
    })

    fromDropDown.value = "USD";
    toDropDown.value = "UZS";

    let convertCurrency = () =>{
        let fromCurrency = fromDropDown.value;
        let toCurrency = toDropDown.value;
        let amount = document.getElementById("amount").value;

        if(amount.length !=0) {
            fetch(api).then((res) => res.json()).then((data)=> {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            }
            )
        }else{
            alert("Please enter amount")
        }
    }

    document.querySelector("#convert-button").addEventListener("click", convertCurrency);
    window.addEventListener("load", convertCurrency)