import { createHTMLElement, getTypeStyles } from "../functions/functions";
import { openModal } from "./modal";

const main = document.querySelector("main");

const getPokemon = async () => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    for (const pokemon of data.results) {
      const { data: pokemonData } = await axios.get(pokemon.url);
      const div = createHTMLElement("div", [
        "relative",
        "w-48",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "border-2",
        "border-solid",
        "rounded-lg",
        "gap-2",
        "py-2",
        "cursor-pointer",
        "shadow-2xl",
        `border-${getTypeStyles(pokemonData.types[0].type.name)}`,
        `shadow-${getTypeStyles(pokemonData.types[0].type.name)}`,
      ]);
      const name = createHTMLElement("h1", [
        "font-bold",
        "text-2xl",
        "text-center",
        "uppercase",
      ]);
      const number = createHTMLElement("h2", [
        "font-bold",
        "text-2xl",
        "text-center",
        "text-gray-600",
        "absolute",
        "top-4",
        "left-4",
      ]);
      number.textContent = `#${pokemonData.id}`;
      name.textContent = pokemonData.name;
      const img = createHTMLElement("img", [
        "w-full",
        "hover:scale-110",
        "transition-transform",
      ]);
      img.src = pokemonData.sprites.other.home.front_default;
      img.alt = pokemonData.name;

      div.append(number, img, name);
      main.append(div);
      img.addEventListener("click", () => {
        openModal(pokemonData);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

getPokemon();
