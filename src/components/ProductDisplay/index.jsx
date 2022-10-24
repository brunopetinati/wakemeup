import { useNavigate } from "react-router-dom";
import { InnerContainer, ProductContainerInfo, PromotionIconsContainer, PromotionIcons, MainProductDisplay, ImagePriceDisplay, Wrapper } from './styles';
import Water from '../../assets/icons/water.png';
import Promotion1 from '../../assets/icons/promotion1.png';
import Promotion2 from '../../assets/icons/promotion2.png';
import Promotion3 from '../../assets/icons/promotion3.png';
//import Leave from '../../assets/icons/leave.png';
//<img src={Leave} alt=""onClick={() => navigate('/')}/>


const ProductDisplay = () => {

  const navigate = useNavigate(); 

  return (
    <InnerContainer>
      <ProductContainerInfo>
        <h3>Acqua Minerale Frizzante 1.5 L</h3>
        <span>80057253 Fonti di Vinadio SpA Italy</span>
      </ProductContainerInfo>
      <Wrapper>
        <ImagePriceDisplay>
          <MainProductDisplay src={Water} alt="" />
        </ImagePriceDisplay>
        <PromotionIconsContainer>
          <PromotionIcons>
            <img src={Promotion1} alt="" />
            <img src={Promotion2} alt="" />
            <img src={Promotion3} alt="" />
          </PromotionIcons>
       </PromotionIconsContainer>
      </Wrapper>
      <h1>€ 1.90</h1>
    </InnerContainer>);
};

export default ProductDisplay;