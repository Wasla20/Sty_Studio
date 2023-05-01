import React from "react";
import Salons from "./Salons";
import content from "../../content";
import Searchbar from "./Searhbar";
import "./gallery.css";

const SalonGallery = (props) => {
  return (
    <>
      <div className="bg-image">
        <div className="gallery-text">
          {" "}
          <h1> Gallery </h1>{" "}
        </div>
        <div>
          <Searchbar />
        </div>
        {/*salon listing starts here*/}
        <div className="salon-container">
          {content.map((contents) => (
            <Salons
              key={contents.id}
              image={contents.image}
              name={contents.name}
              description={contents.description}
            ></Salons>
          ))}
                <div className="testwidth">

            <div className="booked">
          <h2>Want to become the best salon in your area?</h2>
          <button>Register Now!!</button>
        </div>
        <div className="booked">
          <h2>Book your Appointment today in one of the best salons</h2>
          <button>Book An Appointment</button>
        </div>
        </div>{" "}
        </div>
        {/*salon listing starts here*/}
      
      
        </div>
      
    </>
  );
};

export default SalonGallery;
