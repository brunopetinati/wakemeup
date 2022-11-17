import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, InnerContainer } from './styles'
import Bizerba from '../../assets/icons/bizerba.png'
import Person from '../../assets/icons/person.png'
import ReactFlagsSelect from "react-flags-select";


const LanguageSelector = () => {

  const step = useSelector((state) => state.step)
  const [selected, setSelected] = useState("");

  return step !== 0 && 
  <Container>
    <InnerContainer>
    <img src={Bizerba} alt=""  />
    
    <div>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        countries={["US", "IT"]}
        placeholder="Language"
        showSelectedLabel={false}
      />
      <img src={Person} alt="" />
    </div>
  </InnerContainer>
</Container>
};


export default LanguageSelector;