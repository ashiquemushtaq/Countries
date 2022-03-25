import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Card from "./components/Card";
import Country from "./components/country";
import "./App.css"

function App() {
  //Getting the data and displaying
  const [countries, setCountry] = useState([])

  const getData = async ()=>{
    const response = await fetch("https://restcountries.com/v3.1/all")
    setCountry(await response.json());
  }

  //search function and filter function
  window.addEventListener('DOMContentLoaded',()=>{
    const search = document.getElementById("search");
    const region = document.getElementById("region")
    search.addEventListener('input',(term)=>{
    searchCountry(term.target.value);
  })
    region.addEventListener('change',(val)=>{
      filterByRegion(val.target.value);
    })
  })
  

  const searchCountry = async term =>{
    if(term.length<3 || term==='')return
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`)
    const data = await res.json()
    await setCountry(data)
  }

  const filterByRegion = async val =>{
    if(val==='')return
    const res = await fetch(`https://restcountries.com/v3.1/region/${val}`)
    const data = await res.json()
    await setCountry(data)
  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <Router>
      <Nav />
      <Routes>
      <Route exact path="/" element={
        <>
        <Input />
        <section className="card">
        {
          countries.map((curElem)=>{
            return(
              <Card
              key = {curElem.ccn3} 
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
      }/>
      <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
