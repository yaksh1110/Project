import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchActions.fetchingStart());
    fetch("http://localhost:7000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res:", res);
        dispatch(fetchActions.fetchDone());
        dispatch(fetchActions.fetchingEnd());
        dispatch(itemsActions.addInitialItems([res]));
      });
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
