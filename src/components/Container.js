import WeatherCard from './WeatherCard'
import { useWeather } from "../context/WeatherContext";
import Selector from './Selector';

function Container() {

    const { datas ,isLoading } = useWeather();

    if (isLoading) {
        return (
            <div className='container'> Loading..</div>
        )
    }

    return (
        <div className='container' >
                  <h1> Patida.dev React Course Homework</h1>
                  <br />      

            <div className='selectorContainer'>
                 <Selector/>
            </div>
            <div className='weatherContainer'>
                {datas.days.map((element, index) => {
                    return (
                        <WeatherCard
                            key={index}
                            day={element.datetime}
                            minTemp={element.tempmin}
                            maxTemp={element.tempmax}
                            icon={element.icon}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Container
