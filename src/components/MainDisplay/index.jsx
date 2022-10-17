import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { previousStep } from "../../store/modules/step/actions";
import { emptyString } from '../../store/modules/payment/actions';
import { Container, AccessibilityIcons, Button } from './styles';
import PaymentOption from "../PaymentOption";
import ProductDisplay from '../ProductDisplay';
import AccessibilityButton from '../../assets/icons/accessibility.png';
import Sound from '../../assets/icons/sound button.png';
import Person from '../../assets/icons/person.png';
import Ticket from '../../assets/icons/ticket.png';

const MainDisplay = () => {
  
  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  useEffect(() => {
  },[payment])

  const handleClick = () => {
    dispatch(previousStep());
    dispatch(emptyString());
  };

  return (
  <Container>
    {payment ? <PaymentOption /> : <ProductDisplay /> }
    <AccessibilityIcons>
      <select>
        <option>Italian</option>
      </select>
      <img src={AccessibilityButton} alt="" />
      <img src={Sound} alt="" />
      <img src={Person} alt="" />
      <img src={Ticket} alt="" />
      {payment && <Button onClick={() => handleClick()}>indietro</Button>}
    </AccessibilityIcons>
  </Container>);

};

export default MainDisplay;