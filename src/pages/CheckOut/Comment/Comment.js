import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Input,Radio,Space } from "antd";
import { Tabs } from "antd";
import { useFormik } from "formik";
import {
  UserOutlined,
  HomeOutlined,
  StarOutlined,
  TeamOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Rate } from 'antd';
import { BinhLuanAction, PostBinhLuanAction } from "../../../redux/Actions/BinhLuanAction";
import { BinhLuanTheoPhongAction } from "../../../redux/Actions/PhongActions";


export default function Comment(props) {
  // thư viện
  const { TextArea } = Input;
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [tabPosition, setTabPosition] = useState("top");
  const { TabPane } = Tabs;
  const [va, setValue] = useState(3);

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  const { LayBinhLuan, PostBinhLuan } = useSelector((state) => state.QLBinhLuanReducer);
  const { PhongThue,LAYBINHLUANTHEOPHONG } = useSelector(
    (state) => state.DSPhongTheoVitriReducer
  );
  console.log(LAYBINHLUANTHEOPHONG,'bl theo phòng')
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params
    dispatch(BinhLuanTheoPhongAction(id));
    dispatch(BinhLuanAction());
  }, []);

  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: PostBinhLuan.id,
      maPhong: PostBinhLuan.maPhong,
      maNguoiBinhLuan: PostBinhLuan.maNguoiBinhLuan,
      ngayBinhLuan: PostBinhLuan.ngayBinhLuan,
      noiDung: PostBinhLuan.noiDung,
      saoBinhLuan: PostBinhLuan.saoBinhLuan,
    },
    onSubmit: (value) => {
      dispatch(PostBinhLuanAction(value));
    },
  });


  const renderComment = () => {
    return LayBinhLuan.map((bl, index) => {
      return (
        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <div className="d-flex">
                <div className="profile-2">
                  <span style={{ color: "aliceblue" }}>
                    <UserOutlined />
                  </span>
                </div>
                <div className="usercode">
                  <span>UserCode: {bl.maNguoiBinhLuan}</span>
                </div>
              </div>

              <h6 className="card-subtitle mb-2 text-muted">
                {moment(bl.ngayBinhLuan).format("DD/MM/YYYY hh:mm:ss A")}
              </h6>
              <p className="card-text">Nội Dung: {bl.noiDung}</p>
              <a className="card-link text-danger">Đánh Giá:</a><span className="start"><Rate disabled defaultValue={bl.saoBinhLuan} /></span>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="product-detail">
        <Space
        style={{
          marginBottom: 24,
          marginLeft:20
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs tabPosition={tabPosition}>
        <Tabs.TabPane tab="BENEFIT" key={1}>
          <div className="describle" style={{ width: "70%" }}>
            <div className="home d-flex">
              <div className="homeicon px-4">
                <HomeOutlined />
              </div>
              <div className="home_title mt-1">
                <span>Whole house</span>
                <br />
                <span style={{ fontSize: 15, color: "grey" }}>
                  You will have a luxury apartment
                </span>
              </div>
            </div>
            <div className="home d-flex mt-3">
              <div className="homeicon px-4">
                <StarOutlined />
              </div>
              <div className="home_title mt-1">
                <span>Enhanced Cleaning</span>
                <br />
                <span style={{ fontSize: 15, color: "grey" }}>
                  The owner is committed to implementing the 5-step
                  cleaning process
                </span>
              </div>
            </div>
            <div className="home d-flex mt-3">
              <div className="homeicon px-4">
                <TeamOutlined />
              </div>
              <div className="home_title mt-1">
                <span>{PhongThue.tenPhong}</span>
                <br />
                <span
                  style={{ fontSize: 15, color: "grey", width: "50%" }}
                >
                  {PhongThue.moTa}
                </span>
              </div>
            </div>
            <div className="home d-flex mt-3">
              <div className="homeicon px-4">
                <ProfileOutlined />
              </div>
              <div className="home_title mt-1">
                <span>Free cancellation within 48 hours</span>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="SERVICE" key={2}>
          <div
            className="tenich "
            style={{
              fontSize: 20,
              color: "black",
              fontFamily: "serif",
              fontWeight: 600,
            }}
          >
            <h2
              style={{
                fontSize: 20,
                color: "black",
                fontFamily: "serif",
                fontWeight: 600,
              }}
            >
              SERVICE
            </h2>
            <div className="row">
              <div className="col-6">
                <span className="px-3 mt-2">Bàn là</span>
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Wifi</span> {PhongThue.wifi}
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Bàn Ủi</span>
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Bếp</span>
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Điều Hòa</span>
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Đỗ Xe</span>
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Hồ Bơi</span>
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Máy Giặt</span>
              </div>
              <div className="col-6">
                <span className="px-3 mt-2">Tivi</span>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="COMMENT" key={3}>
          <div className="wrapper" >
            <h2
              style={{
                fontSize: 20,
                color: "black",
                fontFamily: "serif",
                fontWeight: 600,
              }}
            >
              Comment
            </h2>
            <div className="comment1 row">{renderComment()}</div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Formik.handleSubmit(e);
            }}
            className="comment mt-5"
          >
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="form-group">
                      <input
                        type="Number"
                        name="id"
                        value={Formik.values.id}
                        onChange={Formik.handleChange}
                        className="form-comment"
                        placeholder="ID"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="maPhong"
                        value={Formik.values.maPhong}
                        onChange={Formik.handleChange}
                        type="number"
                        className="form-comment "
                        placeholder="Mã Phòng"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="maNguoiBinhLuan"
                        value={Formik.values.maNguoiBinhLuan}
                        onChange={Formik.handleChange}
                        type="text"
                        className="form-comment"
                        placeholder="Mã Người Bình Luận"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="saoBinhLuan"
                        value={Formik.values.saoBinhLuan}
                        onChange={Formik.handleChange}
                        type="number"
                        className="form-comment"
                        placeholder="sao bình luận"

                      />

                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        name="ngayBinhLuan"
                        value={Formik.values.ngayBinhLuan}
                        onChange={Formik.handleChange}
                        className="form-comment"
                        placeholder="Ngày Bình Luận"
                      />
                    </div>

                    <TextArea
                      name="noiDung"
                      value={Formik.values.noiDung}
                      onChange={Formik.handleChange}
                      rows={4}
                      style={{ width: "72%", marginBottom: 30 }}
                      placeholder="CONTENT"
                    />
                    <button type="submit" className="add_comment">
                      ADD COMMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Tabs.TabPane>
      </Tabs>
      <hr className="mb-5" style={{ marginTop: 70, width: "75%" }} />

      {/* ANOTHER ACCOMMODATION */}
      <h2
        className="product-detail_title"
        style={{ fontSize: 20, fontFamily: "serif", fontWeight: 600 }}
      >
        Another accommodations
      </h2>
    </div>
  )
}
