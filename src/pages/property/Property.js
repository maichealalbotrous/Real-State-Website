import React from "react";
import "./Property.css";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { properties, propertyImages } from "../../data";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { TbBackground } from "react-icons/tb";
const Property = () => {
  const { id } = useParams();

  const prop = properties.find((e)=>e.id === parseInt(id));

  return (
    <div>
      <Navbar style={{backgroundcolor:"rgb(8,22,55,0.9)"}}/>
      <div className="property-container">
        <div className="property-wrapper ">
          <h1 className="property-heading">{prop.type} for {prop.title} to {prop.address}</h1>
        </div>
        <div className="property-images">
            <div className="main-image">
                <img src={propertyImages[0].image}/>
            </div>
            <div className="small-images">
                {
                    propertyImages.slice(1).map((e)=>(
                        <img src={e.image}/>
                    ))
                }
            </div>

        </div>

        <div className="property-details">
            <h1>{prop.title}</h1>
            <div className="property-rooms">
                <span>
                    <LuBedDouble className="icon"/>
                    <p>{prop.bedrooms}BedRoom</p>
                </span>
                <span>
                    <PiBathtub className="icon"/>
                    <p>{prop.bathrooms}bathrooms</p>
                </span>

                <span>
                    <BiArea className="icon"/>
                    <p>{prop.size}size</p>
                </span>

                <span>
                    <LuBedDouble className="icon"/>
                    <p>{prop.bedrooms}BedRoom</p>
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
