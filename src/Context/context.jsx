import { createContext } from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";

export const ContextMain = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [allProducts, setAllproducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setAllproducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function showProducts(valueInput) {
    const filtrandoProduct = allProducts.filter(
      (elem) =>
        elem.name.toLowerCase().includes(valueInput.toLowerCase()) ||
        elem.category.toLowerCase().includes(valueInput.toLowerCase())
    );

    valueInput !== undefined && setProducts(filtrandoProduct);
  }

  function handleClick(product) {
    const find = currentSale.find((elem) => elem === product);
    find === undefined
      ? setCurrentSale([...currentSale, product])
      : toast.error("Esse item já está no carrinho");
  }

  return (
    <ContextMain.Provider
      value={{
        allProducts,
        showProducts,
        setProducts,
        products,
        handleClick,
        currentSale,
        setCurrentSale,
      }}
    >
      {children}
    </ContextMain.Provider>
  );
};
