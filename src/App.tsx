import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "index.css";
function App() {
  return (
    <>
      <Header />
      <section>
        <div className="flex justify-start p-3  items-center border border-black w-full h-full min-h-32">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
