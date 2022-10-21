import { useDispatch, useSelector } from "react-redux";
import { addBags, removeBags } from '../../store/modules/bags/actions';
import { GreenButtonBag, RedButtonBag, ButtonsBagContainer, ZeroButtonBag } from './styles';

const AddRemoveBags = () => {

  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);
  
  return (
    <ButtonsBagContainer>
      <RedButtonBag onClick={() => dispatch(removeBags(bags))}/>
      <ZeroButtonBag>{bags}</ZeroButtonBag>
      <GreenButtonBag onClick={() => dispatch(addBags(1))}/>
    </ButtonsBagContainer>
  );
};

export default AddRemoveBags;