import React, { useState } from "react";
import phrase4 from "../asset/page4.png";

const Reservation = () => {
  const [today] = useState(() => new Date().toLocaleDateString("en-CA"));
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    date: "",
    personnes: "2",
    heure: "14:00",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Réservation demandée !
Nom : ${form.nom}
Téléphone : ${form.telephone}
Date : ${form.date}
Personnes : ${form.personnes}
Heure : ${form.heure}`
    );
  };

  return (
    
      <div className="container  w-full  px-5 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SECTION */}
          <div className="flex flex-col min-w-0">

            <p className="text-2sm font-semibold  tracking-[3px] mb-1">
              reservation
            </p>

            <h1 className="font-text text-4xl md:text-5xl font-bold leading-tight mb-4">
              Réservez votre table
            </h1>

            <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-125">
              Profitez d'un moment de détente dans notre café.
              Réservez votre table en quelques clics.
            </p>

            {/* FORMULAIRE */}
            <form
              onSubmit={handleSubmit}
              className="border-2 border-black bg-white p-5 md:p-6 shadow-[8px_8px_0px_#000]"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

                {/* NOM */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">
                    Nom complet *
                  </label>

                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full border border-gray-400 px-3 py-3 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* TELEPHONE */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">
                    Téléphone *
                  </label>

                  <input
                    type="tel"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    required
                    className="w-full border border-gray-400 px-3 py-3 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* DATE */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">
                    Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    required
                    className="w-full border border-gray-400 px-3 py-3 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* PERSONNES */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">
                    Nombre de personnes *
                  </label>

                  <select
                    name="personnes"
                    value={form.personnes}
                    onChange={handleChange}
                    className="w-full border border-gray-400 px-3 py-3 text-sm outline-none focus:border-black bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "personne" : "personnes"}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* HEURE */}
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-sm font-semibold">
                  Heure *
                </label>

                <select
                  name="heure"
                  value={form.heure}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-3 py-3 text-sm outline-none focus:border-black bg-white"
                >
                  {[
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00",
                    "19:00",
                    "20:00",
                    "21:00",
                  ].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 font-semibold cursor-pointer border-2 border-black shadow-[5px_5px_0px_#555] hover:bg-white hover:text-black transition-all duration-300"
              >
                Réserver ma table →
              </button>

            </form>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col min-w-0 items-center justify-start lg:pt-4">

            <img
              src={phrase4}
              alt="Café Bloom - Réservation"
              className="w-full max-w-125 2xl:ml-32 min-[112.5rem]:ml-80 h-auto object-contain"
            />

            <p className="font-text italic text-xl 2xl:ml-40 md:text-2xl text-center leading-relaxed mt-6 max-w-237.5">
              "Un lieu où le temps ralentit
              <br />
              et où les bonnes choses
              <br />
              se partagent."
            </p>

            <div className="w-36 h-0.5 bg-black mt-4 2xl:ml-30"></div>

          </div>

        </div>

      </div>
  );
};

export default Reservation;
