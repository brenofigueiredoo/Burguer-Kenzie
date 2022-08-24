import { useContext } from "react";
import { ContextMain } from "../../Context/context";
import { Container, ContainerTotalPrice, DivCartVazio } from "./style";

export default function Cart() {
  const { totalPrice, removeToCart, currentSale, removeAll } =
    useContext(ContextMain);

  return (
    <>
      <Container>
        <div className="divH1">
          <h1>Carrinho de compras</h1>
        </div>
        {currentSale.length > 0 ? (
          <>
            <div className="divProductsCart">
              {currentSale.map((elem, index) => (
                <div key={index}>
                  <div>
                    <img className="imgProducts" src={elem.img} alt="" />
                  </div>
                  <div className="divNameAndCategory">
                    <h2>{elem.name}</h2>
                    <p>{elem.category}</p>
                  </div>
                  <div>
                    <button
                      className="buttonCart"
                      onClick={() => removeToCart(index)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <ContainerTotalPrice>
              <div>
                <h2>Total</h2>
                <h3>R${Math.round(totalPrice)},00</h3>
              </div>
              <div className="divButtonRemoveAll">
                <button className="buttonRemoveAll" onClick={removeAll}>
                  Remover todos
                </button>
              </div>
            </ContainerTotalPrice>
          </>
        ) : (
          <DivCartVazio>
            <h1>Adicione itens</h1>
            <h3>Sua sacola está vazia</h3>
          </DivCartVazio>
        )}
      </Container>
    </>
  );
}
