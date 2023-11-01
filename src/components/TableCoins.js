import React from "react";
import CoinRow from "./CoinRow";
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'

import "./Coin.css"


const TableCoins = ({ coins, search }) => {

  // filtra las criptomonedas si coincide la entrada de texto con alguna parte del nombre o simbolo de las crypto convertido a minuscula
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) | 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div style={{color:'white'}}>no coins</div>

  return (
    
    <table className="container">
      
      <div className="heading">
        <p>#</p>
        <p className='coin-name'>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Market Cap</p>        
      </div>
    
        {filteredCoins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <CoinRow key={coin.id} coin={coin} index={coin.market_cap_rank} />
          </Link>
        ))}
      
    </table>


  );
};

export default TableCoins;