import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction(
  "api/callBegan",
  function prepare(payload: any) {
    return {
      payload,
    };
  }
);
export const apiCallSucceeded = createAction("api/callSucceeded");
export const apiCallFailed = createAction("api/callFailed");

