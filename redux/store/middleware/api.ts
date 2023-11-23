import * as actions from '../api';
const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    next(action);
    const baseURL = process.env.NEXT_PUBLIC_BASEURL;
    const { url, method, onSuccess, onError,body } = action.payload;

    const requestOptions = {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: body
    };
    try {
      const response = await fetch(
       url ,
        requestOptions
      );
      const comments = await response.json();
      // General
      dispatch(actions.apiCallSucceeded(comments));
      // specified
      dispatch({ type: onSuccess, payload: comments });
    } catch (error: any) {
      // General handling
     // dispatch(actions.apiCallFailed(error.message));
      //specified handling
      if(onError) dispatch({ type: onError, payload: error.message });
    }
  };
export default api;
