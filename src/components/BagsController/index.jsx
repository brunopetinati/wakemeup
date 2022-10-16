import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, InnerContainer, BagsContainer, ButtonsBagContainer, Button, ImageBag, ImageScanner, StyledSpan, GreenButtonBag, RedButtonBag, ZeroButtonBag } from './styles';
import Scanner from '../../assets/icons/scanner.png'
import Bags from '../../assets/icons/bags.png'

const BagsController = () => {

  const [bags, setBags] = useState(0)
  const navigate = useNavigate(); 

  const checkToRemoveBag = () => {
    if (bags > 0) {
      setBags(bags-1)
    }
  };


  return (
  <Container>
    <span>Passa i prodotti sulla lettrice uno alla volta</span>
    <InnerContainer>
      <BagsContainer>
        <ImageBag src={Bags} />
        <StyledSpan>Hai bisogno di aggiungere sacchetti? {bags} </StyledSpan>
      </BagsContainer>
      <ButtonsBagContainer>
        <GreenButtonBag onClick={() => setBags(bags+1)}/>
        <ZeroButtonBag onClick={() => setBags(0)}/>
        <RedButtonBag onClick={() => checkToRemoveBag()}/>
      </ButtonsBagContainer>
      <ImageScanner src={Scanner} />
    </InnerContainer>
    <Button onClick={() => navigate('/')}>Esci</Button>
  </Container>)
};

export default BagsController;