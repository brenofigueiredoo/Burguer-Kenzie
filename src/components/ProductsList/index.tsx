import { useContext } from "react";
import { ContextMain } from "../../Context/context";
import { Container, ContainerImg, DivButton, ContainerInfo } from "./style";

export default function Productlist() {
  const { products, handleClick } = useContext(ContextMain);

  return (
    <>
      <Container>
        {products.map((elem, index) => (
          <div className="divCards" key={index}>
            <ContainerImg>
              <img src={elem.img} alt="" />
            </ContainerImg>
            <ContainerInfo>
              <h2>{elem.name}</h2>
              <p>{elem.category}</p>
              <h3>R${elem.price}</h3>
              <DivButton>
                <button onClick={() => handleClick(elem)}>Adicionar</button>
              </DivButton>
            </ContainerInfo>
          </div>
        ))}
      </Container>
    </>
  );
}
