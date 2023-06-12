import './App.css';
import Experience from './Components/Experience';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Hobbies from './Components/Hobbies';
function App() {
  return (
    <div className="App">
       <Header />
      <Experience/>
       <Skills />
       <Hobbies />
    </div>
  );
}

export default App;
