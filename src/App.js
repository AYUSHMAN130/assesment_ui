import logo from './logo.svg';
import './App.css';
import CodeEditor from './components/Editor/CodeEditor'; 
import Home from './components/Home/home';
function App() {
  return (
    <div className="App">
      <Home />
      <CodeEditor />
      
    </div>
  );
}

export default App;