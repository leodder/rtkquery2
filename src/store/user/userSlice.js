import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile(state, action) {
      state.user = action.payload.results[0];
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;

export const fetchUserProfile = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("Fetch Fail!!!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const userData = await fetchData();
      dispatch(userAction.setUserProfile(userData));
    } catch (error) {}
  };
};
