import React, { Fragment } from "react";
import {
  DingtalkOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "../Header/header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN_CYBER, USER_LOGIN } from "../../../../util/setting/config";
import { history } from "../../../../App";

export default function Header(props) {
  const { userlogin } = useSelector((state) => state.QLNDReducer);
  console.log({ userlogin });
  const renderlogin = () => {
    if (_.isEmpty(userlogin)) {
      return (
        <Fragment>
          <button className="login btn text-light">
            <a href="/login">Log in</a>
          </button>
          <button className="sigup btn text-light ml-3">
            <a href="/Register">Sign Up</a>
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <button
          className="login  px-3 "
          type="submit"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <NavLink style={{ color: "white" }} to={`/profile/${userlogin.id}`}>
            <UserOutlined style={{ position: "absolute", top: 8, left: 0 }} />
            <span className="mt-2">{userlogin.name.substring(0, 10)}</span>
          </NavLink>
        </button>
        <button
          onClick={() => {
            console.log(userlogin, "đăng xu");
            localStorage.removeItem(userlogin);
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN_CYBER);
            history.push("/Home");
            window.location.reload();
          }}
          className="text-success logout"
        >
          Đăng Xuất
        </button>
      </Fragment>
    );
  };

  return (
    <div className="header">
      <div
        className="baner container-fluid  navbar navbar-expand-lg"
        style={{ height: 86 }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <MenuOutlined style={{ color: "#FFF" }} />
          </span>
        </button>
        <div>
          <div className="content1">
            <DingtalkOutlined style={{ marginTop: "-8px" }} />{" "}
            <span>BINH CYBERSOFT</span>
          </div>
          <div className="phone1">
            <PhoneOutlined style={{ marginTop: "-8px" }} />
            <span> (+84) 28. 38 12 17 19</span>
          </div>
          <div
            className="logo navbar-brand collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <img
              className="nav-item item-link"
              src="../img/sky-logo-header.png"
              alt=""
            />
          </div>
          <div
            className="icon1"
            style={{
              color: "white",
            }}
          >
            <a href="">
              {" "}
              <FacebookOutlined className="px-3" />
            </a>
            <a href="">
              <TwitterOutlined className="px-3" />
            </a>
            <a href="">
              {" "}
              <YoutubeOutlined className="px-3" />
            </a>
            <a href="">
              <InstagramOutlined className="px-3" />
            </a>
          </div>
          <div
            className="log-in-out d-flex my-lg-0 navbar-brand collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            {renderlogin()}
          </div>
        </div>

        <div className=" PageHome container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav">
              <li className="nav-item item-link">
                <a className="nav-link active" href="/Home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Home/blog">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Home/loaction">
                  RESERVATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Home/about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  ADMIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
