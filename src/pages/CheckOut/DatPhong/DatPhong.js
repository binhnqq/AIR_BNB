import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  GetApiDatPhongAction,
  PostApiDatPhongIDAction,
} from "../../../redux/Actions/QuanLyDatPhongAction";
import { PhongThueAction } from "../../../redux/Actions/PhongActions";
import swal from "sweetalert";
import * as Yup from "yup";






export default function DatPhong(props) {
  const { GetApiDatPhong } = useSelector((state) => state.QlDatPhongReducer);
  console.log({ GetApiDatPhong });
  const { PostApiDatPhong } = useSelector((state) => state.QlDatPhongReducer);
  const { PhongThue } = useSelector((state) => state.DSPhongTheoVitriReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(PhongThueAction(id));
    dispatch(GetApiDatPhongAction());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: PostApiDatPhong.id,
      maPhong: PostApiDatPhong.maPhong,
      ngayDen: PostApiDatPhong.ngayDen,
      ngayDi: PostApiDatPhong.ngayDi,
      soLuongKhach: 0,
      maNguoiDung: PostApiDatPhong.maNguoiDung,
    },
    validationSchema: Yup.object({
      maPhong: Yup.string().required("mã phòng không được để trống"),
      maNguoiDung: Yup.string().required("mã người dùng không được để trống"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (formik.values.soLuongKhach <= 0) {
        swal("warning!", "số lượng khách không hợp lệ!", "warning");
      } else if (formik.values.soLuongKhach != 0) {
        dispatch(PostApiDatPhongIDAction(values));
      }
    },
  });


  return (
    <div className="col-lg-3  ">
      <div className="product-detail_book">
        <div className="product-detail_total">
          <img
            src="http://landing.engotheme.com/html/skyline/demo/images/Product/icon.png"
            alt="#"
            className="icon-logo"
          />
          <h6>{PhongThue.tenPhong}</h6>
          <p className="price">
            <span className="amout">
              {PhongThue.giaTien}$
            </span>{" "}
            /Persons
          </p>
          <p className="price">
            <span className="amout">
             TOTAl: {PhongThue.giaTien * formik.values.soLuongKhach}$
            </span>{" "}
          </p>
        </div>

        <div className="product-detail_form">
          <div className="sidebar">
            <div className="widget widget_check_availability">
              <div className="check_availability">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                  }}
                >
                  <div className="container">
                    <div className="content-book">
                      <div className="book_room1">
                        <div className="form-group">
                          <label htmlFor="ngayDen">Ngày Đến:</label>
                          <input
                            className="form-control date"
                            onChange={formik.handleChange}
                            value={formik.values.ngayDen}
                            type="datetime-local"
                            name="ngayDen"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label htmlFor="ngayDi">Ngày Đi:</label>
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.ngayDi}
                            className="form-control date"
                            type="datetime-local"
                            name="ngayDi"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="soLuongKhach">Số Lượng Khách:</label>
                          <input
                            name="soLuongKhach"
                            type="number"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.soLuongKhach}
                            placeholder="số lượng khách"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn  book-now"  >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
