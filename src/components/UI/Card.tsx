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

/**
 * UI - Card Component.
 * This component is used to create a card container with children in it.
 * @param {PropsWithChildren} props - Component props.
 * @returns {JSX.Element} A card element containing the specified children.
 */
export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>
}