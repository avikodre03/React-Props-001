import './ColorCard.css'

function ColorCard(props) {
    return (
        <div className='card'>
            <div className="colorDiv" style={{ background: props.colorcode }}></div>
            <div className="colorCode">
                <h2>{props.colorcode}</h2>
                <p style={{ color: props.colorcode }} >{props.name}</p>
            </div>
        </div>
    );

}
export default ColorCard;
