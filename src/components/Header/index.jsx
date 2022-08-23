import { useContext, useState } from "react";
import Logo from "../../images/MaskGroup.png";
import { Container, DivInput, Button } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { ContextMain } from "../../Context/context";

export default function Header() {
  const { showProducts, setProducts, allProducts } = useContext(ContextMain);

  const [value, setValue] = useState("");

  function search(e) {
    setValue(e.target.value);

    if (e.target.value === "") {
      setProducts(allProducts);
    } else {
      showProducts(e.target.value);
    }
  }

  return (
    <Container>
      <div>
        <img src={Logo} alt="logo"></img>
      </div>
      <DivInput>
        <input type="text" placeholder="Digitar Pesquisa" onChange={search} />
        <div>
          <Button onClick={() => showProducts(value)}>
            <AiOutlineSearch size={24} />
          </Button>
        </div>
      </DivInput>
    </Container>
  );
}
