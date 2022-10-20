import { useDispatch, useSelector } from "react-redux";
import { addBags, removeBags } from '../../store/modules/bags/actions';
import { GreenButtonBag, RedButtonBag, ButtonsBagContainer } from './styles';

const AddRemoveBags = () => {

  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);
  
  return (
    <ButtonsBagContainer>
      <RedButtonBag onClick={() => dispatch(removeBags(bags))}/>
      <div>{bags}</div>
      <GreenButtonBag onClick={() => dispatch(addBags(1))}/>
    </ButtonsBagContainer>
  );
};

export default AddRemoveBags;