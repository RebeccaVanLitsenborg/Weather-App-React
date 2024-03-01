import React from 'react'

const ForecastCard = () => {
  return (
    <div className="section section__ForecastCard">
        <div className="icon">
            <h3>London, GB</h3>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"></img>
            <h3>Cloudy, rain</h3>
        </div>
        
        <div className='temp'>
          <h1>34 °C</h1>
        </div>
    </div>
  )
}

export default ForecastCard