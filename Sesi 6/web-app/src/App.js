import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isRefresh, setIsRefresh] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrencies();
    return () => {
      document.body.style.background = '#dc7000';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefresh]);

  const getCurrencies = async () => {
    const currenciesArray = [];
    try {
      if (isRefresh) {
        setIsLoading(true);
        const { data } = await axios.get(
          'https://api.currencyfreaks.com/latest?apikey=f41e8688f3bd48c6b93068116aaa5a7e'
        );
        for (const [k, v] of Object.entries(data.rates)) {
          if (['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP'].includes(k)) {
            currenciesArray.push({ k, v });
          }
        }
        setCurrencies(currenciesArray);
        setIsRefresh(false);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.error(`Something went wrong: ${err}`);
    }
  };

  const getPercentage = (initialNumber, percentage) => {
    return ((Number(initialNumber) / 100) * Number(percentage) + Number(initialNumber)).toFixed(4);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ color: 'white', marginTop: '70px', textAlign: 'center' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        <div
          style={{
            margin: '10px'
          }}>
          <h4>Currency</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{item.k}</p>;
          })}
        </div>
        <div
          style={{
            margin: '10px'
          }}>
          <h4>We Buy</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{getPercentage(item.v, 5)}</p>;
          })}
        </div>
        <div
          style={{
            margin: '10px'
          }}>
          <h4>Exchange Rate</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{Number(item.v).toFixed(4)}</p>;
          })}
        </div>
        <div
          style={{
            margin: '10px'
          }}>
          <h4>We Sell</h4>
          {currencies.map((item) => {
            return <p key={item.k}>{getPercentage(item.v, -5)}</p>;
          })}
        </div>
      </div>
      <div>
        <p>Rates are based from 1 USD.</p>
        <p>This application uses API from https://currencyfreaks.com.</p>
      </div>
      <button onClick={() => setIsRefresh(true)}>Refresh</button>
    </div>
  );
};

export default App;
