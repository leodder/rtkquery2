import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Post from "./components/Post";
import User from "./components/User";
import { fetchUserProfile } from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  return (
    <div className="App">
      <User />
      <hr />
      <Post />
    </div>
  );
}

export default App;
