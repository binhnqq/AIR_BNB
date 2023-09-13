import {
  DS_VI_TRI_ID,
  PHAN_TRANG_TIM_KIEM,
  POST_VI_TRI,
  VI_TRI_DAT_VE,
} from "../Types/ViTriDatVeType";

const stateDefault = {
  DsViTri: [
    {
      id: 1,
      tenViTri: "Quận 1",
      tinhThanh: "Hồ Chí Minh",
      quocGia: "Việt Nam",
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg",
    },
  ],
  PhanTrangTimkiem: [],
  PostViTri: [],
  DSVitriId: [],
  PutVitriId: [],
};

export const DSVitri = (state = stateDefault, action) => {
  switch (action.type) {
    case VI_TRI_DAT_VE: {
      state.DsViTri = action.DsViTri;
      return { ...state };
    }
    case PHAN_TRANG_TIM_KIEM: {
      state.PhanTrangTimkiem = action.PhanTrangTimkiem;
      return { ...state };
    }
    case POST_VI_TRI: {
      state.PostViTri = action.PostViTri;
      return { ...state };
    }
    case DS_VI_TRI_ID: {
      state.DSVitriId = action.DSVitriId;
      return { ...state };
    }
    case DS_VI_TRI_ID: {
      state.PutVitriId = action.PutVitriId;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
