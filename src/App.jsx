import { useEffect, useState } from 'react';
// import React { useState, useEffect} from "react";
import NewFeed from './components/NewsFeed';
import Header from './components/Molecules/Header';

const App = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
   const fetchFunction = async () => {
      try {
         const response = await fetch('../data.json');
         if (!response.ok) {
            throw new Error("Data is not ok")
         }
         const data = await response.json();
         setData(data);
         setLoading(false);
      } catch(err) {
         console.log(`error: ${err.message}`);
         setLoading(true);
      }
   };
   fetchFunction();
}, []);


if (loading){
   return <p>Loading...</p>
}

 return (
    <>
      <Header />
      {data.map(item => (
         <NewFeed key={item.id} item={item} />
      ))} 
    </>
 )  
 
}

export default App;