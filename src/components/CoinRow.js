import React from "react";

import './Coin.css'

const CoinRow = ({ coin, index }) => {
  return (

    <div className="coin-row">
      
      <td>{coin.market_cap_rank}</td>
      
      <td className="img-symbol">
        <img src={coin.image} alt=""/>
        <span>{coin.name}</span>
        <span className="ms-2 text-uppercase">({coin.symbol})</span>
      </td>
      

      <td>${coin.current_price.toLocaleString()}</td>

      
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h} %
      </td>

      <td className="hide-mobile">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="hide-mobile"> ${coin.market_cap.toLocaleString()}
      </td>
      
    </div>
  );
};

export default CoinRow;