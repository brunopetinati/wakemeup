import { useDispatch, useSelector } from "react-redux";
import { addBags, removeBags } from '../../store/modules/bags/actions';
import { GreenButtonBag, ButtonsBagContainer, RedButtonBag, ZeroButtonBag, ZeroButtonBagStyled, RedButtonBagStyled, GreenButtonBagStyled } from './styles';

const AddRemoveBags = () => {

  const dispatch = useDispatch();
  const bags = useSelector((state) => state.bags);
  const step = useSelector((state) => state.step);

  const StyleSolver = () => {
    if (step === 1) {
      return (
        <ButtonsBagContainer>
          <RedButtonBag onClick={() => dispatch(removeBags(bags))}/>
          <ZeroButtonBag>{bags}</ZeroButtonBag>
          <GreenButtonBag onClick={() => dispatch(addBags(1))}/>
        </ButtonsBagContainer>
      )
    } else {
      return (
        <>
          <RedButtonBagStyled onClick={() => dispatch(removeBags(bags))}/>
          <ZeroButtonBagStyled>{bags}</ZeroButtonBagStyled>
          <GreenButtonBagStyled onClick={() => dispatch(addBags(1))}/>
        </>
      )
    }
  };
  
  return (
    <StyleSolver />
  );
};

export default AddRemoveBags;