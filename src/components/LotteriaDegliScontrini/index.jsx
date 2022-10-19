import { Container,  } from './styles';
import { useSelector } from "react-redux";
import Ticket from '../../assets/icons/ticket.png'

const LotteriaDegliScontrini = () => {

  const step = useSelector((state) => state.step);

 return step === 1 && <Container><img src={Ticket} alt="" /><h1>LOTTERIA DEGLI SCONTRINI</h1></Container>
};

export default LotteriaDegliScontrini;