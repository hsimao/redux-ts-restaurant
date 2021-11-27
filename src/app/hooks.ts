import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch, RootState } from "./store";
import { reservationsSlice } from "../features/reservationSlice";
import { customerSlice } from "../features/customerSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(
    { ...reservationsSlice.actions, ...customerSlice.actions },
    dispatch
  );
};
