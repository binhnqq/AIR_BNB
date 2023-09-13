import { QLND } from "../../service/QLNDService";
import {
  DELETE_USER,
  GETUSER,
  POST_USER,
  REGISTER,
  SIGIN,
  USERID,
} from "../Types/QLNDTypes";
import swal from "sweetalert";
import { history } from "../../App";
import { DISPLAYLOADINGACTION, HIDELOADINGACTION } from "./loadingAction";

export const DangKyAction = (tttk) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await QLND.signup(tttk);
      console.log("result", result.data.content);
      if (result.status === 200) {
        await dispatch({
          type: REGISTER,
          userRigester: result.data.content,
        });
        await dispatch(HIDELOADINGACTION);
        await swal({
          title: "Good job!",
          text: "Đăng Ký Tài Khoản Thành Công",
          icon: "success",
        });
      }
      history.push("/login");
    } catch (errors) {
      await swal({
        title: "FAIL!",
        text: "Thông Tin Điền Vào chưa đúng vui lòng kiểm tra lại! hoặc load lại trang",
        icon: "warning",
      });
    }
  };
};

export const DangNhapction = (ttDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await QLND.Sigin(ttDangNhap);
      if (result.status === 200) {
        dispatch({
          type: SIGIN,
          ttDangNhap: result.data.content,
        });
        await swal({
          title: "Good job!",
          text: "Đăng nhập thành công",
          icon: "success",
        });
        history.push("/Home");
      }
    } catch (errors) {
      swal({
        title: "warning!",
        text: "sai tài khoản hoặc mật khẩu vui lòng  đăng nhập lại",
        icon: "warning",
      });
    }
  };
};

export const UserIdAction = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await QLND.UserId(id);
      if (result.status === 200) {
        dispatch({
          type: USERID,
          UserId: result.data.content,
        });
        await dispatch(HIDELOADINGACTION);
      }

      console.log("result", result);
    } catch (errors) {
      swal({
        title: "warning!",
        text: "lấy thông tin thất bại",
        icon: "warning",
      });
    }
  };
};

export const PutUserIdAction = (id, thongTinUser) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await QLND.PutUserId(id, thongTinUser);
      await dispatch(HIDELOADINGACTION);
      await swal({
        title: "Good job!",
        text: "Cập nhật thành công",
        icon: "success",
      });

      await dispatch(UserIdAction(id));
    } catch (errors) {
      swal({
        title: "warning!",
        text: "Cập nhật thất bại",
        icon: "warning",
      });
    }
  };
};
export const DeleteUserAction = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await QLND.DeleteUser(id);
      console.log("result", result.data.content);
      await dispatch({
        type: DELETE_USER,
        DeleteUser: result.data.content,
      });
      await dispatch(HIDELOADINGACTION);
      await swal({
        title: "Good job!",
        text: "Xóa Người Dùng thành công",
        icon: "success",
      });
      await dispatch(GetUserAction());
    } catch (errors) {
      swal({
        title: "warning!",
        text: "Xóa Người Dùng thất bại",
        icon: "warning",
      });
    }
  };
};
export const PostUserAction = (value) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await QLND.PostUser(value);
      await dispatch({
        type: POST_USER,
        PostUser: result.data.content,
      });
      await dispatch(HIDELOADINGACTION);
      await swal({
        title: "Good job!",
        text: "Thêm Người Dùng thành công",
        icon: "success",
      });
      history.push("/admin/user");
      await dispatch(GetUserAction());
    } catch (errors) {
      swal({
        title: "warning!",
        text: "Thêm Người Dùng thất bại",
        icon: "warning",
      });
    }
  };
};
export const GetUserAction = (keyword = "") => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await QLND.GetUser(keyword);
      dispatch({
        type: GETUSER,
        DSUser: result.data.content,
      });
      await dispatch(HIDELOADINGACTION);
      console.log("result", result);
    } catch (errors) {
      swal({
        title: "warning!",
        text: "Lấy Ds thất bại",
        icon: "warning",
      });
    }
  };
};
