import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
