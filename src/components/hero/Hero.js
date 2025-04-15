import React, { useState } from "react";
import "./Hero.css";
import { SiFiledotio } from "react-icons/si";
import { filterOptions } from "../../data";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronCircleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Hero = () => {
const [acitve,setactive] = useState("buy");
const [option,setoption] = useState(null);
const [filteroption, setfilteroption] = useState(
 filterOptions.map((e)=>(e.options[0])) 
)
const navigte = useNavigate();
const setTheActiveClass =(b)=>{
  setactive(b);
}

const ShowTheOptions =(index)=>{
const newoption =  option === index ? null : index;
setoption(newoption);
}

const setTheNew_Option_Filter = (index,option)=>{
const newOption = [...filteroption];
newOption[index] = option;
setfilteroption(newOption);
setoption(null);
}

const HandlNavigate=()=>{
  navigte("/Properties")
}

  return (
    <div className="hero">
      <div className="hero-container">
        <h1>Fined Your Perfect Home</h1>
        <p>Making Your Home Seacg Easy And Enjoyable</p>
        <div className="buttons-container">
        <button onClick={()=>{setTheActiveClass("buy")}} className={acitve === "buy" ? "active":""}>buy properities</button>
        <button onClick={()=>{setTheActiveClass("rent")}} className={acitve === "rent" ? "active":""}>rent properities</button>
      </div>
      </div>
      
      <div className="hero-search-container ">
        <div className="hero-search">
          <div className="hero-wrapper">
            <div className="filter">
              <div className="filter-container">
                <div className="filter-content">
                  <label>Location</label>
                  <div className="input-container">
                    <FaLocationDot/>
                    <input placeholder="Search Location" />
                  </div>
                </div>
              </div>
            </div>

            {filterOptions.slice(0,2).map((filter,idx) => (
              <div key={filter.id} className="filter">
                <div className="filter-container">
                  <div className="filter-content">
                    <label>{filter.title}</label>
                    <div onClick={()=>{ShowTheOptions(idx)}} className="input-container">
                      <FaChevronCircleDown/>
                      <span >{filteroption[idx]}</span>

                      {option === idx &&(
                        <div className="options">
                          {
                            filter.options.map((e,index)=>(
                              <label onClick={()=>{setTheNew_Option_Filter(idx,e)}} className="option-item"><span>{e}</span></label>
                            ))
                          }
                        </div>
                      )}


                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="search" onClick={()=>{HandlNavigate()}}>
              <div className="search-container">
                <label>Search</label>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;
