import { Container, InnerContainer, BagsContainer, ButtonsBagContainer, Button, ImageBag, ImageScanner, StyledSpan, GreenButtonBag, RedButtonBag, ZeroButtonBag } from './styles';
import Scanner from '../../assets/icons/scanner.png'
import Bags from '../../assets/icons/bags.png'

const BagsController = () => {
  return (
  <Container>
    <span>Passa i prodotti sulla lettrice uno alla volta</span>
    <InnerContainer>
      <BagsContainer>
        <ImageBag src={Bags} />
        <StyledSpan>Hai bisogno di aggiungere sacchetti?</StyledSpan>
      </BagsContainer>
      <ButtonsBagContainer>
        <GreenButtonBag />
        <ZeroButtonBag />
        <RedButtonBag />
      </ButtonsBagContainer>
      <ImageScanner src={Scanner} />
    </InnerContainer>
    <Button>Esci</Button>
  </Container>)
};

export default BagsController;