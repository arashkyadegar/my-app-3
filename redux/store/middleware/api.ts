import * as actions from "../api";
const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    next(action);
    const baseURL = process.env.NEXT_PUBLIC_BASEURL;
    const { url, method, onSuccess, onError, body, headers } = action.payload;
    console.log(action.payload);
    const requestOptions = {
      method: method,
      headers: headers,
      body: body,
    };
    try {
      console.log(baseURL + url);
      const response = await fetch(baseURL + url, requestOptions);
      const comments = await response.json();
      // General
      dispatch(actions.apiCallSucceeded(comments));
      // specified
      dispatch({ type: onSuccess, payload: comments });
    } catch (error: any) {
      // General handling
      // dispatch(actions.apiCallFailed(error.message));
      //specified handling
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };
export default api;
