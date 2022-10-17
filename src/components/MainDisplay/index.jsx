import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, AccessibilityIcons } from './styles';
import ProductDisplay from '../ProductDisplay';
import AccessibilityButton from '../../assets/icons/accessibility.png';
import Sound from '../../assets/icons/sound button.png';
import Person from '../../assets/icons/person.png';
import Ticket from '../../assets/icons/ticket.png';

const MainDisplay = () => {

  const navigate = useNavigate(); 
  const payment = useSelector((state) => state.payment);

  return (
  <Container>
    {payment ? <div>Jello World!</div> : <ProductDisplay />}
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