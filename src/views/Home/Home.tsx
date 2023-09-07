import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";
import { styled } from "styled-components";

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const Home = () => {
  return (
    <div>
      <LinkStyled to="ksiegowi">
        <Button text="Księgowi" />
      </LinkStyled>
    </div>
  )
}

export default Home