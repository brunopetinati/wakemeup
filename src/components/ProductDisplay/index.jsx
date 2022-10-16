import { Container, InnerContainer, ProductContainerInfo, PromotionIconsContainer, PromotionIcons, MainProductDisplay, AccessibilityIcons } from './styles';
import Water from '../../assets/icons/water.png'
import Promotion1 from '../../assets/icons/promotion1.png'
import Promotion2 from '../../assets/icons/promotion2.png'
import Promotion3 from '../../assets/icons/promotion3.png'
import Leave from '../../assets/icons/leave.png'

import AccessibilityButton from '../../assets/icons/accessibility.png'
import Sound from '../../assets/icons/sound button.png'
import Person from '../../assets/icons/person.png'
import Ticket from '../../assets/icons/ticket.png'

const ProductDisplay = () => {
  return (
  <Container>
    <InnerContainer>
      <ProductContainerInfo>
        <h3>Acqua Minerale Frizzante 1.5 L</h3>
        <span>80057253 Fonti di Vinadio SpA Italy</span>
        <MainProductDisplay src={Water} alt="" />
      </ProductContainerInfo>
      <PromotionIconsContainer>
        <PromotionIcons>
          <span>€ 1.90</span>
          <img src={Promotion1} alt="" />
          <img src={Promotion2} alt="" />
          <img src={Promotion3} alt="" />
          <img src={Leave} alt="" />
        </PromotionIcons>
      </PromotionIconsContainer>
    </InnerContainer>
  </Container>);

};

export default ProductDisplay;


{/* <AccessibilityIcons>
<select>
  <option>Italian</option>
</select>
<img src={AccessibilityButton} alt="" />
<img src={Sound} alt="" />
<img src={Person} alt="" />
<img src={Ticket} alt="" />
</AccessibilityIcons> */}