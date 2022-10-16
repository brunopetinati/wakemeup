import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal'
import { addBags } from '../../store/modules/bags/actions'
import { Container, GearIcon, InnerContainer, IconsContainer, BagsModalImage, Button, GreyButton } from './styles';
import { globalModal, ModalContainer } from '../../global/styles/index'
import Group9 from '../../assets/icons/Group 9.png'
import Gear from '../../assets/icons/gear.png'
//import Italian from '../../assets/icons/italian.png'
import AccessibilityButton from '../../assets/icons/accessibility.png'
import Sound from '../../assets/icons/sound button.png'
import Person from '../../assets/icons/person.png'
import Ticket from '../../assets/icons/ticket.png'
import x from '../../assets/icons/times.svg'
import Bag from '../../assets/icons/bags.png'

const ScanItemBarcode = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);
  const [modal, showModal] = useState(false);

  const handleBagsAddition = (bags) => {
    dispatch(addBags(bags));
    showModal(!modal);
  };

  const handleToggle = (bags) => {
    if (bags === 0) {
    showModal(!modal)
    } else {
      navigate('/')
    };
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <GearIcon src={Gear}/>
          <h1>Scan Items Barcode</h1>
        </InnerContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src={Group9} alt="" onClick={() => handleToggle(bags)}></img>
        <IconsContainer>
          <select>
            <option>Italian</option>
          </select>
          <img src={AccessibilityButton} alt="" />
          <img src={Sound} alt="" />
          <img src={Person} alt="" />
          <img src={Ticket} alt="" />
        </IconsContainer>
      </Container>
      <Modal
          isOpen={modal}
          style={globalModal}
          preventScroll={true}
      >
        <img src={x} onClick={handleToggle} style={{width: '1em', marginLeft: '39em', cursor: 'pointer'}} alt="x"/> 

          <ModalContainer>
            <BagsModalImage src={Bag} alt=""/>
            <span>Indica il numero di borse che stai acquistando</span>
            <Button>Non ho bisogno, grazie!</Button>
            <GreyButton onClick={() => handleBagsAddition(1)}>1 Borsa</GreyButton>
            <GreyButton onClick={() => handleBagsAddition(2)}>2 Borsa</GreyButton>
            <GreyButton onClick={() => handleBagsAddition(3)}>3 Borsa</GreyButton>
          </ModalContainer>
      </Modal> 
  </>);
};

export default ScanItemBarcode;