import { useNavigate } from "react-router-dom";
import { InnerContainer, ProductContainerInfo, PromotionIconsContainer, PromotionIcons, MainProductDisplay } from './styles';
import Water from '../../assets/icons/water.png';
import Promotion1 from '../../assets/icons/promotion1.png';
import Promotion2 from '../../assets/icons/promotion2.png';
import Promotion3 from '../../assets/icons/promotion3.png';
import Leave from '../../assets/icons/leave.png';


const ProductDisplay = () => {

  const navigate = useNavigate(); 

  return (
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
          <img src={Leave} alt=""onClick={() => navigate('/')}/>
        </PromotionIcons>
      </PromotionIconsContainer>
    </InnerContainer>);
};

export default ProductDisplay;