
export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image">
                <img  src={props.imageUrl} alt=""/>
            </div>
            <div className="card--content">
                <div className="card--location">
                    <img className="location--ping" src="./images/ping.png" alt=""/>
                    <span className="location--country">{props.location.toUpperCase()}</span>
                    <a className="location--map" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <span className="card--dates">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}