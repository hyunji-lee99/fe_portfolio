import Intro from './pages/Intro';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Project } from './pages/Project';
import { Board } from './pages/Board';
import HeaderMenu from './components/HeaderMenu';
import { useRef } from 'react';

function App() {
  const IntroRef=useRef<HTMLDivElement>(null);
  const AboutRef=useRef<HTMLDivElement>(null);
  const SkillRef=useRef<HTMLDivElement>(null);
  const ProjectRef=useRef<HTMLDivElement>(null);
  const BoardRef=useRef<HTMLDivElement>(null);
  const RefList=[IntroRef, AboutRef, SkillRef, ProjectRef, BoardRef];

  return (
        <>
          <HeaderMenu menuRef={RefList}/>
          <Intro introRef={IntroRef} nextRef={AboutRef}/>
          <About aboutRef={AboutRef} nextRef={SkillRef}/>
          <Skill skillRef={SkillRef} nextRef={ProjectRef}/>
          <Project projectRef={ProjectRef} nextRef={BoardRef}/>
          <Board boardRef={BoardRef}/>
        </>
  );
}

export default App;
