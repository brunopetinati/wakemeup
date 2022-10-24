import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal'
import { nextStep } from '../../store/modules/step/actions';
import { addBags } from '../../store/modules/bags/actions'
import { Container, GearIcon, InnerContainer, AccessibilityIcons, BagsModalImage, Button, GreyButton } from './styles';
import { globalModal, ModalContainer } from '../../global/styles/index'
import Gear from '../../assets/icons/gear.png'
import AccessibilityButton from '../../assets/icons/accessibility.png'
import Sound from '../../assets/icons/sound button.png'
import x from '../../assets/icons/times.svg'
import Bag from '../../assets/icons/bags.png'
import Group9 from '../../assets/icons/group9.png'

const ScanItemBarcode = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);
  const [modal, showModal] = useState(false);

  const handleBagsAddition = (bags) => {
    dispatch(addBags(bags));
    showModal(!modal);
  };

  const handleContinueWithNoBags = () => {
    dispatch(nextStep());
    navigate('/desk-2-scanner');
  };

  const handleToggle = (bags) => {
    if (bags === 0) {
    showModal(!modal)
    } else {
      dispatch(nextStep());
      navigate('/desk-2-scanner');
    };
  };

  const handleCloseModal = () => {
    showModal(!modal);
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <GearIcon src={Gear}/>
          <h1>Nostro Supermercato</h1>
        </InnerContainer>
        <p>Teniamo alla salute dei nostri clienti, abbiamo idee che vanno oltre la semplice gestione o vendita di beni</p>
        <img src={Group9} alt="" onClick={() => handleToggle(bags)}></img>
        <AccessibilityIcons>
          <img src={AccessibilityButton} alt="" />
          <img src={Sound} alt="" />
        </AccessibilityIcons>
      </Container>
      <Modal
          isOpen={modal}
          style={globalModal}
          preventScroll={true}
      >
        <img src={x} onClick={handleCloseModal} style={{width: '1em', marginLeft: '39em', cursor: 'pointer'}} alt="x"/> 

          <ModalContainer>
            <BagsModalImage src={Bag} alt=""/>
            <span>Indica il numero di borse che stai acquistando</span>
            <Button onClick={() => handleContinueWithNoBags()}>Non ho bisogno, grazie!</Button>
            <GreyButton onClick={() => handleBagsAddition(1)}>1 Borsa</GreyButton>
            <GreyButton onClick={() => handleBagsAddition(2)}>2 Borsa</GreyButton>
            <GreyButton onClick={() => handleBagsAddition(3)}>3 Borsa</GreyButton>
          </ModalContainer>
      </Modal> 
  </>);
};

export default ScanItemBarcode;