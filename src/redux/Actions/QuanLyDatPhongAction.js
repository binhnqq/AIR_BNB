import { datphong } from "../../service/QlDatPhongService";
import {
  DELETE_DAT_PHONG,
  GET_API_DAT_PHONG,
  GET_API_DAT_PHONG_ID,
  GET_API_DAT_PHONG_THEO_MA_ND,
  POST_API_DAT_PHONG,
  PUT_API_DAT_PHONG
} from "../Types/QlDatPhongTypes";
import { DISPLAYLOADINGACTION, HIDELOADINGACTION } from "./loadingAction";
import swal from "sweetalert";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT } from "../Types/ChangTabTypes";
import { history } from "../../App";






export const GetApiDatPhongAction = () => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await datphong.GetApiDatPhong();

      if (result.status === 200) {
        await dispatch({
          type: GET_API_DAT_PHONG,
          GetApiDatPhong: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      console.log("api dặt phòng", result);
    } catch (errors) {}
  };
};

export const GetApiDatPhongIDAction = (maPhong) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await datphong.GetApiDatPhongId(maPhong);
      console.log("result", result.data.content);
      if (result.status === 200) {
        dispatch({
          type: GET_API_DAT_PHONG_ID,
          GetApiDatPhongId: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      console.log("api dặt phòng", result);
    } catch (errors) {
      console.log("error", errors.response?.data.content);
    }
  };
};
export const PutApiDatPhongIDAction = (id,value) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await datphong.PutApiDatPhong(id,value);
      console.log("result", result.data.content);
      if (result.status === 200) {
        dispatch({
          type: PUT_API_DAT_PHONG,
          PutApiDatPhong: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        icon: "success",
        text: "Cập Nhật Phòng Thành Công",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
      });
      history.push('/admin/Booking')
      await dispatch(GetApiDatPhongAction())
    } catch (errors) {
      await swal({
        icon: "warning!",
        text: "Cập Nhật Phòng Thất Bại",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
      });
    }
  };
};
export const PostApiDatPhongIDAction = (value) => {
  return async (dispatch) => {
    try {
      dispatch(DISPLAYLOADINGACTION);
      const result = await datphong.PostApiDatPhong(value);
      if (result.status === 200) {
        dispatch({
          type: POST_API_DAT_PHONG,
          PostApiDatPhong: result.data.content,
        });
      }
      await dispatch(GetApiDatPhongTheoMaNDAction(value));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(HIDELOADINGACTION);
      await swal({
        icon: "success",
        text: "Dặt Phòng Thành Công",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
      });

      dispatch({ type: CHUYEN_TAB });
    } catch (errors) {
      swal({
        icon: "warning",
        text: "Dặt Phòng Thất bại",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
      });
    }
  };
};
export const DeleteDatPhongIDAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(DISPLAYLOADINGACTION);
      const result = await datphong.DeleteDatPhong(id);
      if (result.status === 200) {
        dispatch({
          type: DELETE_DAT_PHONG,
          DeleteDatPhong: result.data.content,
        });
      }
      await dispatch(GetApiDatPhongAction());
      await dispatch(HIDELOADINGACTION);
      await swal({
        icon: "success",
        text: "Xoa Phong Thành Công",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
      });
    } catch (errors) {
      swal({
        icon: "warning",
        text: "Xoa Phong Thất bại",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
      });
    }
  };
};
export const GetApiDatPhongTheoMaNDAction = (maND) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await datphong.GetApiDatPhongTheoMaND(maND);
      if (result.status === 200) {
        dispatch({
          type: GET_API_DAT_PHONG_THEO_MA_ND,
          GetApiDatPhongTheoMaND: result.data.content,
        });
      }
      await dispatch(GetApiDatPhongAction(maND));
      await dispatch(HIDELOADINGACTION);
      console.log("api dặt phòng theo Nd", result);
    } catch (errors) {}
  };
};
