import React from 'react'
import logo from '../asset/logo.png'

const Navbar = () => {

const liste =[
    {
        id:1,
        nom:"accueil",
        link:"#accueil"
    },
    {
        id:2,
        nom:"menu",
        link:"#menu"
    },{
        id:3,
        nom:"a propos",
        link:"#apropo"
    },{
        id:4,
        nom:"reservation",
        link:"#reservation"
    },{
        id:5,
        nom:"contact",
        link:"#contact"
    },
]


  return (
   <>
   <div className='continair flex flex-col lg:flex-row justify-between items-center sticky top-0 left-0 w-full z-50 bg-white shadow-md '>
     <div className='w-28 sm:w-32 lg:w-40 shrink-0 ' >
        <img src={logo} alt=""/>
     </div>
     <div className='flex flex-wrap lg:flex-nowrap justify-center items-center w-full lg:w-auto px-4 lg:px-0 pb-3 lg:pb-0 lg:mr-13 gap-x-4 gap-y-2 sm:gap-x-6 lg:gap-8 text-xs sm:text-sm lg:text-base font-semibold '>
        {liste.map((e)=>{
            return(
            <div key={e.id}>
                <a href={e.link} className='relative group inline-block'>{e.nom}
                          <span className="absolute -bottom-1 left-0 w-0   h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            )
        })}
   <button>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" href='#' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
   </svg>
   </button>
   <button>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
   </svg>
   </button>
     <button className='primary-btn border-2 border-black'>se connecter</button>

     </div>

      
   </div>
   </>
  )
}

export default Navbar
