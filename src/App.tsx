import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "index.css";
function App() {
  return (
    <>
      <Header />
      <section>
        <div className="flex justify-start border border-black w-full  min-h-64">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
