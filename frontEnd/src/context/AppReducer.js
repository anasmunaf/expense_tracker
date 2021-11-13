/** @format */

const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        transaction: action.payload,
      };
    case "ADD":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    case "DELETE":
      return {
        ...state,
        transaction: state.transaction.filter(
          (arr) => action.payload !== arr._id,
        ),
      };
    default:
      return state;
  }
};
export default AppReducer;
