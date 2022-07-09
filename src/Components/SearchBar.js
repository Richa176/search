import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  const date = `${current.getDate()} ${monthNames[current.getMonth()]} ${current.getFullYear()}`;

  // return (
  //   <div className="App">
  //     <h1>Current date is {date}</h1>
  //   </div>
  // );
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
     <div className="header">
             <h1>Hi, Richa Saidha!</h1>
             <p>Here are your stats for {date}</p>
    </div>
    <div className="header2">
             <h3>Stay Healthy</h3>
             <h4>Explore your full library of Premium resources for sleep, activity, mindfullness and nutrition</h4>
             
             <div className="btn_con">
              <button className="btn">
              Explore Premium
              </button>

              {/* <div className="">
               </div> */}
             </div>
                
    </div>
  
    <div className="box">
    <span> <img src="steps.png"/> {"    "} 
                 total steps <br/>
                <p>Average {} steps per day </p> 
                </span>
    </div>
    <hr/>
      
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
     
   
  );
}

export default SearchBar;
