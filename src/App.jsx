import { ThemeProvider } from "./ThemeContext";
import { ToastContainer } from "react-toastify";
import MyRoutes from "./routes/MyRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <MyRoutes />
      <ToastContainer position="top-center" autoClose={4000} />
    </ThemeProvider>
  );
}

export default App;
