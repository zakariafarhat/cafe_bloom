import React from 'react'
import image1 from '../asset/page1.png'
import { Leaf, Croissant, MapPin } from "lucide-react";

const Accueil = () => {

 const features = [
    {
      id: 1,
      icon: <Leaf size={30} strokeWidth={1.5} />,
      title: "Café de qualité",
      description: "100% Arabica",
    },
    {
      id: 2,
      icon: <Croissant size={38} strokeWidth={1.5} />,
      title: "Pâtisseries",
      description: "faites maison",
    },
    {
      id: 3,
      icon: <MapPin size={38} strokeWidth={1.5} />,
      title: "Ambiance chaleureuse",
      description: "et conviviale",
    },
  ];



  return (
    <>
    <div className='continair flex flex-col lg:flex-row gap-8 lg:gap-0 lg:space-x-5 px-5 sm:px-10 lg:px-0 py-12 sm:py-16 md:py-10 '>
      {/*h1*/}  
      <div className='flex flex-col justify-center min-w-0 mb-10 lg:ml-10 2xl:ml-15 gap-2 mt-3 w-full lg:w-1/2 2xl:w-255 '>
     <p className='font-semibold text-xs 2xl:ml-3 '>CAFÉ & PÂTISSERIE ARTISANALE</p>
     <h1 className='font-bold text-4xl sm:text-5xl mb-8 2xl:mx-10 2xl:ml-3 font-text' >Un bon café
       pour de  belles 
       histoires</h1>
       <p className='2xl:ml-2.5 text-gray-900 '>Chez Café Bloom, nous vous offrons bien plus qu'un café.
        C'est un espace chaleureux où chaque tasse raconteune histoire.
       </p>
        <div  className='flex flex-wrap gap-5 mt-5'>
        <button className='primary-btn border-2 bg-black text-white hover:shadow-gray-800 '>decouvrire le menu {"-->"}</button>
        <button className='primary-btn border-2'>reserver une table</button>  
        </div>
        {/*icon*/}
           <div className="w-full mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 flex-wrap items-center gap-x-8 gap-y-6">

        {features.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 min-w-0 2xl:shrink-0"
          >
            <div className="shrink-0">
              {item.icon}
            </div>

            <div className="text-sm leading-5 2xl:whitespace-nowrap">
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
      </div>
       {/*img*/}  
        <div className='w-full lg:w-1/2 2xl:w-auto px-4 sm:px-10 lg:px-8 2xl:px-25 2xl:ml-30 py-3'>
            <img src={image1} alt="" className="w-full max-w-125 2xl:w-auto 2xl:max-w-full mx-auto" />
        </div>
         
        


    </div>
    </>
  )
}

export default Accueil
