import { MainContainer } from '../../global/styles/index'
import MultiStepForm from '../../components/MultiStep';
import LotteriaDegliScontrini from '../../components/LotteriaDegliScontrini';
import BagsController from '../../components/BagsController';
import ScanItemBarcode from '../../components/ScanItemBarcode';


const Desk_1_Init = () => {
  return (
  <>
    <MainContainer>
      <MultiStepForm />
      <LotteriaDegliScontrini />
      <BagsController />
      <ScanItemBarcode />
    </MainContainer>
  </>
  )
};

export default Desk_1_Init;