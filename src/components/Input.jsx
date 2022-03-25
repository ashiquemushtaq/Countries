import { FaSistrix } from "react-icons/fa";
import "./style.css"


function Input(){
    return(
        <div className="input">
            <input id="search" type="text" placeholder="Search for a country..." 
            />
            <select id="region">
                <option>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    );
}

export default Input;