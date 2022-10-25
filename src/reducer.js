export const initialState = {
  studentName: null,
  userInfo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEND_NAME":
      return {
        
        studentName: action.studentName,
      };
    case "Info":
      return {
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default reducer;
