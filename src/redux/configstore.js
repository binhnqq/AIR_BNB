import { combineReducers, createStore, applyMiddleware } from "redux";

// import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DSVitri } from "./Reducer/VitriDatVeReducer";
import { DSPhongTheoVitriReducer } from "./Reducer/PhongReducer";
import { QLNDReducer } from "./Reducer/QlNDReduucer";
import { QlDatPhongReducer } from "./Reducer/QuanLyDatPhongReducer";
import { QLBinhLuanReducer } from "./Reducer/QuanLyBinhLuanReduce";
import { loadingRducer } from "./Reducer/checkloading";
import { ChuyenTabActive } from "./Reducer/ChangeTabActive";
const RootReducer = combineReducers({
  DSVitri,
  DSPhongTheoVitriReducer,
  QLNDReducer,
  QlDatPhongReducer,
  QLBinhLuanReducer,
  loadingRducer,
  ChuyenTabActive,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
