import React from 'react';
import styled from 'styled-components';
import '../fonts/font.css';
import { WaveBackground } from '../components/Intro/WaveBackground';
import { Title } from '../components/Intro/Title';
import { DownButton } from '../components/common/DownButton';

const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
`

function Intro() {
  return (
    <Div>
      <Title/>
      <WaveBackground/>
      <DownButton location={1}/>
    </Div>
  );
}

export default Intro;
