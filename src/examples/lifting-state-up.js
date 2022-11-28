import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';

const scale = {
  'c':'Celsius',
  'f':'Farenheit'
}

function toCelsius(temperature){
  return (temperature-32)*(5/9);
}
function toFarenheit(temperature){
  return (temperature*9/5)+32;
}
function convertTemp(temperature, convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(temperature))
    return '';
  const output = convert(input);
  const rounded = Math.round(output*1000)/1000;
  return rounded.toString();
}
function BoilingVerdict(props){
  if(props.celsius>=100) return <p>The water would boil.</p>
  return <p>The water won't boil.</p>
}

function TemperatureInput(props){

  const temperature = props.temperature;
  function handleChange(e){
    props.onTemperatureChange(e.target.value);
  }

  return (
    <div>
      <p>Enter temperature input in {scale[props.scale]}</p>
      <input type="number" name="temp in celsius"
      value={temperature}
      onChange={handleChange}
      />
    </div>
  )
}

function Calculator(){
  const [scale,setScale] = useState('c');
  const [temperature,setTemperature] = useState('');

  const celsius = scale==='c'?temperature:convertTemp(temperature,toCelsius);
  const farenheit = scale==='f'?temperature:convertTemp(temperature,toFarenheit);

  function handleCelsiusChange(e){
    console.log(e);
    setScale('c');
    setTemperature(e);
  }
  function handleFarenheitChange(e){
    setScale('f');
    setTemperature(e);
  }
  return (
    <div>
      <TemperatureInput
      scale='c'
      temperature={celsius}
      onTemperatureChange={handleCelsiusChange}/>
      <TemperatureInput
      scale='f'
      temperature={farenheit}
      onTemperatureChange={handleFarenheitChange}/>
      <BoilingVerdict 
        celsius={parseFloat(temperature)} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);