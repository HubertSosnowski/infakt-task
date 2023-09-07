import { PropsWithChildren } from "react"
import { styled } from "styled-components"

const CardStyled = styled.div`
  border: 1px solid #E4E6E8;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 1px 3px rgba(0,0,0, 0.12);
  width: 300px;
  min-height: 376px;
`

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>
}