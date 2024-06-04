function CurrCalc()
{
    let chf = frankenField.value;

    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${chf}&from=CHF&to=USD`)
      .then(resp => resp.json())
      .then((data) => {
        usd.value = data.rates.USD;
      });

}