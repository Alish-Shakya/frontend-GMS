import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import Sidebar from "./components/home/Sidebar";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLogin");
    if (loggedIn === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location.pathname]); // re-check when route changes

  return (
    <div className="flex">
      {/* Show Sidebar only when logged in and not on /admin/login */}
      {isLogin && location.pathname !== "/" && <Sidebar />}
      <MyRoutes />
    </div>
  );
}

export default App;
