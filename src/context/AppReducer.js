/** @format */

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        transaction: [action.payload, ...state.transaction],
      };
    case "DELETE":
      return {
        transaction: state.transaction.filter(
          (arr) => action.payload !== arr.id,
        ),
      };
    default:
      return state;
  }
};
export default AppReducer;
