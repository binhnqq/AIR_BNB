import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "../Profile/Profile1.css";
import { Form, Input, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  PutUserIdAction,
  UserIdAction,
} from "../../redux/Actions/QLNDAction";
import moment from "moment";
import { GetApiDatPhongAction, GetApiDatPhongTheoMaNDAction} from "../../redux/Actions/QuanLyDatPhongAction";
import { PhongThueAction } from "../../redux/Actions/PhongActions";

export default function Profile(props) {
  const [componentSize, setComponentSize] = useState("default");
  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };


  // const { userlogin } = useSelector((state) => state.QLNDReducer);
  const {  GetApiDatPhong } = useSelector(state => state.QlDatPhongReducer)
  const { PhongThue } = useSelector((state) => state.DSPhongTheoVitriReducer);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PhongThueAction())
    dispatch(GetApiDatPhongAction)
    // dispatch(UserIdAction(userlogin.id));
    // dispatch(GetApiDatPhongTheoMaNDAction(userlogin.id))
  }, []);

  const Formik = useFormik({
    enableReinitialize: true,
    // initialValues: {
    //   id: userlogin.id,
    //   name: userlogin.name,
    //   email: userlogin.email,
    //   phone: userlogin.phone,
    //   birthday: userlogin.birthday,
    //   gender: userlogin.gender,
    //   role: userlogin.role,
    // },
    onSubmit: (values) => {
      dispatch(PutUserIdAction("11", values));
    },
  });
  const handlechangeDataPicker = async (value) => {
    let birthday = moment(value);
    await Formik.setFieldValue(birthday);
  };
  const datphongprofile = () => {
    return GetApiDatPhong.map((phong, index) => {

      return <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-3" key={index}>
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src={PhongThue.hinhAnh}
          alt={PhongThue.hinhAnh}
        />

        <div class="card-body card2 text-dark bg-light">
          <p class="card-text">Tên phòng: {PhongThue.tenPhong}</p>
          <p class="card-text">Ngày Đi: {phong.ngayDi}</p>
          <p class="card-text">Ngày Đến: {phong.ngayDen}</p>
          <p class="card-text">Số Lượng Khách: {phong.soLuongKhach}</p>
          <p class="card-text">
            Giá: {phong.soLuongKhach * PhongThue.giaTien} $
          </p>
        </div>
      </div>
    })
  }
  return (
    <div className="profile-background" style={{}}>
      <div className="container">
        <div className="row" style={{ paddingTop: 150 }}>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            onSubmitCapture={Formik.handleSubmit}
            className="col-4 "
          >
            <div className="profile1">
              <div className="ml-2">
                <h3
                  className="text-center mt-3 mb-5 "
                  style={{ fontSize: 20, fontWeight: 600, color: "black" }}
                >
                  Thông Tin Tài Khoản
                </h3>
                <Form.Item
                  label="ID"
                  className="form-label"
                  style={{ color: "white" }}
                >
                  <Input
                    name="id"
                    type="number"
                    value={Formik.values.id}
                    onChange={Formik.handleChange}
                  />
                </Form.Item>
                <Form.Item
                  label="Name"
                  className="form-label"
                  style={{ color: "white" }}
                >
                  <Input
                    name="name"
                    type="text"
                    value={Formik.values.name}
                    onChange={Formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    name="email"
                    type="text"
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Phone">
                  <Input
                    name="phone"
                    type="number"
                    value={Formik.values.phone}
                    onChange={Formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="birthDay">
                  <DatePicker
                    className="ml-3"
                    onChange={handlechangeDataPicker}
                    format={"DD/MM/YYYY"}
                    value={moment(Formik.values.birthday)}
                  />
                </Form.Item>
                <Form.Item label="gender">
                  <Input
                    name="gender"
                    type="text"
                    value={Formik.values.gender}
                    onChange={Formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="role">
                  <Input
                    name="role"
                    type="text"
                    value={Formik.values.role}
                    onChange={Formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Tác Vụ">
                  <Button
                    htmlType="submit"
                    className="btn bg-primary  text-white"
                  >
                    Cập Nhật
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>

          <div className="col-8">
            <div>
              <span style={{ color: "White", fontSize: 50, fontWeight: 600 }}>
                Xin Chào! 
              </span>
            </div>
            <div className='render'>
              {datphongprofile()}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
