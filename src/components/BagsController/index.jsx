import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddRemoveBags from "../AddRemoveBags";
import { previousStep } from "../../store/modules/step/actions";
import { Container, InnerContainer, BagsContainer, Button, ImageBag, ImageScanner, StyledSpan } from './styles';
import Scanner from '../../assets/icons/gif.gif'
import Bags from '../../assets/icons/bags.png'

const BagsController = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);

  const handleClick = () => {
    dispatch(previousStep());
    navigate('/');
  };

  return (
  <Container>
    <span>Passa i prodotti sulla lettrice uno alla volta</span>
    <InnerContainer>
      <BagsContainer>
        <ImageScanner src={Scanner} />
        <ImageBag src={Bags} />
        <StyledSpan>Hai bisogno di aggiungere sacchetti?</StyledSpan>
      </BagsContainer>
      <AddRemoveBags />
    </InnerContainer>
    <Button onClick={() => handleClick()}>USCIRE</Button>
  </Container>
  )
};

export default BagsController;