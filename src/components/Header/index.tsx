import { useContext } from "react";
import Logo from "../../images/MaskGroup.png";
import { Container, DivInput, Button } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { ContextMain } from "../../Context/context";

export default function Header() {
  const { showProducts, valueInput, search } = useContext(ContextMain);

  return (
    <Container>
      <div>
        <img src={Logo} alt="logo"></img>
      </div>
      <DivInput>
        <input type="text" placeholder="Digitar Pesquisa" onChange={search} />
        <div>
          <Button onClick={() => showProducts(valueInput)}>
            <AiOutlineSearch size={24} />
          </Button>
        </div>
      </DivInput>
    </Container>
  );
}
