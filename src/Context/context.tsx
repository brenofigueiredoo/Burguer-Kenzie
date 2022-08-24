import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";

interface ContextProps {
  children: ReactNode;
}

interface IValueInputShowProducts {
  toLowerCase: any;
  valueInput: string;
}

interface IProductsList {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IUserContext {
  allProducts: IProductsList[];
  showProducts: (valueInput: IValueInputShowProducts) => void;
  setProducts: React.Dispatch<React.SetStateAction<IProductsList[]>>;
  products: IProductsList[];
  handleClick: (product: any) => void;
  currentSale: IProductsList[];
  setCurrentSale: React.Dispatch<React.SetStateAction<IProductsList[]>>;
  totalPrice: number;
  removeToCart: (idProduct: any) => void;
  removeAll: () => void;
  valueInput: any;
  setValueInput: React.Dispatch<
    React.SetStateAction<IValueInputShowProducts | undefined>
  >;
  search: (e: any) => void;
}

export const ContextMain = createContext<IUserContext>({} as IUserContext);

export const ContextProvider = ({ children }: ContextProps) => {
  const [products, setProducts] = useState<IProductsList[]>([]);
  const [currentSale, setCurrentSale] = useState<IProductsList[]>([]);
  const [allProducts, setAllproducts] = useState<IProductsList[]>([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setAllproducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function showProducts(valueInput: IValueInputShowProducts) {
    const filtrandoProduct = allProducts.filter(
      (elem) =>
        elem.name.toLowerCase().includes(valueInput.toLowerCase()) ||
        elem.category.toLowerCase().includes(valueInput.toLowerCase())
    );

    valueInput !== undefined && setProducts(filtrandoProduct);
  }

  function handleClick(product: any) {
    const find = currentSale.find((elem) => elem === product);
    find === undefined
      ? setCurrentSale([...currentSale, product])
      : toast.error("Esse item já está no carrinho");
  }

  //Cart
  const totalPrice = currentSale.reduce(
    (acc, currentValue) => currentValue.price + acc,
    0
  );

  function removeToCart(idProduct: any) {
    currentSale.splice(idProduct, 1);
    setCurrentSale([...currentSale]);
  }

  function removeAll() {
    currentSale.splice(0, currentSale.length);
    setCurrentSale([...currentSale]);
  }

  //Header
  const [valueInput, setValueInput] = useState<IValueInputShowProducts>();

  function search(e: any) {
    setValueInput(e.target.value);

    if (e.target.value === "") {
      setProducts(allProducts);
    } else {
      showProducts(e.target.value);
    }
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
        totalPrice,
        removeToCart,
        removeAll,
        valueInput,
        setValueInput,
        search,
      }}
    >
      {children}
    </ContextMain.Provider>
  );
};
