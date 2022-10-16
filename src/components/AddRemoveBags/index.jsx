import { useDispatch, useSelector } from "react-redux";
import { addBags, removeBags, zeroBags } from '../../store/modules/bags/actions'
import { GreenButtonBag, RedButtonBag, ZeroButtonBag, ButtonsBagContainer } from './styles';

const AddRemoveBags = () => {

  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);
  
  return (
    <ButtonsBagContainer>
      <GreenButtonBag onClick={() => dispatch(addBags(1))}/>
      <ZeroButtonBag onClick={() => dispatch(zeroBags(bags))}/>
      <RedButtonBag onClick={() => dispatch(removeBags(bags))}/>
    </ButtonsBagContainer>
  );
};

export default AddRemoveBags;