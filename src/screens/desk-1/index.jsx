import { AdvertiseContainer, MainContainer } from '../../global/styles/index'
import MultiStepForm from '../../components/MultiStepForm';
import LotteriaDegliScontrini from '../../components/LotteriaDegliScontrini';


const Desk_1_Init = () => {
  return (
  <>
    <AdvertiseContainer />
    <MainContainer>
      <MultiStepForm />
      <LotteriaDegliScontrini />
    </MainContainer>
  </>
  )
};

export default Desk_1_Init;