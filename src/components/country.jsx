import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom";
import "./country.css"

const Country = ()=>{
    const {name} = useParams()
    const[country,setCountry] = useState([])
    const fetchCountry = async ()=>{
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        setCountry(await response.json())
    }
    useEffect(()=>{
        fetchCountry();
    }, [])
    
    return(
        <section className="cntry">
            <button><Link className="back" to="/">Back</Link></button>
            {country.map((c)=>{
                const {flags,ccn3,name,capital,region,currencies,subregion,languages,population} = c
                return(
                    <div className="country" key={ccn3}>
                    <div className="country-flag">
                    <img src={flags.png} alt="flag" />
                    </div>
                    <div className="country-content">
                        <h1>{name.common}</h1>
                        <h5>Native Name: <span>{(Object.values(name.nativeName)[0].official)}</span></h5>
                        <h5>Population: <span>{population}</span></h5>
                        <h5>Region :<span>{region}</span></h5>
                        <h5>Sub Region: <span>{subregion}</span></h5>
                        <h5>Capital: <span>{capital}</span></h5>
                        <h5>Currencies: <span>{Object.values(currencies)[0].symbol}</span> <span>{(Object.values(currencies)[0].name)}</span></h5>
                        <h5>Languages: <span>{Object.values(languages)}</span></h5>
                    </div>
                    </div>
                    )
            })}
            
        </section>
    )
}

export default Country