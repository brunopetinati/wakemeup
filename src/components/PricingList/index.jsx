import { useSelector } from "react-redux";
import { Container, PricingListHeader, TableContainer, InnerContainer, InnerFirstSelection, InnerSecondSelection, MiniCard,TotalBar, Button } from './styles';
import ProductDetail from '../ProductDetail/index'
import AddRemoveBags from '../AddRemoveBags/index'
import EuroImage from '../../assets/icons/eurosign.png'
import Cart from '../../assets/icons/cart.png'
import Weight from '../../assets/icons/weight.png'
import Bags from '../../assets/icons/bags.png'


const PricingList = () => {

  const products = ['logo printed shorts', 'sweat-shirt à fermeture éclair', 'Napolina Tagliatelle', 'Adina Latte', 'Coca Cola', 'logo printed crispy nylon swim shorts']
  const bags = useSelector((state) => state.bags);

  return (
  <Container>
    <TableContainer>
      <PricingListHeader>
        <span>Prodotto</span>
        <span>Prezzo</span>
      </PricingListHeader>
      {products.map((product, index) => <ProductDetail productName={product} key={index}/>)}
    </TableContainer>
    <InnerContainer>
      <InnerFirstSelection>
        <MiniCard><div>6</div><img src={Cart} alt="" /></MiniCard>
        <MiniCard><div>130kg</div><img src={Weight} alt="" /></MiniCard>
        <MiniCard><div>{bags}</div><img src={Bags} alt="" /></MiniCard>
        <AddRemoveBags />
      </InnerFirstSelection>
      <InnerSecondSelection>
        <TotalBar><span>Totale</span><img src={EuroImage} /><div>130.50</div></TotalBar>
        <Button>Pagare</Button>
      </InnerSecondSelection>
    </InnerContainer>
  </Container>);
};

export default PricingList;