import React from 'react'
import page3 from '../asset/page3.png'
import { Coffee, Heart, UsersRound } from 'lucide-react'

const Apropo = () => {

  const apropoCards = [
    {
      id: 1,
      icon: <Coffee size={30} strokeWidth={2} />,
      title: "Notre mission",
      description: "Offrir une expérience café unique et authentique.",
    },
    {
      id: 2,
      icon: <Heart size={30} strokeWidth={2} />,
      title: "Nos valeurs",
      description: "Qualité, partage, convivialité et respect de l'environnement.",
    },
    {
      id: 3,
      icon: <UsersRound size={30} strokeWidth={2} />,
      title: "Notre équipe",
      description: "Des passionnés du café et de la gastronomie, à votre service.",
    },
  ];

  return (
    <>
      <section id="apropos" className="py-12 md:py-16 mb-12 lg:mb-25 ">

        <div className="continair mx-auto px-5 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

            <div className="flex flex-col items-start">

              <p className="text-sm font-semibold  tracking-[2px] mb-2">
                À propos
              </p>

              <h1 className="font-text text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                Une passion
                <br />
                pour le café
              </h1>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-125 mb-8">
                Café Bloom est né d'une simple idée : créer un lieu
                où les gens peuvent se retrouver, partager et profiter
                d'un bon café dans une ambiance chaleureuse.
              </p>

              <div className="flex flex-col gap-5 w-full">

                {apropoCards.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-center gap-5"
                  >

                    <div className="
                      flex items-center justify-center
                      w-17.5 h-17.5
                      shrink-0
                      border-3 border-black
                      hover:bg-black hover:text-white 
                       duration-300

                        ">
                      {item.icon}
                    </div>

                    <div className="flex flex-col gap-1">

                      <h3 className="text-lg font-bold">
                        {item.title}
                      </h3>

                      <p className="text-gray-700 text-base leading-relaxed max-w-87.5">
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div className="flex justify-center lg:justify-end">

              <img
                src={page3}
                alt="Intérieur du Café Bloom"
                className="w-full max-w-162.5 h-auto object-contain"
              />

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Apropo
