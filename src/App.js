import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";

function App() {

  // constantes de monedas y barra de busqueda
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para obtener el valor de cada criptomoneda

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      
      <div className="row">
      <Navbar/>
      
        <input
          type="text"
          placeholder="Buscar Criptomonedas"
          className="form-control border-0 mr-sm-2 text-center"
          
          onChange={(e) => setSearch(e.target.value)}
        />        
      
      <Routes>
        <Route path="/" element={<TableCoins coins={coins} search={search} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}/>
        </Route>
      </Routes>
        
    

        
      </div>
    </div>
  );
}

export default App;