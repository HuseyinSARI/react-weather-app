
function WeatherCard({ day, minTemp, maxTemp, icon }) {
    return (
        <div className='weatherCard'>
            <div className="day">
                {day}
            </div>
            <div className="icon">
                <img src={`icons/${icon}.svg`} alt = "logo"></img>                
            </div>
            <div className="temps">
                <span>{maxTemp}&deg;</span>
                <span>{minTemp}&deg;</span>
            </div>
        </div>
    )
}
export default WeatherCard;
