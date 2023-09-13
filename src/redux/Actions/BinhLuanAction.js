import { BinhLuan } from "../../service/BinhLuanService";
import {
  DELETE_BINH_LUAN,
  LAY_BINH_LUAN,
  POST_BINH_LUAN,
  PUT_BINH_LUAN,
} from "../Types/BinhLuanTypes";
import swal from "sweetalert";
import { DISPLAYLOADINGACTION, HIDELOADINGACTION } from "./loadingAction";

export const BinhLuanAction = () => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await BinhLuan.LayBinhLuan();
      if (result.status === 200) {
        dispatch({
          type: LAY_BINH_LUAN,
          LayBinhLuan: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
    } catch (errors) {}
  };
};
export const PostBinhLuanAction = (values) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await BinhLuan.PostBinhLuan(values);
      if (result.status === 200) {
        dispatch({
          type: POST_BINH_LUAN,
          PostBinhLuan: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        title: "Good job!",
        text: "Bình Luận Đã Được Gửi",
        icon: "success",
      });

      await dispatch(BinhLuanAction());
    } catch (errors) {
      swal({
        title: "warning!",
        text: "không thể Gửi Bình Luận vui lòng Kiểm Tra lại",
        icon: "warning",
      });
    }
  };
};
export const PuttBinhLuanAction = (id, values) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await BinhLuan.PutBinhLuan(id, values);
      if (result.status === 200) {
        dispatch({
          type: PUT_BINH_LUAN,
          PutBinhLuan: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        title: "Good job!",
        text: "Cập Nhật Thành Công",
        icon: "success",
      });
    } catch (errors) {
      swal({
        title: "warning!",
        text: "Cập nhật Thất Bại",
        icon: "warning",
      });
    }
  };
};
export const DeleteBinhLuanAction = (values) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await BinhLuan.DeleteBinhLuan(values);
      if (result.status === 200) {
        dispatch({
          type: DELETE_BINH_LUAN,
          DeleteBinhLuan: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        title: "Good job!",
        text: "Xóa Bình Luận thành công",
        icon: "success",
      });

      await dispatch(BinhLuanAction());
    } catch (errors) {
      swal({
        title: "warning!",
        text: "Xóa Bình Luận thất bại",
        icon: "warning",
      });
    }
  };
};
