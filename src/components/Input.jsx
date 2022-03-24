import { FaSistrix } from "react-icons/fa";
import "./style.css"

function Input(){

  // let search = document.getElementById("search");
  // const getInput = ()=>{
  //     console.log(search.value)
  // }
  // const onEnter = ()=>{
  //   search.addEventListener("keydown",(e)=>{
  //     if(e.keyCode === 13){
  //       getInput()
  //     }
  // })
  // }
  // setTimeout(()=>{onEnter()},6000);

    return(
        <div className="input">
            <input id="search" type="text" placeholder="Search for a country..." />
            <select>
                <option value="Filter By Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

export default Input;