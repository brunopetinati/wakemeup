import { Container, InnerContainer } from './styles'
import Bizerba from '../../assets/icons/bizerba.png'
import Person from '../../assets/icons/person.png'

const LanguageSelector = () => {

  return (
  <Container>
    <InnerContainer>
      <img src={Bizerba} alt="" />
      <div>
        <select>
          <option>Italian</option>
        </select>
        <img src={Person} alt="" />
      </div>
    </InnerContainer>
  </Container>
  )
};


export default LanguageSelector;