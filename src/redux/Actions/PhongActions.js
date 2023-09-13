import { phong } from "../../service/PhongService";
import {
  DELETE_PHONG,
  LAY_BINH_LUAN_THEO_PHONG,
  LAY_DS_PHONG_THEO_VI_TRI,
  PHONG,
  PHONG_THUE,
  POST_PHONG,
  PUT_PHONG,
} from "../Types/PhongTypes";
import { DISPLAYLOADINGACTION, HIDELOADINGACTION } from "./loadingAction";
import swal from "sweetalert";
import { history } from "../../App";

export const getDsPhongTheoViTriAction = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await phong.LayPhongTheoViTri(id);
      if (result.status === 200) {
        dispatch({
          type: LAY_DS_PHONG_THEO_VI_TRI,
          DsPhong: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
    } catch (errors) {}
  };
};

export const PhongThueAction = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await phong.PhongThueId(id);
      if (result.status === 200) {
        dispatch({
          type: PHONG_THUE,
          PhongThue: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
    } catch (errors) {}
  };
};

export const PhongAction = () => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await phong.PhongThue();
      if (result.status === 200) {
        dispatch({
          type: PHONG,
          Phong: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
    } catch (errors) {}
  };
};

export const PostPhongAction = (value) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await phong.PostPhongThue(value);
      if (result.status === 200) {
        dispatch({
          type: POST_PHONG,
          PostPhong: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        text: "Thêm Phòng Thành Công",
        icon: "success",
      });
      history.push("/admin/room");

      dispatch(PhongAction());
    } catch (errors) {
      await swal({
        text: "Thêm Phòng Thất Bại",
        icon: "warning",
      });
    }
  };
};
export const DeletePhongAction = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await phong.DeletePhong(id);
      if (result.status === 200) {
        dispatch({
          type: DELETE_PHONG,
          DeletePhong: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        text: "Xóa Phòng Thành Công",
        icon: "success",
      });
      dispatch(PhongAction());
    } catch (errors) {
      await dispatch(HIDELOADINGACTION);
      await swal({
        text: "Xóa Phòng Thất Bại",
        icon: "warning",
      });
    }
  };
};
export const PutPhongAction = (id, value) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await phong.PutPhong(id, value);

      if (result.status === 200) {
        dispatch({
          type: PUT_PHONG,
          PutPhong: result.data.content,
        });
      }

      await dispatch(HIDELOADINGACTION);
      await swal({
        text: "Cập Nhật Phòng Thành Công",
        icon: "success",
      });
      history.push("/admin/room");
      dispatch(PhongAction());
    } catch (errors) {
      await dispatch(HIDELOADINGACTION);
      await swal({
        text: "Cập Nhật Phòng Thất Bại",
        icon: "warning",
      });
    }
  };
};
export const BinhLuanTheoPhongAction = (maPhong) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await phong.laybinhluantheoMaPhong(maPhong);

      if (result.status === 200) {
        dispatch({
          type: LAY_BINH_LUAN_THEO_PHONG,
          LAYBINHLUANTHEOPHONG: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
    } catch (errors) {}
  };
};
