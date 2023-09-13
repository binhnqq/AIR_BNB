import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhongThueAction } from "../../../redux/Actions/PhongActions";
import { UserOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { Image } from 'antd';

export default function Phongthue(props) {
  //
  const { PhongThue } = useSelector((state) => state.DSPhongTheoVitriReducer);
  const dispatch = useDispatch();
  //

  //lifeCycle
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(PhongThueAction(id));
  }, []);
  //
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = {
    img: "http://landing.engotheme.com/html/skyline/demo/images/Product/img-1.jpg",
    img1: "http://landing.engotheme.com/html/skyline/demo/images/Product/img-2.jpg",
    img2: "http://landing.engotheme.com/html/skyline/demo/images/Product/img-3.jpg",
    img3: "http://landing.engotheme.com/html/skyline/demo/images/Product/img-4.jpg",
    img4: "http://landing.engotheme.com/html/skyline/demo/images/Product/img-5.jpg",
    img5: "http://landing.engotheme.com/html/skyline/demo/images/Product/img-6.jpg",
    img6: "http://landing.engotheme.com/html/skyline/demo/images/Product/img-7.jpg",
  };

  //return
  return (
    <div className="col-lg-9  ">
      {/* LAGER IMGAE */}
      <div className="wrapper">
        <div className="gallery3">
          <Image  src={PhongThue.hinhAnh} alt="" />
          <div
            className="d-flex mt-5"
            style={{ justifyContent: "space-between" }}
          >
            <div
              className="title "
            >
              <span>Whole Apartment: {PhongThue.tenPhong}</span>
              <div className="title_child d-flex">
                <ul className="d-flex">
                  <li>CodeRoom: {PhongThue.id}</li> ||
                  <li className="px-3">BedRoom: {PhongThue.phongNgu}</li> ||
                  <li className="px-3">Bathroom: {PhongThue.phongTam}</li> ||
                  <li className="px-3">Guest: {PhongThue.khach}</li> ||
                  <li> Bed: {PhongThue.giuong}</li>
                </ul>
              </div>
            </div>
            <div className="profile">
              <span>
                <UserOutlined />
              </span>
            </div>
          </div>
          <hr style={{ backgroundColor: "yellowgreen" }} />
        </div>
      </div>

      <div className="mt-3 mb-5">
        <Slider {...settings}>
    
            <Image width={200} className="px-2" src={data.img} alt="" />
        
          <div>
            <Image className="px-2" src={data.img3} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img1} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img2} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img6} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img5} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img4} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img6} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img} alt="" />
          </div>
          <div>
            <Image className="px-2" src={data.img} alt="" />
          </div>
        </Slider>
      </div>

      {/* END / LAGER IMGAE */}
    </div>
  );
}
