import { Container, InnerContainer, SatisfactionContainer, SmilyFaces} from './styles'
import HappySmile from '../../assets/icons/happysmile.png'
import NeutralSmile from '../../assets/icons/neutralsmile.png'
import SadSmile from '../../assets/icons/sadsmile.png'



const SatisfactionSurvey = () => {

  return(
    <Container>
      <InnerContainer>Messaggio di ringraziamento</InnerContainer>
      <SatisfactionContainer>
        <span>Come é stata le tua esperienza con noi?</span>
        <SmilyFaces>
          <img src={HappySmile} alt="" />
          <img src={NeutralSmile} alt="" />
          <img src={SadSmile} alt="" />
        </SmilyFaces>
      </SatisfactionContainer>
    </Container>
  )
};

export default SatisfactionSurvey;