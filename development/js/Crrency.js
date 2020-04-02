import React, { useState, useEffect } from "react";

const Currency = () => {
  const [currency, setCurrency] = useState(false);

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/a/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCurrency(data);
      });
  }, []);
  if (currency === false)
    return (
      <div className={"currency_box"}>
        <h1>Pobieranie danych</h1>
      </div>
    );

  return (
    <div className={"currency_box"}>
      <div className={"currency_content"}>
        <div>€ {currency[0].rates[7].code}</div>
        <div>
          <div className={"currency_price"}>
            {currency[0].rates[7].mid.toFixed(2)} PLN
          </div>
        </div>
      </div>
      <div className={"currency_content"}>
        <div>$ {currency[0].rates[1].code}</div>
        <div>
          <div className={"currency_price"}>
            {currency[0].rates[1].mid.toFixed(2)} PLN
          </div>
        </div>
      </div>
      <div className={"currency_content"}>
        <div>fr. {currency[0].rates[9].code}</div>
        <div>
          <div className={"currency_price"}>
            {currency[0].rates[9].mid.toFixed(2)} PLN
          </div>
        </div>
      </div>
      <div className={"currency_content"}>
        <div> ₴ {currency[0].rates[11].code}</div>
        <div>
          <div className={"currency_price"}>
            {currency[0].rates[11].mid.toFixed(2)} PLN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
