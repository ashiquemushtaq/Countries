import "./style.css"

function Card(props) {
    return(
        <div className="cards" >
            <img width="200px" height="130px" className="flag" src={props.img} alt="ind" />
            <div className="card-content">
                <h4>{props.title}</h4>
                <h5>Population: <span>{props.population}</span></h5>
                <h5>Region: <span>{props.region}</span></h5>
                <h5>Capital: <span>{props.capital}i</span></h5>
            </div>
        </div>
    );
}

export default Card;