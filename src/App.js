import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Card from "./components/Card";
import "./App.css"

function App() {
  
  const [countries, setCountry] = useState([])

  const getData = async ()=>{
    const response = await fetch("https://restcountries.com/v3.1/all")
    setCountry(await response.json());
  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <>
      <Nav />
      <Input />
      <section className="card">
      {
        countries.map((curElem)=>{
          return(
            <Card 
            key = {curElem}
            img = {curElem.flags.png}
            title = {curElem.name.common}
            population = {curElem.population}
            region = {curElem.region}
            capital = {curElem.capital}
            />
          )
        })
      }
      </section>
    </>
  );
}

export default App;
