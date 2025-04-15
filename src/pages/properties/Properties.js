import React from "react";
import "./Properties.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import { filterOptions } from "../../data";
import {properties} from '../../data'
import { FaLocationDot } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Properties = () => {
const navigate  = useNavigate();

const handleNavigate=(id)=>{
  navigate(`/Properties/${id}`);
}

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <div className="sidebar">
          <h3>Filter By</h3>
          {filterOptions.map((ele, idx) => (
            <div className="filter-section">
              <label key={idx}>{ele.title}</label>
              <div className="filter-section-wrapper">
                {
                  ele.options.map((option)=>(
                    <div>
                      <input type="checkbox"/>
                      {option}
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        <div className="properties-container">
            <div className="properties">
                {
                    properties.map((ele)=>(
                        <div className="card-container" onClick={()=>{handleNavigate(ele.id)}}>

                            <div className="card-image">
                                <img src={ele.image}/>
                            </div>
                            <div className="card-badge">
                                <span>
                                    {ele.title}
                                </span>
                            </div>
                            <div className="card-content">
                                <div className="card-price">{ele.price}</div>
                                <div className="card-type ">{ele.type}</div>
                                <div className="card-address"><FaLocationDot className="card-icon"/>{ele.address}</div>
                            </div>
                            <div className="card-rooms">
                            <span className="card-icon">
                              <LuBedDouble/>
                              {ele.bedrooms}
                            </span>

                            <span className="card-icon">
                              <PiBathtub/>
                              {ele.bathrooms}
                            </span>

                            <span className="card-icon">
                              <BiArea/>
                              {ele.size}
                            </span>

                           
                            </div>

                        </div>
                    ))
                }
            </div>
            <div/>

        </div>
      </div>
    </div>
    

  );
};

export default Properties;
