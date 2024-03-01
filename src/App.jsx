import './index.css'
import weatherBg from './Assets/weatherBg.jpg'
import InputField from './Components/InputField';
import ForecastCard from './Components/ForecastCard';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${weatherBg})`}}>
         <div className="container">
            <h1>Weather Forecast</h1>
            <InputField />
            <ForecastCard />
            </div>
        </div>
  );
}

export default App;
