import { Card } from "../../../UI/Card"
import { Button } from "../../../UI/Button";
import { MainRow, ImageWrapper, Image, MainInfo, MainInfoText, MainInfoName, Row, RowText, RowValue, InnerCard, SmallValue } from "./AccountantCard.styled";
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
          <RowValue underline><a href={`mailto:${accountant.email}`}>{accountant.email}</a></RowValue>
        </Row>
        <Row>
          <RowText>Telefon</RowText>
          <RowValue>{accountant.cell}</RowValue>
        </Row>
        <Row>
          <RowText>Średnia cena netto usługi / m-c</RowText>
          <RowValue>350,00 <SmallValue>PLN</SmallValue></RowValue>
        </Row>
        <Row>
          <Button text="Dowiedz się więcej" />
        </Row>
      </InnerCard>
    </Card>
  )
}

export default AccountantCard; 