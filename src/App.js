import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { Switch } from "react-router-dom";

import { Router } from "react-router-dom";
import Home from "./pages/HomeMenu/Home";
import { HomeTemplates } from "./template/HomeTemplate/HomeTemplat";
import Room from "./pages/Room&Rate/Room";
import Blogs from "./pages/Blogs/Blogs";
import Abouts from "./pages/Abouts/Abouts";
import Reserva from "./pages/Reservation/Reserva";
import { UserTemplates } from "./template/UserTemplate/UserTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CheckTemplates from "./template/CheckOutTemplate/CheckOutTemplate";
import Checkout from "./pages/CheckOut/Checkout";
import Profile from "./pages/Profile/Profile";
import CheckLoading from "./Component/Loading/CheckLoading";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import User from "./pages/Admin/user/UserAdmin";
import AdminTemplates from "./template/AdminTemplates/Admintemplates";
import QlLocation from "./pages/Admin/QuanLyThongTinViTri/QlLocation";
import AddLocation from "./pages/Admin/QuanLyThongTinViTri/Addlocation/Addlocation";
import Editlocation from "./pages/Admin/QuanLyThongTinViTri/Editlocation/EditLocation";
import AdminRoom from "./pages/Admin/QuanLyDatPhong/Phong";
import AddRoom from "./pages/Admin/QuanLyDatPhong/AddRoom/AddRoom";
import Edit from "./pages/Admin/QuanLyDatPhong/Edit/Edit";
import QlDatPhong from "./pages/Admin/QlDatPhong/QlDatPhong";
import AddUser from "./pages/Admin/user/AddUser/AddUser";
import EditUser from "./pages/Admin/user/EditUser/EditUser";
import Comment from "./pages/Admin/Comment/Comment";
import EditPhong from "./pages/Admin/QlDatPhong/Editphong.js/EditPhong";
import Showtime from "./pages/Admin/ShowTime/Showtime";


export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <CheckLoading />
        <Switch>
          <HomeTemplates path="/" exact Component={Home} />
          <HomeTemplates path="/Home" exact Component={Home} />
          <HomeTemplates path="/Home/room/:id" exact Component={Room} />
          <HomeTemplates path="/Home/room" exact Component={Room} />
          <HomeTemplates path="/Home/blog" exact Component={Blogs} />
          <HomeTemplates path="/Home/about" exact Component={Abouts} />
          <HomeTemplates path="/Home/loaction" exact Component={Reserva} />
          <HomeTemplates path="/profile/:id" exact Component={Profile} />
          <UserTemplates path="/login" exact Component={Login}></UserTemplates>
          <UserTemplates
            path="/Register"
            exact
            Component={Register}
          ></UserTemplates>
          <CheckTemplates
            path="/check/:id"
            exact
            Component={Checkout}
          ></CheckTemplates>

          <AdminTemplates path='/admin' exact Component={Dashboard} />
          <AdminTemplates path='/admin/Dashboard' exact Component={Dashboard} />
          <AdminTemplates path='/admin/user' exact Component={User} />
          <AdminTemplates path='/admin/room' exact Component={AdminRoom} />
          <AdminTemplates path='/admin/room/addnew' exact Component={AddRoom} />
          <AdminTemplates path='/admin/room/edit/:id' exact Component={Edit} />
          <AdminTemplates path='/admin/showtime/:id' exact Component={Showtime} />
          <AdminTemplates path='/admin/location' exact Component={QlLocation} />
          <AdminTemplates path='/admin/location/addnew' exact Component={AddLocation} />
          <AdminTemplates path='/admin/room/addnew/:id' exact Component={AddLocation} />
          <AdminTemplates path='/admin/location/edit/:id' exact Component={Editlocation} />
          <AdminTemplates path='/admin/Booking' exact Component={QlDatPhong} />
          <AdminTemplates path='/admin/Booking/edit/:id' exact Component={EditPhong} />
          <AdminTemplates path='/admin/user/adduser' exact Component={AddUser} />
          <AdminTemplates path='/admin/user/edituser/:id' exact Component={EditUser} />
          <AdminTemplates path='/admin/comment' exact Component={Comment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
