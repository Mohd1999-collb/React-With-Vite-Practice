import axios from 'axios'
import React, { useState } from 'react'

const Axios = () => {

    const [userName, setUserName] = useState([]);
    const [term, setTerm] = useState("");

    function fetchData(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            let arr = response.data.map((item)=>{
                return item.name;
            });
            setUserName([...userName, ...arr]);
        })
        .catch((error) => console.log(error))
    }

    function serachTerm(e){
        setTerm(e.target.value);

       
    }

    function searchValue(){
        if (userName.includes(term)) {
            console.log(term, "line ");
            setUserName([term]);
            setTerm("");
        }else{
            alert("User not found.")
        }
        // if(navigator.geolocation){
        //     console.log(navigator.geolocation.getCurrentPosition((data)=>{
        //         console.log(data.coords.latitude)
        //     }));
        // }
    }
    
  return (  
    <div>        

        <input type="text" placeholder='Enter search term' value={term} onChange={serachTerm}/>
        <br />
        <br />
        <button onClick={searchValue}>Search name</button>
        <br />
        <br />
        <button onClick={fetchData}>Fetch user data</button>
        {
            userName.map((item, index)=>{
                return (
                    <h1 key={index}>{item}</h1>
                )
            })
        }
    </div>
  )
}

export default Axios