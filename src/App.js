import weatherBg from './Assets/weatherBg.jpg'
import InputField from './Components/InputField';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${weatherBg})`}}>
       <div class="overlay">
         <div class="container">
            <h1>Weather Forecast</h1>
            <InputField />
            </div>
        </div>
       </div>
  );
}

export default App;
