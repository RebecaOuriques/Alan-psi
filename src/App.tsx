import Footer from './componentes/footer/Footer';
import Navbar from './componentes/navbar/Navbar';
import './index.css';
import Home from './paginas/home/Home';

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[80vh] '>
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
