import {useState, useEffect } from "react";

//? custom hooks = made in js 

//? custom hooks basic idea 

// function customHook(){
//     return []
// }

//? custom hooks can use builtin hooks in it 


function useCurrencyInfo(currency){

    const [data, setData] = useState({})  //? initial {} ye daal diya data mein isne
    //? then setData function jo return karega vo jayega data variable mein
    useEffect( () => {
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
     .then( (res) => res.json() )    //? res : response diya uper wala fetch is (res) as parameter then vo use kiya function ke ander res.json() bana diya 
     .then( (res) => setData( res[currency]))   //? then ye res.json bn gya res for next .then then vo pass hua as paramter then us pr ek function laga setData()  jo call hua and iske ander element pass hua res[currency]  =>  res[usd]  => res yahan pr json tha toh json mein se json[key] => key laaa usd toh uska sara usd key ka content => data variable mein save ho gya 
     console.log(data);  //? usd key ka data isme json se 
     
    }, [currency])   //? currency change hoga apne app chalega ye fetch wala kaam due to useEffect
    console.log(data);
    return data
    
}

export default useCurrencyInfo;
