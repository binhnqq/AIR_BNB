import {
  LAY_BINH_LUAN_THEO_PHONG,
  LAY_DS_PHONG_THEO_VI_TRI,
  PHONG_THUE,
  PHONG,
  POST_PHONG,
  DELETE_PHONG,
  PUT_PHONG,
  PHONG_THEO_VI_TRI,
} from "../Types/PhongTypes";

const stateDefault = {
  DsPhong: [
    {
      id: 1,
      tenPhong: "NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!",
      khach: 3,
      phongNgu: 1,
      giuong: 1,
      phongTam: 1,
      moTa: "Tự nhận phòng\r\nTự nhận phòng bằng khóa thông minh.\r\nDinh Long là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
      giaTien: 28,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: false,
      wifi: true,
      bep: false,
      doXe: true,
      hoBoi: true,
      banUi: true,
      maViTri: 1,
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg",
    },
    {
      id: 2,
      tenPhong: "STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ",
      khach: 2,
      phongNgu: 1,
      giuong: 1,
      phongTam: 1,
      moTa: "Không gian riêng để làm việc\r\nMột khu vực chung có Wi-fi, phù hợp để làm việc.\r\nTự nhận phòng\r\nTự nhận phòng bằng khóa thông minh.\r\nKim Nam là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
      giaTien: 21,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: true,
      wifi: true,
      bep: true,
      doXe: false,
      hoBoi: false,
      banUi: false,
      maViTri: 1,
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong2.png",
    },
    {
      id: 3,
      tenPhong: "Phòng sang trọng với ban công tại D.1 - 200m đến Bitexco",
      khach: 2,
      phongNgu: 1,
      giuong: 1,
      phongTam: 1,
      moTa: "Emmy là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.\r\nTrải nghiệm nhận phòng tuyệt vời\r\n100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.\r\nHủy miễn phí trước 28 thg 9.",
      giaTien: 17,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: false,
      wifi: false,
      bep: false,
      doXe: true,
      hoBoi: true,
      banUi: true,
      maViTri: 1,
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong3.png",
    },
  ],
  PhongThue: [],
  Phong: [],
  LAYBINHLUANTHEOPHONG: [],
  PutPhong: [],
  PostPhong: [],
  DeletePhong: [],
  PhongTheoViTri: [],
};

export const DSPhongTheoVitriReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DS_PHONG_THEO_VI_TRI: {
      state.DsPhong = action.DsPhong;
      return { ...state };
    }

    case PHONG_THUE: {
      state.PhongThue = action.PhongThue;
      return { ...state };
    }

    case PHONG: {
      state.Phong = action.Phong;
      return { ...state };
    }

    case PHONG_THEO_VI_TRI: {
      state.PhongTheoViTri = action.PhongTheoViTri;
      return { ...state };
    }

    case POST_PHONG: {
      state.PostPhong = action.PostPhong;
      return { ...state };
    }
    case DELETE_PHONG: {
      state.DeletePhong = action.DeletePhong;
      return { ...state };
    }
    case PUT_PHONG: {
      state.PutPhong = action.PutPhong;
      return { ...state };
    }
    case LAY_BINH_LUAN_THEO_PHONG: {
      state.LAYBINHLUANTHEOPHONG = action.LAYBINHLUANTHEOPHONG;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
