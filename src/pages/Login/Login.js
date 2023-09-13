import React from "react";
import "../Login/login.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is not formatted correctly")
        .required("Email cannot be blank!!"),
      password: Yup.string().required("Password can not be blank!!"),
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
          <h2 className="sky-h3">LOGIN ACCOUNT</h2>
          <h5 className="p-v1">Sign In To Use The Service</h5>
          <div>
            <div className="form-group">
              <input
                name="email"
                onChange={formik.handleChange}
                value=""
                type="text"
                className="form-control"
                placeholder="Email"
              />
              
            </div>
            <div className="form-group">
              <Input.Password
                className="form-control bg-light"
                name="password"
                onChange={formik.handleChange}
                value=""
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              
              <span
                className="fa fa-fw fa-eye field-icon toggle-password "
                data-toggle="#password-field"
              />
            </div>
            <button type="submit" className="btn btn-default">
              LOGIN
            </button>
          </div>
          <p><a className="text-light" href="/Register">I don’t have an account &nbsp;- &nbsp; Forgot Password </a></p>
        </div>
      </div>
    </form>
  );
}
