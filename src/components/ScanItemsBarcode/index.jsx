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
import Group9 from '../../assets/icons/group9.png'

const ScanItemBarcode = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);
  const [modal, showModal] = useState(false);

  const handleToggle = (bags) => {
      dispatch(nextStep());
      navigate('/desk-2-scanner');
  };

  return (
    <>
      <Container>
        <InnerContainer>
          {/* <GearIcon src={Gear}/> */}
          <h1>Nostro Supermercato</h1>
        </InnerContainer>
        <p>Teniamo alla salute dei nostri clienti, abbiamo idee che vanno oltre la semplice gestione o vendita di beni</p>
        <img src={Group9} alt="" onClick={() => handleToggle(bags)}></img>
        <AccessibilityIcons>
          <img src={AccessibilityButton} alt="" />
          <img src={Sound} alt="" />
        </AccessibilityIcons>
      </Container>
  </>);
};

export default ScanItemBarcode;