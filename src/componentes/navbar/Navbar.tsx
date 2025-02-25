import { useState, useEffect } from 'react';
import psi from '../../assets/cerebro1.png';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.marginTop = '110px'; 
    } else {
      document.body.style.marginTop = '0';
    }

    return () => {
      document.body.style.marginTop = '0';
    };
  }, [isOpen]);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 100; 
      window.scrollTo({
        top: offset,
        behavior: 'smooth', 
      });
    }
  
    setIsOpen(false);
  }
  return (
    <nav className="grid grid-flow-col justify-between px-4 bg-inherit border-gray-200 text-black fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="py-2 flex justify-start font hover:scale-105 transition-transform duration-400 font-nome11">
        <img src={psi} className="h-10 text-transparent" /> 
        <p className="block text-xl items-start px-2 mt-2">Alan Ribeiro | Psicólogo</p>
      </div>

      <div className={`text-black py-2.5 md:flex md:items-center bg-transparent justify-items-center  md:justify-evenly w-[10vh] md:w-[90vh] font-nome11 transition-transform duration-400  ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className='py-1 md:py-0'>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="font-nome1 text-black hover:text-cor3 hover:font-bold font-semibold text-lg">
            Home
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')} className="font-nome1 text-black hover:text-cor3 hover:font-bold font-semibold text-lg">
            Sobre
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#psicanalise" onClick={(e) => handleLinkClick(e, 'psicanalise')} className="font-nome1 text-black hover:text-cor3 hover:font-bold font-semibold text-lg">
            Psicanálise
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#depoimentos" onClick={(e) => handleLinkClick(e, 'depoimentos')} className="font-nome1 text-black hover:text-cor3 hover:font-bold font-semibold text-lg">
            Depoimentos
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#contato" onClick={(e) => handleLinkClick(e, 'contato')} className="font-nome1 text-black hover:text-cor3 hover:font-bold font-semibold text-lg">
            Contato
          </a>
        </div>
      </div>

      <div className="md:hidden flex justify-center items-start pt-1.5 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? 'X' : '☰'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
