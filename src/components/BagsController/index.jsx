import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBags, removeBags, zeroBags } from '../../store/modules/bags/actions'

import { Container, InnerContainer, BagsContainer, ButtonsBagContainer, Button, ImageBag, ImageScanner, StyledSpan, GreenButtonBag, RedButtonBag, ZeroButtonBag } from './styles';
import Scanner from '../../assets/icons/scanner.png'
import Bags from '../../assets/icons/bags.png'

const BagsController = () => {

  const navigate = useNavigate(); 
  const bags = useSelector((state) => state.bags);
  const dispatch = useDispatch();


  return (
  <Container>
    <span>Passa i prodotti sulla lettrice uno alla volta</span>
    <InnerContainer>
      <BagsContainer>
        <ImageBag src={Bags} />
        <StyledSpan>Hai bisogno di aggiungere sacchetti? {bags} </StyledSpan>
      </BagsContainer>
      <ButtonsBagContainer>
        <GreenButtonBag onClick={() => dispatch(addBags(1))}/>
        <ZeroButtonBag onClick={() => dispatch(zeroBags(bags))}/>
        <RedButtonBag onClick={() => dispatch(removeBags(bags))}/>
      </ButtonsBagContainer>
      <ImageScanner src={Scanner} />
    </InnerContainer>
    <Button onClick={() => navigate('/')}>Esci</Button>
  </Container>)
};

export default BagsController;