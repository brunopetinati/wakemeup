import MultiStepForm from '../MultiStep';
import styled from 'styled-components';
import { AppplicationPage } from './styles'
import Bizerba from '../../assets/icons/bizerba.png'
import Person from '../../assets/icons/person.png'


const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1;

  div {
    border: solid;
  }
`;

const LeftPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 166px 100px 1000px 100px;

  div {
    border: solid;
  }
`;

const RightPanel = styled.div``;

const GridComponent = () => {

  return (
    <AppplicationPage>
      <Header>
        <img src={Bizerba} alt="" />
        <div>
          <select>
            <option>Italian</option>
          </select>
          <img src={Person} alt="" />
        </div>
      </Header>
      <Content>
        <LeftPanel>
          <MultiStepForm />
          <div>Lottery</div>
          <div>Image</div>
          <div>Footer</div>
        </LeftPanel>
        <div>Right</div>
      </Content>
    </AppplicationPage>
  )
};

export default GridComponent;