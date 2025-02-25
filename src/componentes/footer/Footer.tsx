import psi from '../../assets/psi.png'

function Footer() {
  return (
    <div className=" bg-cor3 flex flex-row justify-center p-2">
      <img src={psi} alt="" className=' h-10 md:h-12 mx-2 mt-2 md:mt-1'/>
     <div className="text-white font-corpo2 text-center text-lg">
      <p>© 2025 Alan Ribeiro</p>
      <p>Psicólogo CRP 05/60417. </p>
      </div>
    </div>
  );
}

export default Footer