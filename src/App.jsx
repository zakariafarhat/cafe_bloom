import Navbar from '../src/components/navbar'
import Accueil from '../src/components/accueil'
import Menu from '../src/components/menu'
import Apropo from '../src/components/apropo'
import Reservation from '../src/components/reservation'
import Contact from '../src/components/contact'

export default function App() {

  return (
    <>
  
      <Navbar />  
      <section id='accueil' className="scroll-mt-40 lg:scroll-mt-24">
            <Accueil/>
        </section>  
    <section id='menu' className="scroll-mt-40 lg:scroll-mt-24">
          <Menu />
        </section> 

    <section id='apropo' className="scroll-mt-40 lg:scroll-mt-24">
         <Apropo />       
       </section> 

        <section id='reservation' className="scroll-mt-40 lg:scroll-mt-24">
          <Reservation />
        </section> 

        <section id='contact' className="scroll-mt-24">
         <Contact />
        </section> 
    
    
      
  </>
  )}
