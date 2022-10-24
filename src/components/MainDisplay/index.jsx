import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { previousStep } from "../../store/modules/step/actions";
import { emptyString } from '../../store/modules/payment/actions';
import { Container, AccessibilityIcons, Button } from './styles';
import PaymentOption from "../PaymentOption";
import ProductDisplay from '../ProductDisplay';
import AccessibilityButton from '../../assets/icons/accessibility.png';
import Sound from '../../assets/icons/sound button.png';
import Leave from '../../assets/icons/leave.png';


const MainDisplay = () => {
  
  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 


  useEffect(() => {
  },[payment])

  const handleClick = () => {
    dispatch(emptyString());
    navigate('/');
  };

  return (
  <Container>
    {payment ? <PaymentOption /> : <ProductDisplay /> }
    <AccessibilityIcons>
      <img src={AccessibilityButton} alt="" />
      <img src={Sound} alt="" />
      {!payment && <img src={Leave} alt="" />}
      {payment && <Button onClick={() => handleClick()}>INDIETRO</Button>}
    </AccessibilityIcons>
  </Container>);

};

export default MainDisplay;