
import React from "react";
import vignette from "../asset/Vignette.png";

const Contact = () => {
  return (
    
      <div className="  px-15 py-1 mt-30 ">

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">

          <div className="relative z-20 lg:col-span-4 xl:col-span-4">

            <div className="mb-2 flex items-center gap-2">
              <span className="text-1xl font-semibold  tracking-[1px]">
                nous contacter
              </span>

              <div className="h-px w-14 bg-black"></div>
            </div>

            <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.1] md:text-6xl xl:text-[70px]">
              Restons
              <br />
              en contact
            </h1>

            <p className="mb-10 max-w-97.5 text-base leading-relaxed text-gray-700 md:text-lg">
              Une question, une suggestion ou simplement
              envie de nous dire bonjour ?
              Notre équipe est à votre écoute avec plaisir.
            </p>

            <div className="mb-7 flex items-center gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f1e6da]">
                <span className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                     </svg>

                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Téléphone
                </h3>

                <p className="text-gray-700">
                  07 75 77 06 60
                </p>
              </div>

            </div>

            <div className="mb-7 flex items-center gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f1e6da]">
                <span className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg> 
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  E-mail
                </h3>

                <p className="wrap-break-word text-gray-700">
                  farhatzakaria26@gmail.com
                </p>
              </div>

            </div>

            <div className="mb-10 flex items-center gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f1e6da]">
                <span className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                     </svg>
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Adresse
                </h3>

                <p className="text-gray-700">
                  maarif,
                  <br />
                  Casablanca, Maroc
                </p>
              </div>

            </div>

           
          </div>

          <div className="relative z-20 min-w-0 lg:col-span-5 xl:col-span-5">

            <div className="w-full border-2 border-black  p-5 shadow-[6px_6px_0px_#000] sm:p-7 xl:p-9">

              <h2 className="mb-8 font-serif text-2xl font-bold leading-tight md:text-3xl xl:text-[34px]">
                Envoyez-nous un message
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="h-14 min-w-0 w-full border-2 border-black bg-transparent px-4 outline-none transition focus:border-black"
                  />

                  <input
                    type="email"
                    placeholder="Votre e-mail"
                    required
                    className="h-14 min-w-0 w-full border-2 border-black bg-transparent px-4 outline-none transition focus:border-black"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Sujet"
                  required
                  className="h-14 w-full border-2 border-black bg-transparent px-4 outline-none transition focus:border-black"
                />

                <textarea
                  placeholder="Votre message..."
                  rows={6}
                  required
                  className="w-full resize-none border-2 border-black  bg-transparent p-4 outline-none transition focus:border-black"
                />

                <button
                  type="submit"
                  className="flex h-14 w-full cursor-pointer border-2 items-center justify-center gap-3 hover:bg-black font-medium hover:text-white transition-all duration-300 bg-white text-black"
                >
                  Envoyer le message
                  <span className="text-2xl">→</span>
                </button>

              </form>

            </div>

          </div>

          <div className="relative hidden h-162.5 min-w-0 lg:col-span-3 lg:block xl:h-187.5">

            <p className="absolute left-0 top-12 z-10 rotate-[-8deg] font-serif text-xl italic leading-tight xl:text-2xl">
              Good
              <br />
              Coffee
              <br />
              Good People.
            </p>

            <img
              src={vignette}
              alt="Café Bloom décoration"
              className="absolute bottom-0 -right-11.25 h-[120%] w-[260%] max-w-none object-contain object-bottom-right xl:-right-15 xl:h-[95%]"
            />

          </div>

        </div>

      </div>
  );
};

export default Contact;
