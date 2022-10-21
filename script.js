

let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
let rankine = document.getElementById('rankine');

celsius.oninput=()=> 
{
    let conv = (parseFloat(celsius.value)*(9/5)+32);
    fahrenheit.value = parseFloat(conv.toFixed(3));

    let conv2 = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(conv2.toFixed(3));

    let conv3 = (parseFloat(celsius.value)*9/5 )+491.67;
    rankine.value = parseFloat(conv3.toFixed(3));
};

fahrenheit.oninput=()=>
{
    let conv = (parseFloat(fahrenheit.value) - 32) *5/9;
    celsius.value = parseFloat(conv.toFixed(3));

    let conv2 = (parseFloat(fahrenheit.value) -32 *5/9) +275.15;
    kelvin.value = parseFloat(conv2.toFixed(3));

    let conv3 = (parseFloat(fahrenheit.value) +459.67);
    rankine.value = parseFloat(conv3.toFixed(3));
};

kelvin.oninput=()=>
{
    let conv = (parseFloat(kelvin.value) -273.15);
    celsius.value = parseFloat(conv.toFixed(3));

    let conv2 = (parseFloat(kelvin.value)-273.15 )*9/5+32;
    fahrenheit.value = parseFloat(conv2.toFixed(3));

    let conv3 = (parseFloat(kelvin.value) *1.8);
    rankine.value = parseFloat(conv3.toFixed(3));
};

rankine.oninput=()=>
{
    let conv = (parseFloat(rankine.value) -491.67) * 5/9 ;
    celsius.value = parseFloat(conv.toFixed(3));
    
    let conv2 = (parseFloat(rankine.value) -459.67);
    fahrenheit.value = parseFloat(conv2.toFixed(3));
    
    let conv3 = (parseFloat(rankine.value) *5/9);
    kelvin.value = parseFloat(conv3.toFixed(3));
};