import FaviconSetter from './controller/FaviconSetter'
import { LanProvider } from './model/LanCxtProvider'
import Aside from './view/Aside';
import Main from './view/Main'

function App() {
  FaviconSetter();

  return (
    <LanProvider>
      <Main />
      <Aside />
    </LanProvider>
  );
}

export default App;
