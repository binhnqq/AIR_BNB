import { Fragment, useEffect } from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import {
  HomeOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import swal from "sweetalert";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SubMenu from "antd/lib/menu/SubMenu";
import { TOKEN, USER_LOGIN } from "../../util/setting/config";
import { history } from "../../App";
import "../../pages/Admin/Dashboard/Dashboard.css";

const AdminTemplates = (props) => {
  const { Header, Content, Footer, Sider } = Layout;
  const { Submenu } = Menu;
  const { Component, ...restProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  // const { userlogin } = useSelector((state) => state.QLNDReducer);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(1, 0);
  });

  // if (!localStorage.getItem(USER_LOGIN)) {
  //   swal({
  //     title: "warning!",
  //     text: "Vui lòng Đăng Nhập!",
  //     icon: "warning",
  //     button: "warning!",
  //   });
  //   return <Redirect to="/login" />;
  // }

  // if (userlogin.role !== 'ADMIN') {
  //   swal({
  //     title: "warning!",
  //     text: "Bạn không phải quản trị không được truy cập vào trang này!",
  //     icon: "warning",
  //     button: "cancel!",
  //   });
  //   return <Redirect to="/"> </Redirect>
  // }
  // const operations = (
  //   <Fragment>
  //     <div className="profile-admin">
  //       <div className="user-profile" type="submit">
  //         <NavLink
  //           style={{
  //             color: "white",
  //             display: "flex",
  //             justifyContent: "center",
  //             marginRight: "32px",
  //           }}
  //           to="/profile"
  //         >
  //           <div
  //             style={{
  //               width: "35px",
  //               height: "35px",
  //               lineHeight: "30px",
  //               borderRadius: "20px",
  //               backgroundColor: "pink",
  //               color: "black",
  //               paddingLeft: 12,
  //             }}
  //           >
  //             <UserOutlined />
  //           </div>

  //           <div className="text-success" style={{ width: 100, paddingTop: 5 }}>
  //             {userlogin.name.substring(0, 10)}
  //           </div>
  //         </NavLink>
  //       </div>

  //       <div
  //         onClick={() => {
  //           console.log(userlogin, "đăng xu");
  //           localStorage.removeItem(userlogin);
  //           localStorage.removeItem(USER_LOGIN);
  //           localStorage.removeItem(TOKEN);
  //           history.push("/Home");
  //           window.location.reload();
  //         }}
  //         className="text-success mt-1"
  //       >
  //         || Đăng Xuất
  //       </div>
  //     </div>
  //   </Fragment>
  // );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <div className="logo mt-1 py-2">
                  <NavLink to="/Home">
                    <img
                      style={{ width: "70%", marginLeft: "25px" }}
                      src="../img/sky-logo-header.png"
                      alt=""
                    />
                   
                  </NavLink>
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="3" icon={<PieChartOutlined />}>
                    <NavLink to="/admin/Dashboard">Dashboard</NavLink>
                  </Menu.Item>
                  <SubMenu key="sub2" icon={<UserOutlined />} title="User">
                    <Menu.Item key="1" icon={<FileOutlined />}>
                      <NavLink to="/admin/user">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                      <NavLink to="/admin/user/adduser">Add User</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub1" icon={<HomeOutlined />} title="Room">
                    <Menu.Item key="2" icon={<FileOutlined />}>
                      <NavLink to="/admin/room">Room</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<FileOutlined />}>
                      <NavLink to="/admin/room/addnew">Add Room</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    icon={<GlobalOutlined />}
                    title="location"
                  >
                    <Menu.Item key="7" icon={<FileOutlined />}>
                      <NavLink to="/admin/location">location</NavLink>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<FileOutlined />}>
                      <NavLink to="/admin/location/addnew">
                        Add location
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub5" icon={<FileOutlined />} title="Booking">
                    <Menu.Item key="11" icon={<FileOutlined />}>
                      <NavLink to="/admin/Booking">Booking</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub6"
                    icon={<FileOutlined />}
                    title="Comment Manager"
                  >
                    <Menu.Item key="12" icon={<FileOutlined />}>
                      <NavLink to="/admin/comment">Comment</NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout
                className="site-layout"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <Header style={{ padding: 0, backgroundColor: "aliceblue" }} />
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      minHeight: 360,
                      border: "1px solid #e2dcdc",
                      backgroundColor: "aliceblue",
                    }}
                  >
                    <Component {...props} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  @ Admin Templates react movie 2022 PTB BOOTCAMP03
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
export default AdminTemplates;
