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
  const step = useSelector((state) => state.step);


  useEffect(() => {
  },[payment])

  const handleClick = () => {
    if (step === 2) {
      dispatch(previousStep(2));
      navigate('/');
    } else if (step === 3) {
      dispatch(previousStep(3));
      navigate('/');
    };
  };

  const handleIndietro = () => {
    if (step === 3) {
      dispatch(emptyString());
      dispatch(previousStep());
      navigate('/desk-2-scanner');
    } else if (step === 5){
      dispatch(emptyString());
      dispatch(previousStep(3));
      navigate('/desk-2-scanner');
    } else {
      dispatch(emptyString());
      dispatch(previousStep(2));
      navigate('/desk-2-scanner');
    };
  };

  return (
  <Container>
    {payment ? <PaymentOption /> : <ProductDisplay />}
    <AccessibilityIcons>
      <img src={AccessibilityButton} alt="" />
      <img src={Sound} alt="" />
      {!payment && <img src={Leave} alt="" onClick={() => handleClick()} />}
      {payment && <Button onClick={() => handleIndietro()}>INDIETRO</Button>}
    </AccessibilityIcons>
  </Container>);

};

export default MainDisplay;