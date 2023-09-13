import { vitri } from "../../service/DSViTriService";
import {
  DELETE_VI_TRI_ID,
  DS_VI_TRI_ID,
  PHAN_TRANG_TIM_KIEM,
  POST_VI_TRI,
  PUT_VI_TRI_ID,
  VI_TRI_DAT_VE,
} from "../Types/ViTriDatVeType";
import { DISPLAYLOADINGACTION, HIDELOADINGACTION } from "./loadingAction";
import swal from "sweetalert";
import { history } from "../../App";

export const getDsViTriAction = (
  keyword =""
) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await vitri.LayDSViTri(keyword);
      if (result.status === 200) {
        dispatch({
          type: VI_TRI_DAT_VE,
          DsViTri: result.data.content,
        });
      }
      dispatch(HIDELOADINGACTION);
    } catch (errors) {}
  };
};

export const PhanTrangTimKiemAction = (key) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await vitri.PhanTrangTimKiem(key);
      if (result.status === 200) {
        dispatch({
          type: PHAN_TRANG_TIM_KIEM,
          PhanTrangTimkiem: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      console.log("ds vị trí tìm kiếm", result);
    } catch (errors) {}
  };
};

export const PostViTriAction = (value) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await vitri.PostViTri(value);
      if (result.status === 200) {
        dispatch({
          type: POST_VI_TRI,
          PostViTri: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        icon: "success",
        text: "Thêm Vị Trí Thành Công",
      });
      history.push("/admin/location");
      await dispatch(getDsViTriAction());
    } catch (errors) {}
  };
};

export const GetDsViTriIDAction = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await vitri.GetViTriId(id);
      if (result.status === 200) {
        dispatch({
          type: DS_VI_TRI_ID,
          DSVitriId: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
    } catch (errors) {}
  };
};

export const PutViTriIDAction = (id, value) => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await vitri.PutViTriId(id, value);
      if (result.status === 200) {
        dispatch({
          type: PUT_VI_TRI_ID,
          PutVitriId: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        icon: "success",
        text: "Cập Nhật Vị Trí Thành Công",
      });
      history.push('/admin/location')
     await dispatch(getDsViTriAction());
    } catch (errors) {
      await swal({
        icon: "warning",
        text: "Cập Nhật Vị Trí Thất bại",
      });
    }
  };
};

export const DeleteViTriIDAction = (id) => {
  // call api
  return async (dispatch) => {
    try {
      await dispatch(DISPLAYLOADINGACTION);
      const result = await vitri.DeleteViTri(id);
      if (result.status === 200) {
        dispatch({
          type: DELETE_VI_TRI_ID,
          DeleteViTri: result.data.content,
        });
      }
      await dispatch(HIDELOADINGACTION);
      await swal({
        icon: "success",
        text: "Xóa Vị Trí Thành Công",
      });
      dispatch(getDsViTriAction());
    } catch (errors) {
      await swal({
        icon: "warning",
        text: "Xóa Vị Trí Thất bại",
      });
    }
  };
};
