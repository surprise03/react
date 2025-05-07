import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [count, setCount] = useState(1)
  const [data, setProducts] = useState([])
  const Nextdata = () => { 
    setCount(count+1)
  }
  const FirstData = () => {
    setCount(count-1)
   }

  useEffect(() => {
    async function FetchData() {
      const url = `https://fakestoreapi.com/products/${count}`;
      const response = await fetch(url);
      const data = await response.json(); // Parse JSON data
      console.log(data); // Now this logs the actual product list
      setProducts(data);
    }

    FetchData();
  }, [count]);

  return (<>
  <h1>product:{count}</h1>
    <div className='suraj'>

      <img src={data.image} alt="img" />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <p>Rating:{data.rating?.rate} Price:{data.price}</p>

    </div>
    <button onClick={FirstData } disabled={count<1}>previousProduct</button>
    <button onClick={Nextdata} disabled={count>19} >NextProduct</button>

  </>)
}


export default App
