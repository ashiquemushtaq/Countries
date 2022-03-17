import { FaSistrix } from "react-icons/fa";
import "./style.css"

function Input(){
    const getInput = ()=>{
        console.log(document.getElementsByClassName(0).value)
    }
    return(
        <div className="input">
            <input onInput={getInput} className="search" type="text" placeholder="Search for a country..." />
            <select>
                <option value="">Filter by Region</option>
                <option value="">Africa</option>
            </select>
        </div>
    );
}

export default Input;