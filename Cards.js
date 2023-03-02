import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://restcountries.com/v2/region/${continents}`);
      setData(result.data);
    }; 
    fetchData();
  });

  const [continents, setContinents] = useState('asia');

  const test = async(event) =>{
    setContinents(event.target.value);
    console.log(event.target.value);
    const result = await axios.get(`https://restcountries.com/v2/region/${event.target.value}`);
    setData(result.data);
  }

//   const [searchContinent, setSearcContinent] = useState()

  return (
    <div style={{margin:"20px"}}>
        <div style={{marginBottom:"20px"}}>
            <input type="text" placeholder="Search a Country..." />
            <input type="submit" value="Submit"/>
            <label style={{marginLeft:"20px"}}><b>Choose a Country: </b></label>
            <select value={continents} onChange={test}>
                <option>asia</option>
                <option>africa</option>
                <option>europe</option>
                <option>americas</option>
            </select>
        </div>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap",marginBottom:"20px"}}>
      {data.map(item => (
        <div style={{border:"0.7px solid",backgroundColor:"#F1F1F1",borderRadius:"6px",margin:"8px",height:"300px",width:"200px"}}>
          <img src={item.flag} style={{height:"40%",width:"100%"}}/>
          <div>
            <h4>Name: {item.name}</h4>
            <h5> Capital: {item.capital}</h5>
            <p style={{fontSize:"14px"}}>Population: {item.population}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Cards;