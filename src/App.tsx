import Intro from './pages/Intro';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Project } from './pages/Project';
import { Chat } from './pages/Chat';
import HeaderMenu from './components/HeaderMenu';

function App() {
  
  return (
        <>
          <HeaderMenu/>
          <Intro/>
          <About/>
          <Skill/>
          <Project/>
          <Chat/>
        </>
  );
}

export default App;
