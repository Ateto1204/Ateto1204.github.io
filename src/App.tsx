import FaviconSetter from './controller/FaviconSetter'
import { LanProvider } from './model/LanCxtProvider'
import Aside from './view/Aside';
import Main from './view/Main'

function App() {
  console.log("我最喜歡軟體工程了！");
  console.log("我最喜歡馬尚彬老師了！");
  FaviconSetter();

  return (
    <LanProvider>
      <Main />
      <Aside />
    </LanProvider>
  );
}

export default App;
