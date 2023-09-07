import { styled } from "styled-components";

interface RowValueProps {
  readonly underline?: boolean
}

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const MainRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 64px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainInfoText = styled.h6`
  color: rgba(84,88,92,1);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const MainInfoName = styled.h3`
  color: rgba(0,0,0,1); 
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;  
`;

export const Row = styled.div``
export const RowText = styled.p`
  color: rgba(84,88,92,1);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`
export const RowValue = styled.p<RowValueProps>`
  color: rgba(0,0,0,1);
  font-size: 16px;
  line-height: 24px;
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};

  a {
    all: unset;
    cursor: pointer;
  }
`

export const SmallValue = styled.span`
  font-size: 12px;
  line-height: 16px;
`;