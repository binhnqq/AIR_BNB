import { baseService } from "./BaseService";
export class PhongService extends baseService {
  constructor() {
    super();
  }
  LayPhongTheoViTri = (id) => {
    //lay từ Api
    return this.get(`api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`);
  };

  PhongThue = () => {
    return this.get(`api/phong-thue`);
  };

  PostPhongThue = (phong) => {
    return this.post(`api/phong-thue`, phong);
  };

  DeletePhong = (id) => {
    return this.delete(`api/phong-thue/${id}`);
  };

  PutPhong = (id, value) => {
    return this.put(`api/phong-thue/${id}`, value);
  };

  PhongThueId = (id) => {
    return this.get(`api/phong-thue/${id}`);
  };

  laybinhluantheoMaPhong = (maPhong) => {
    return this.get(`api/binh-luan/lay-binh-luan-theo-phong/${maPhong}`);
  };

  DatPhongLayTheoND = (id) => {
    return this.get(`api/dat-phong/lay-theo-nguoi-dung/${id}`);
  };
}

export const phong = new PhongService();
