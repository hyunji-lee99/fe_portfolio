import styled, {keyframes} from "styled-components";

const Ocean = styled.div`
  height: 30%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #87CEEB;
`

const wave=keyframes`
  0% {
      background-position: 0;
  }
  100% {
      background-position: 1600px;
  }
`

const swell=keyframes`
  0%, 100% {
    transform: translate3d(0, -20px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
`

const Wave = styled.div`
  background: url("/images/intro/wave.svg") repeat-x;
  position: absolute;
  top: -198px;
  width: 100%;
  height: 198px;
  -webkit-animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
          animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  &:nth-of-type(2){
    top: -175px;
    -webkit-animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, ${swell} 7s ease -1.25s infinite;
    animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, ${swell} 7s ease -1.25s infinite;
    opacity: 1;
  }
`

export function WaveBackground(){
  
    return(
        <Ocean>
            <Wave/>
            <Wave/>
        </Ocean>

    );
}