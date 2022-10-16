import { useState } from 'react'
//import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";
import Modal from 'react-modal'
import { Container, GearIcon, InnerContainer, IconsContainer } from './styles';
import { globalModal } from '../../global/styles/index'
import Group9 from '../../assets/icons/Group 9.png'
import Gear from '../../assets/icons/gear.png'
//import Italian from '../../assets/icons/italian.png'
import AccessibilityButton from '../../assets/icons/accessibility.png'
import Sound from '../../assets/icons/sound button.png'
import Person from '../../assets/icons/person.png'
import Ticket from '../../assets/icons/ticket.png'

const ScanItemBarcode = () => {

  //const navigate = useNavigate(); 
  //const bags = useSelector((state) => state.bag);
  const [modal, showModal] = useState(false);

  const handleToggle = () => {
    showModal(!modal)
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <GearIcon src={Gear}/>
          <h1>Scan Items Barcode</h1>
        </InnerContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src={Group9} alt="" onClick={() => handleToggle()}></img>
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
        <div>Hello world</div>
      </Modal> 
  </>);
};

export default ScanItemBarcode;