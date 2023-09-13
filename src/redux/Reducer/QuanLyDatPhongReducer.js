import {
  DELETE_DAT_PHONG,
  GET_API_DAT_PHONG,
  GET_API_DAT_PHONG_ID,
  GET_API_DAT_PHONG_THEO_MA_ND,
  POST_API_DAT_PHONG,
  PUT_API_DAT_PHONG,
} from "../Types/QlDatPhongTypes";

const stateDefault = {
  GetApiDatPhong: [],
  GetApiDatPhongId: [],
  PostApiDatPhong: [],
  PutApiDatPhong: [],
  DeleteDatPhong: [],
  GetApiDatPhongTheoMaND: [],
};

export const QlDatPhongReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_API_DAT_PHONG: {
      state.GetApiDatPhong = action.GetApiDatPhong;
      return { ...state };
    }

    case GET_API_DAT_PHONG_ID: {
      state.GetApiDatPhongId = action.GetApiDatPhongId;
      return { ...state };
    }
    case POST_API_DAT_PHONG: {
      state.PostApiDatPhong = action.PostApiDatPhong;
      return { ...state };
    }
    case PUT_API_DAT_PHONG: {
      state.PutApiDatPhong = action.PutApiDatPhong;
      return { ...state };
    }
    case DELETE_DAT_PHONG: {
      state.DeleteDatPhong = action.DeleteDatPhong;
      return { ...state };
    }
    case GET_API_DAT_PHONG_THEO_MA_ND: {
      state.GetApiDatPhongTheoMaND = action.GetApiDatPhongTheoMaND;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
