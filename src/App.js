import './App.css';
import Header from '../src/components/Header'
import Project from '../src/components/Project'
import ContactForm from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'

function App() {
  return (
    <div>
      <Header />
      <Portfolio />
      <Project />
      <ContactForm />
      <Resume />
    </div>
    
  );
}

export default App;
