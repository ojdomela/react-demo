import GlobalStyle from './styles';
import { Outlet } from 'react-router-dom'
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const modal = useSelector(state => state.display.modal);

  return (
    <>
      <GlobalStyle modal={modal}/>
      {modal && <Modal />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
