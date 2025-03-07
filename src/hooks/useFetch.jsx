import { useEffect, useReducer } from "react";

const initialState = {
  data: null,
  isPending: false,
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { data: null, isPending: true, error: null };
    case "FETCH_SUCCESS":
      return { data: action.payload, isPending: false, error: null };
    case "FETCH_ERROR":
      return { data: null, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);

  return state;
}
