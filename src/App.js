import './App.css';
import Main from './components/Main';
import { ContactFormContextProvider } from './context/ContactFormContext';

function App() {

  return (
    <>
      <ContactFormContextProvider>
        <Main />
      </ContactFormContextProvider>
    </>
  );
}

export default App;
