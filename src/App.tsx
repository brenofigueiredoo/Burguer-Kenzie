import Global from "./styles/global";
import "./App.css";
import Header from "./components/Header";
import Productlist from "./components/ProductsList";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./Context/context";

function App() {
  return (
    <>
      <ContextProvider>
        <div>
          <Global />
          <Header />;
          <div className="divMain">
            <Productlist />
            <Cart />
          </div>
        </div>
        <ToastContainer />
      </ContextProvider>
    </>
  );
}

export default App;
