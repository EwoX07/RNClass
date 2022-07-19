import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getPercentage = (initialNumber, percentage) => {
  return (Number(initialNumber) / 100) * Number(percentage) + Number(initialNumber);
};

const App = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const getCurrencies = () => {
      const currenciesArray = [];
      axios
        .get('https://api.currencyfreaks.com/latest?apikey=f41e8688f3bd48c6b93068116aaa5a7e')
        .then(({ data }) => {
          for (const [k, v] of Object.entries(data.rates)) {
            if (['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP'].includes(k)) {
              currenciesArray.push({ k, v });
            }
          }
          setCurrencies(currenciesArray);
        });
    };
    getCurrencies();
    return () => {
      document.body.style.background = '#dc7000';
    };
  }, []);
  return (
    <>
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'space-around'
        }}>
        <div
          style={{
            color: 'white'
          }}>
          <h4>Currency</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{item.k}</p>;
          })}
        </div>
        <div
          style={{
            color: 'white'
          }}>
          <h4>We Buy</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{getPercentage(item.v, 5)}</p>;
          })}
        </div>
        <div
          style={{
            color: 'white'
          }}>
          <h4>Exchange Rate</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{item.v}</p>;
          })}
        </div>
        <div
          style={{
            color: 'white'
          }}>
          <h4>We Sell</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{getPercentage(item.v, -5)}</p>;
          })}
        </div>
      </div>
      <div
        style={{
          color: 'white',
          textAlign: 'center'
        }}>
        <p>Rates are based from 1 USD.</p>
        <p>This application uses API from https://currencyfreaks.com.</p>
      </div>
    </>
  );
};

export default App;
