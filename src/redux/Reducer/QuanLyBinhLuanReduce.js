import {
  DELETE_BINH_LUAN,
  LAY_BINH_LUAN,
  POST_BINH_LUAN,
  PUT_BINH_LUAN,
} from "../Types/BinhLuanTypes";

const stateDefault = {
  LayBinhLuan: [],
  PostBinhLuan: [],
  PutBinhLuan: [],
  DeleteBinhLuan: [],
};

export const QLBinhLuanReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_BINH_LUAN: {
      state.LayBinhLuan = action.LayBinhLuan;
      return { ...state };
    }

    case POST_BINH_LUAN: {
      state.PostBinhLuan = action.PostBinhLuan;
      return { ...state };
    }
    case PUT_BINH_LUAN: {
      state.PutBinhLuan = action.PuttBinhLuan;
      return { ...state };
    }
    case DELETE_BINH_LUAN: {
      state.DeleteBinhLuan = action.DeleteBinhLuan;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
