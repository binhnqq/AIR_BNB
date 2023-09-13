import React, { useEffect } from "react";
import Carousel from "../../template/HomeTemplate/page/Carousel/Carousel";
import Homemenu from "./Homemenu/Homemenu";
import "../HomeMenu/Home.css";
import HomeVideo from "./HomeVideo/HomeVideo";
import Design from "./DesignHome/Design";
import HomeDiemDen from "./HomeRoom/HomeDiemDen";
import Responsive from "./HomeSlick/HomeSlick";
import Blog from "./Blog/Blog";
import HomeNews from "./HomeNews/HomeNews";

export default function Home() {
  return (
    <div>
      {/* carousel */}
      <Carousel />
      {/* HomeMenu */}
      <Homemenu />
      {/* HomeRoom */}
      <HomeDiemDen/>
      {/* HomeDesign */}
      <Design />
      {/* HomeVideo */}
      <HomeVideo />
      {/* Blog */}
      <Blog />
      {/* Home Map */}
      <div
        id="contact_map"
        className="map map-container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.835874782257!2d106.68809554999999!3d10.7568982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664300539026!5m2!1svi!2s"
          height={500}
          frameBorder={0}
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
