import React from "react";
import "../Register/register.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register(props) {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Tên không được để trống"),
      email: Yup.string()
        .email("Email is not formatted correctly")
        .required("Email cannot be blank!!"),
      password: Yup.string()
        .required("Password can not be blank!!")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/,
          "Password must have a maximum of 1 capital letter 1 number 1 special character and maximum 6 - 8 characters"
        ),
      phone: Yup.string()
        .required("Phone number can not be left blank!!")
        .matches(/^[0-9]+$/, "Invalid phone number required"),
      birthday: Yup.string().required("birthday can not be left blank!!"),
      gender: Yup.string().required("gender can not be left blank!!"),
    }),
    onSubmit: () => {
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      className="body-page page-v1"
    >
      <div className="container">
        <div className="content">
          <h2 className="sky-h3">REGISTER ACCOUNT</h2>
          <h5 className="p-v1">Sign up To Use The Service</h5>
          <div>
            <div className="form-group">
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            
            </div>
            <div className="form-group">
              <input
                name="email"
                onChange={formik.handleChange}
                value=""
                type="text"
                className="form-control"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="password"
                onChange={formik.handleChange}
                value=""
                type="text"
                className="form-control"
                placeholder="Password"
              />
            
            </div>
            <div className="form-radio" style={{ color: "#191616" }}>
              <span className="gender">GENDER</span>
              <label htmlFor="gender" style={{ color: "#191616" }}>
                Nam
              </label>
              <input
                type="radio"
                name="gender"
                onChange={formik.handleChange}
                value=""
              />
    
              <label
                htmlFor="gender"
                style={{ color: "#191616", paddingLeft: 40 }}
              >
                Nữ
              </label>
              <input
                type="radio"
                name="gender"
                onChange={formik.handleChange}
                value=""
              />
           
            </div>
            <div className="form-group mt-3">
              <input
                name="phone"
                onChange={formik.handleChange}
                value=""
                type="number"
                className="form-control"
                placeholder="PHONE NUMBER"
              />
             
            </div>
            <div className="form-group">
              <input
                type="date"
                name="birthday"
                onChange={formik.handleChange}
                value=""
                className="form-control"
                placeholder="BIRTHDAY"
              />
             
            </div>
            <button type="submit" className="btn btn-default">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
