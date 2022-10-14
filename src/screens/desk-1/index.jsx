import { MainContainer } from '../../global/styles/index'
import MultiStepForm from '../../components/MultiStepForm';
import LotteriaDegliScontrini from '../../components/LotteriaDegliScontrini';
import ScanItemBarcode from '../../components/ScanItemBarcode'
import BagsController from '../../components/BagsController';


const Desk_1_Init = () => {
  return (
  <>
    <MainContainer>
      <MultiStepForm />
      <LotteriaDegliScontrini />
      <ScanItemBarcode />
      <BagsController />
    </MainContainer>
  </>
  )
};

export default Desk_1_Init;