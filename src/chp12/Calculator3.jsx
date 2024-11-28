import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit){
    return (fahrenheit -32) * 5/9;
}

// 섭씨를 화씨로 변경해서 반환
function toFahrenheit(celsius){
    return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }


    const output = convert(input);
    const rounded = String.format("%.3f", output);
    return rounded;
}
function Calculator3() {

    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }


    return(
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    );
}

export default Calculator2;