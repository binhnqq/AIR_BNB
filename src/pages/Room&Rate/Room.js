import React, { useEffect } from "react";
import Roomheader from "./RoomHeader/Roomheader";
import "../Room&Rate/roombody.css";
import { useDispatch, useSelector } from "react-redux";
import { getDsPhongTheoViTriAction } from "../../redux/Actions/PhongActions";
import { NavLink } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";

export default function Room(props) {
  const { DsPhong } = useSelector((state) => state.DSPhongTheoVitriReducer);
 

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    console.log(props);
    dispatch(getDsPhongTheoViTriAction(id));
  }, []);

  const renderPhong = () => {
    return DsPhong.map((phong, index) => {
      return (
        <div className="wrap-item clearfix row" key={index}>
          <Fade left duration={1000} delay={1000}>
            <div className="col-xs-6 col-sm-5 col-md-5 col-lg-5">
              <div className="img-detail">
                <img src={phong.hinhAnh} alt="#" className="img-responsive" />
              </div>
            </div>
          </Fade>
          <Fade right duration={1000} delay={1000}>
            <div className="col-xs-6 col-sm-7 col-md-7 col-lg-7">
              <div className="text-room-4">
                <Zoom right cascade delay={1500}>
                  <div className="text">
                    <h2 className="h2-rooms">{phong.tenPhong}</h2>
                    <h5 className="h5-room">
                      Start form {phong.giaTien}$ per day
                    </h5>
                    <p>{phong.moTa}</p>
                    <div className="view-dateails btn btn-room">
                      <NavLink
                        to={`/check/${phong.id}`}
                        style={{ color: "#83f300" }}
                      >
                        VIEW DETAILS
                      </NavLink>
                    </div>
                    <div className="line" />
                  </div>
                </Zoom>
                <div className="img-room">
                  <img src={phong.hinhAnh} alt="#" className="img-responsive" />
                </div>
              </div>
            </div>
          </Fade>
          <hr className="mt-3" />
        </div>
      );
    });
  };

  return (
    <div>
      <Roomheader />
      <section className="body-room-4 ">
        <div className="container">
          <div className="wrap-room-4">
            <div className="row">{renderPhong()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
