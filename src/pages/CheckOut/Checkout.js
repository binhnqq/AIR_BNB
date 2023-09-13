import React, { Fragment, useEffect } from "react";
import Roomheader from "../Room&Rate/RoomHeader/Roomheader";
import "../CheckOut/Details.css";
import Comment from "./Comment/Comment";
import Phongthue from "./PhongThua/Phongthue";
import DatPhong from "./DatPhong/DatPhong";
import { useDispatch, useSelector } from "react-redux";
import { PostApiDatPhongIDAction } from "../../redux/Actions/QuanLyDatPhongAction";
import moment from "moment";
import _ from "lodash";
import { CHANGE_TAB_ACTIVE } from "../../redux/Types/ChangTabTypes";
import { Tabs, Image } from "antd";
import { PhongThueAction } from "../../redux/Actions/PhongActions";

export default function (props) {
  const { tabActive } = useSelector((state) => state.ChuyenTabActive);
  console.log(tabActive, "tab");
  const dispatch = useDispatch();
  const { TabPane } = Tabs;

  return (
    <div className="check">
      <Roomheader />
      <Tabs
        centered
        // tabBarExtraContent={operations}
        style={{ marginTop: 20 }}
        className="px-5"
        defaultActiveKey="1"
        activeKey={tabActive.toString()}
        onChange={(key) => {
          console.log("key", key);
          dispatch({
            type: CHANGE_TAB_ACTIVE,
            number: key,
          });
        }}
      >
        <TabPane tab="01.Chọn Phòng và Thanh Toán" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane className="tab-ls" tab="02.Kết Quả Đặt Phòng" key="2">
          <KqdatPhong {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}

function KqdatPhong(props) {
  const { GetApiDatPhong } = useSelector((state) => state.QlDatPhongReducer);
  const { PhongThue } = useSelector((state) => state.DSPhongTheoVitriReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PhongThueAction);
    dispatch(PostApiDatPhongIDAction);
  }, []);
  const renderItem = function () {
    return GetApiDatPhong.map((ticket, index) => {
      return (
        <div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 mt-3" key={index}>
          <img
            style={{ width: "90%", height: "200px", objectFit: "cover" }}
            src={PhongThue.hinhAnh}
            alt={PhongThue.hinhAnh}
          />

          <div class="card-body card1 text-white bg-dark">
            <p class="card-text">Tên phòng: {PhongThue.tenPhong}</p>
            <p class="card-text">Ngày Đi: {ticket.ngayDi}</p>
            <p class="card-text">Ngày Đến: {ticket.ngayDen}</p>
            <p class="card-text">Số Lượng Khách: {ticket.soLuongKhach}</p>
            <p class="card-text">
              Giá: {ticket.soLuongKhach * PhongThue.giaTien} $
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1 style={{ fontSize: "30px", color: "#673ab7", fontWeight: "700" }}>
          Lịch Sử Đặt Phòng.
        </h1>
        <p>Hãy xem lịch sử đặt Phòng tại đây!</p>
      </div>
      <div className="div">
        <div className="row">{renderItem()}</div>
      </div>
    </div>
  );
}

function Checkout(props) {
  return (
    <Fragment>
      <section className="section-product-detail">
        <div className="container">
          <div className="product-detail margin">
            <div className="row">
              <Phongthue {...props}></Phongthue>
              <DatPhong {...props}></DatPhong>
            </div>
          </div>
          <Comment {...props} />
          <div className="product-detail_content">
            <div className="row">
              {/* ITEM */}
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="product-detail_item">
                  <div className="img">
                    <Image
                      src="http://landing.engotheme.com/html/skyline/demo/images/Product/Another-.jpg"
                      alt="#"
                    />
                  </div>
                  <div className="text">
                    <h2>
                      <a>LUxury room</a>
                    </h2>
                    <ul>
                      <li>
                        <i className="fa fa-child" aria-hidden="true" /> Max: 2
                        Person(s)
                      </li>
                      <li>
                        <i className="fa fa-bed" aria-hidden="true" /> Bed:
                        King-size or twin beds
                      </li>
                      <li>
                        <i className="fa fa-eye" aria-hidden="true" /> View:
                        Ocen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END / ITEM */}
              {/* ITEM */}
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="product-detail_item">
                  <div className="img">
                    <Image
                      src="http://landing.engotheme.com/html/skyline/demo/images/Product/Another-1.jpg"
                      alt="#"
                    />
                  </div>
                  <div className="text">
                    <h2>
                      <a>Family Room</a>
                    </h2>
                    <ul>
                      <li>
                        <i className="fa fa-child" aria-hidden="true" /> Max: 2
                        Person(s)
                      </li>
                      <li>
                        <i className="fa fa-bed" aria-hidden="true" /> Bed:
                        King-size or twin beds
                      </li>
                      <li>
                        <i className="fa fa-eye" aria-hidden="true" /> View:
                        Ocen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END / ITEM */}
              {/* ITEM */}
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="product-detail_item">
                  <div className="img">
                    <Image
                      src="http://landing.engotheme.com/html/skyline/demo/images/Product/Another-3.jpg"
                      alt="#"
                    />
                  </div>
                  <div className="text">
                    <h2>
                      <a>standard Room</a>
                    </h2>
                    <ul>
                      <li>
                        <i className="fa fa-child" aria-hidden="true" /> Max: 2
                        Person(s)
                      </li>
                      <li>
                        <i className="fa fa-bed" aria-hidden="true" /> Bed:
                        King-size or twin beds
                      </li>
                      <li>
                        <i className="fa fa-eye" aria-hidden="true" /> View:
                        Ocen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END / ITEM */}
              {/* ITEM */}
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="product-detail_item">
                  <div className="img">
                    <Image
                      src="http://landing.engotheme.com/html/skyline/demo/images/Product/Another-4.jpg"
                      alt="#"
                    />
                  </div>
                  <div className="text">
                    <h2>
                      <a>couple Room</a>
                    </h2>
                    <ul>
                      <li>
                        <i className="fa fa-child" aria-hidden="true" /> Max: 2
                        Person(s)
                      </li>
                      <li>
                        <i className="fa fa-bed" aria-hidden="true" /> Bed:
                        King-size or twin beds
                      </li>
                      <li>
                        <i className="fa fa-eye" aria-hidden="true" /> View:
                        Ocen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END / ITEM */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
