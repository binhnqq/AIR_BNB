import { baseService } from "./BaseService";
export class DatPhongService extends baseService {
  constructor() {
    super();
  }
  GetApiDatPhong = () => {
    return this.get(`api/dat-phong`);
  };
  GetApiDatPhongId = (maPhong) => {
    return this.get(`api/dat-phong/${maPhong}`);
  };

  PostApiDatPhong = (values) => {
    return this.post(`api/dat-phong`, values);
  };
  PutApiDatPhong = (id,value) =>{
    return this.put(`api/dat-phong/${id}`,value)
  }
  DeleteDatPhong = (id) => {
    return this.delete(`api/dat-phong/${id}`);
  };

  GetApiDatPhongTheoMaND = (maND) => {
    return this.get(`api/dat-phong/lay-theo-nguoi-dung/${maND}`);
  };
}

export const datphong = new DatPhongService();
