import React, { useState } from "react";
import page2 from "../asset/page2.png";
import Espresso from '../asset/menu/Espresso.png'
import Americano from '../asset/menu/americano.png'
import Cappuccino from '../asset/menu/capucino.png'
import Latte_Macchiato from '../asset/menu/Latte Macchiato.png'
import Café_glacé from '../asset/menu/Café glacé.png'
import Matcha_Latte from '../asset/menu/matcha.png'
import Chocolat_chaud from '../asset/menu/Chocolat-chaud.png'
import Thé_marocain from '../asset/menu/Thé.png'

// Import images dyal products


const Menu = () => {
  const [active, setActive] = useState("Tous");

  const categories = [
    "Tous",
    "Cafés",
    "Thés",
    "Boissons fraîches",
    "Pâtisseries",
  ];

  const products = [
    {
      id: 1,
      name: "Espresso",
      description: "Café intense et aromatique",
      price: 18,
      image: Espresso,
      category: "Cafés",
    },
    {
      id: 2,
      name: "Americano",
      description: "Doux et équilibré",
      price: 20,
      image: Americano,
      category: "Cafés",
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Équilibré et crémeux",
      price: 22,
      image: Cappuccino,
      category: "Cafés",
    },
    {
      id: 4,
      name: "Latte Macchiato",
      description: "Onctueux et délicat",
      price: 24,
      image: Latte_Macchiato,
      category: "Cafés",
    },
    {
      id: 5,
      name: "Café glacé",
      description: "Fraîcheur et énergie",
      price: 22,
      image: Café_glacé,
      category: "Boissons fraîches",
    },
    {
      id: 6,
      name: "Matcha Latte",
      description: "Thé vert et douceur",
      price: 26,
      image: Matcha_Latte,
      category: "Thés",
    },
    {
      id: 7,
      name: "Chocolat chaud",
      description: "Riche et gourmand",
      price: 24,
      image: Chocolat_chaud,
      category: "Cafés",
    },
    {
      id: 8,
      name: "Thé marocain",
      description: "Tradition et authenticité",
      price: 16,
      image: Thé_marocain,
      category: "Thés",
    },
  ];

  const filteredProducts =
    active === "Tous"? products : products.filter((item) => item.category === active);

  return (
    
      <div className="container md:py-13 px-5 md:px-10 2xl:px-25">

      
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-8">

          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-semibold  tracking-[3px]">
              notre menu 
            </p>

            <h1 className="font-text text-4xl md:text-5xl lg:text-6xl font-bold  font-text ">
              Des saveurs pour
              <br />
              tous les goûts
            </h1>

            <p className="text-gray-700 text-base leading-relaxed max-w-125  mt-1">
              Découvrez notre sélection de cafés, thés,
              boissons fraîches et pâtisseries artisanales,
              préparées avec passion.
            </p>

          </div>

          <div className="flex justify-center min-w-0 2xl:ml-85">

            <img
              src={page2}
              alt=""
              className="w-full 2xl:w-auto max-w-87.5 h-auto "
            />

          </div>

        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-10">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`
                cursor-pointer
                border-2 border-black
                px-4 sm:px-6 py-3
                text-sm font-semibold
                transition-all duration-300
                ${
                  active === category
                    ? "bg-black text-white shadow-[5px_5px_0px_#000]"
                    : "bg-white text-black shadow-[5px_5px_0px_#000] hover:bg-black hover:text-white"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 ">

          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col
                bg-white
                border-2 border-black
                shadow-[6px_6px_0px_#000]
                ml-2
                p-1
                transition-transform duration-300
                hover:-translate-y-1
              "
            >

              <div className="flex justify-center items-center h-37.5 mb-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full max-w-full object-contain"
                />

              </div>

              <h3 className="text-lg font-bold mb-1">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600 mb-5">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto">

                <span className="font-bold text-base">
                  {item.price} DH
                </span>

                <button
                  type="button"
                  aria-label={`Ajouter ${item.name} au panier`}
                  className="
                    w-9 h-9
                    flex items-center justify-center
                    border-2 border-black
                    shadow-[3px_3px_0px_#000]
                    text-xl font-bold
                    cursor-pointer
                    hover:bg-black hover:text-white
                    transition-colors duration-300
                  "
                >
                  +
                </button>

              </div>

            </div>
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 py-10">
            Aucun produit disponible dans cette catégorie.
          </p>
        )}

      </div>

  );
};

export default Menu;
