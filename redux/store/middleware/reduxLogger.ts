const reduxLogger = (state: any) => (next: any) => (action: any) => {
  //console.log("redux logger");
  next(action);
};
export default reduxLogger;
