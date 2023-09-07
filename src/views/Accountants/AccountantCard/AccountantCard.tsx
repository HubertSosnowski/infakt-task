import { Card } from "../../../UI/Card"
import { Button } from "../../../UI/Button";
import { MainRow, ImageWrapper, Image, MainInfo, MainInfoText, MainInfoName, Row, RowText, RotInfo, InnerCard } from "./AccountantCard.styled";
import { AccountantType } from '../../../store/accountants/types'

const AccountantCard = ({ accountant }: { accountant: AccountantType }) => {
  return (
    <Card>
      <InnerCard>
        <MainRow>
          <ImageWrapper>
            <Image src={accountant.picture.medium} />
          </ImageWrapper>
          <MainInfo>
            <MainInfoText>Twoja księgowa</MainInfoText>
            <MainInfoName>{accountant.name.first} {accountant.name.last}</MainInfoName>
          </MainInfo>
        </MainRow>
        <Row>
          <RowText>E-mail</RowText>
          <RotInfo>{accountant.email}</RotInfo>
        </Row>
        <Row>
          <RowText>Telefon</RowText>
          <RotInfo>{accountant.cell}</RotInfo>
        </Row>
        <Row>
          <RowText>Średnia cena netto usługi / m-c</RowText>
          <RotInfo>350,00 PLN</RotInfo>
        </Row>
        <Row>
          <Button text="Dowiedz się więcej" />
        </Row>
      </InnerCard>
    </Card>
  )
}

export default AccountantCard;