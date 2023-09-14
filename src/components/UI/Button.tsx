import { styled } from "styled-components";

type ButtonProps = {
  text: string;
  onButtonClick?: () => void;
}

const ButtonStyled = styled.button`
  all: unset;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgba(227,242,253, 1);
  opacity: 1;
  color: rgba(30,136,229,1);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`;

/**
 * UI - Button Component.
 * This component represents a clickable button element with specified text.
 * @param {ButtonProps} props - Component props.
 * @returns {JSX.Element} A button element with the provided text and click event handler.
 */
export const Button = ({ text, onButtonClick }: ButtonProps) => {
  return <ButtonStyled onClick={onButtonClick}>{text}</ButtonStyled>
}