import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { Button } from "../../components/UI/Button";

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const Home = () => {
  return (
    <div>
      <LinkStyled to="/ksiegowi">
        <Button text="Księgowi" />
      </LinkStyled>
    </div>
  )
}

export default Home