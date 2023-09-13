import React from "react";
import "../RoomHeader/roomheader.css";
import { Fade, Zoom } from "react-reveal";


export default function Roomheader(props) {
  return (
    <section className="banner-tems text-center">
      <div className="container">
        <div className="banner-content">
          <h2>
            {" "}
            <Zoom left cascade delay={1000}>
              {" "}
              WELCOME TO SKYLINE
            </Zoom>
          </h2>
          <Fade bottom delay={1000}>
            <p>
              Welcome to skyline's booking system.International Standard Room
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
