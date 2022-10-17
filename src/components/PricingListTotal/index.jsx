import ProductDetail from '../ProductDetail';
import { Container, Header, Button } from './styles';
import Cart from '../../assets/icons/white-cart.png'

const PricingListTotal = () => {
  // TO DO: pensar em como importar a lista para esse componente. Provavelmente redux.
  // TO DO: resolver lista grande com scroll no css
  const products = ['logo printed shorts', 'sweat-shirt à fermeture éclair', 'Napolina Tagliatelle', 'Adina Latte', 'Coca Cola', 'logo printed crispy nylon swim shorts']

  return (
  <Container>
    <Header><img src={Cart} alt="" />6 articoli</Header>
    {products.map((product, index) => <ProductDetail productName={product} key={index}/>)}
    <Button>€ 130.65</Button>
  </Container>
  )
};

export default PricingListTotal;