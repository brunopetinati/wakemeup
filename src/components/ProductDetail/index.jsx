import { Container, ProductName, PriceDisplay } from './styles'
import EraseIcon from '../../assets/icons/erase-icon.png'

const ProductDetail = ({productName}) => {
  return(
    <Container>
      <ProductName>{productName}</ProductName>
      <PriceDisplay>€ 1.90</PriceDisplay>
      <img src={EraseIcon} alt="" />
    </Container>
  )
};

export default ProductDetail;