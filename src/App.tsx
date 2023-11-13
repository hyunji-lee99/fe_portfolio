import Intro from './pages/Intro';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Project } from './pages/Project';
import { Board } from './pages/Board';
import HeaderMenu from './components/HeaderMenu';

function App() {
  
  return (
        <>
          <HeaderMenu/>
          <Intro/>
          <About/>
          <Skill/>
          <Project/>
          <Board/>
        </>
  );
}

export default App;
