import { useNavigate } from "react-router-dom";
import { Container, AccessibilityIcons } from './styles';
import ProductDisplay from '../ProductDisplay';
import AccessibilityButton from '../../assets/icons/accessibility.png'
import Sound from '../../assets/icons/sound button.png'
import Person from '../../assets/icons/person.png'
import Ticket from '../../assets/icons/ticket.png'

const MainDisplay = () => {

  const navigate = useNavigate(); 

  return (
  <Container>
    <ProductDisplay />
    <AccessibilityIcons>
      <select>
        <option>Italian</option>
      </select>
      <img src={AccessibilityButton} alt="" />
      <img src={Sound} alt="" />
      <img src={Person} alt="" />
      <img src={Ticket} alt="" />
    </AccessibilityIcons>
  </Container>);

};

export default MainDisplay;