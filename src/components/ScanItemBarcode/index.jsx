import { Container, GearIcon, HeaderSmallContainer, IconsContainer } from './styles';
import Group9 from '../../assets/icons/Group 9.png'
import Gear from '../../assets/icons/gear.png'
import Italian from '../../assets/icons/italian.png'
import AccessibilityButton from '../../assets/icons/accessibility.png'
import Sound from '../../assets/icons/sound button.png'
import Person from '../../assets/icons/person.png'
import Ticket from '../../assets/icons/ticket.png'



const ScanItemBarcode = () => {
  return (
    <>
  <Container>
    <HeaderSmallContainer>
      <GearIcon src={Gear}/>
      <h1>Scan Items Barcode</h1>
    </HeaderSmallContainer>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <img src={Group9} alt=""></img>
    <IconsContainer>
      <select>
        <option><img src={Italian} alt="" /></option>
      </select>
      <img src={AccessibilityButton} alt="" />
      <img src={Sound} alt="" />
      <img src={Person} alt="" />
      <img src={Ticket} alt="" />
    </IconsContainer>
  </Container>
  </>);
};

export default ScanItemBarcode;