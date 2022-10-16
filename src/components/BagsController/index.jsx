import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddRemoveBags from "../AddRemoveBags";
import { Container, InnerContainer, BagsContainer, Button, ImageBag, ImageScanner, StyledSpan } from './styles';
import Scanner from '../../assets/icons/scanner.png'
import Bags from '../../assets/icons/bags.png'

const BagsController = () => {

  const navigate = useNavigate(); 
  const bags = useSelector((state) => state.bags);

  return (
  <Container>
    <span>Passa i prodotti sulla lettrice uno alla volta</span>
    <InnerContainer>
      <BagsContainer>
        <ImageBag src={Bags} />
        <StyledSpan>Hai bisogno di aggiungere sacchetti? {bags} </StyledSpan>
      </BagsContainer>
      <AddRemoveBags />
      <ImageScanner src={Scanner} />
    </InnerContainer>
    <Button onClick={() => navigate('/')}>Esci</Button>
  </Container>)
};

export default BagsController;