import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading/Loading";

import { RootStyled, MainLogo, MainLogoImage } from "./Root.styled";
import mainLogo from "./mainLogo.png";

const Root: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootStyled>
      <Loading />
      <MainLogo>
        <Link to="/">
          <MainLogoImage alt="inFakt Logo" src={mainLogo} />
        </Link>
      </MainLogo>
      {children}
    </RootStyled>
  );
};

export default Root