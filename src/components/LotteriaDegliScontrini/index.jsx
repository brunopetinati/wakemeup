import { Container,  } from './styles';
import { useSelector } from "react-redux";
import Ticket from '../../assets/icons/ticket.png'

const LotteriaDegliScontrini = () => {

  //const step = useSelector((state) => state.step);
  return <Container><img src={Ticket} alt="" /><h4>LOTTERIA DEGLI SCONTRINI</h4></Container>
};

export default LotteriaDegliScontrini;