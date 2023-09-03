const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const main = document.querySelector("main");

const getPokemon = async () => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
    );
    for (const pokemon of data.results) {
      const { data } = await axios.get(pokemon.url);
      const div = document.createElement("div");
      const name = document.createElement("h1");
      const img = document.createElement("img");
      const weigth = document.createElement("h2");
      const height = document.createElement("h2");
      main.append(div);
      div.append(img, name, weigth, height);
      div.classList.add(
        "w-48",
        "h-96",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "border-2",
        "border-solid",
        "rounded-lg",
        "gap-2",
        "py-2",
        "cursor-pointer"
      );
      name.textContent = data.name;
      name.classList.add("font-bold", "text-2xl", "text-center", "uppercase");
      img.src = data.sprites.other.home.front_default;
      img.classList.add("w-full", "hover:scale-110", "transition-transform");
      img.alt = data.name;
      weigth.textContent = `${data.weight} gr`;
      height.textContent = `${data.height} cm`;
      for (const type of data.types) {
        div.classList.add(
          "shadow-2xl",
          `${
            type.type.name === "grass"
              ? "border-green-500"
              : type.type.name === "fire"
              ? "border-orange-500"
              : type.type.name === "water"
              ? "border-blue-500"
              : type.type.name === "bug" || type.type.name === "poison"
              ? "border-purple-500"
              : type.type.name === "electric"
              ? "border-yellow-500"
              : type.type.name === "fairy"
              ? "border-pink-500"
              : type.type.name === "psychic"
              ? "border-indigo-500"
              : type.type.name === "dragon"
              ? "border-red-500"
              : "border-gray-500"
          }`,
          `${
            type.type.name === "grass"
              ? "shadow-green-500"
              : type.type.name === "fire"
              ? "shadow-orange-500"
              : type.type.name === "water"
              ? "shadow-blue-500"
              : type.type.name === "bug" || type.type.name === "poison"
              ? "shadow-purple-500"
              : type.type.name === "electric"
              ? "shadow-yellow-500"
              : type.type.name === "fairy"
              ? "shadow-pink-500"
              : type.type.name === "psychic"
              ? "shadow-indigo-500"
              : type.type.name === "dragon"
              ? "shadow-red-500"
              : "shadow-gray-500"
          }`
        );
        const h2 = document.createElement("h2");
        div.append(h2);
        h2.textContent = type.type.name;
        h2.classList.add(
          "w-20",
          "font-bold",
          "text-center",
          "uppercase",
          "text-white",
          "rounded-lg",
          `${
            type.type.name === "grass"
              ? "bg-green-500"
              : type.type.name === "fire"
              ? "bg-orange-500"
              : type.type.name === "water"
              ? "bg-blue-500"
              : type.type.name === "bug" || type.type.name === "poison"
              ? "bg-purple-500"
              : type.type.name === "electric"
              ? "bg-yellow-500"
              : type.type.name === "fairy"
              ? "bg-pink-500"
              : type.type.name === "psychic"
              ? "bg-indigo-500"
              : type.type.name === "dragon"
              ? "bg-red-500"
              : "bg-gray-500"
          }`
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};

getPokemon();
