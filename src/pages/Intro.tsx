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
type IntroProps={
  introRef:React.ForwardedRef<HTMLDivElement>;
  nextRef:React.ForwardedRef<HTMLDivElement|null>;
}

function Intro(prop:IntroProps){
  return (
    <Div ref={prop.introRef}>
      <Title/>
      <WaveBackground/>
      <DownButton location={prop.nextRef}/>
    </Div>
  );
}

export default Intro;
