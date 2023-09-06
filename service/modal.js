import { createHTMLElement, getTypeStyles } from "../functions/functions";

export const openModal = (pokemon) => {
  const main = document.querySelector("main");
  const div = createHTMLElement("div", [
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "w-full",
    "h-full",
    "bg-gray-200",
    "bg-opacity-80",
    "fixed",
    "top-0",
    "right-0",
  ]);
  const divModal = createHTMLElement("div", [
    "w-3/5",
    "h-4/5",
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "border-2",
    "border-solid",
    "rounded-lg",
    `border-${getTypeStyles(pokemon.types[0].type.name)}`,
    `shadow-${getTypeStyles(pokemon.types[0].type.name)}`,
    "shadow-xl",
    "gap-2",
    "py-2",
    "shadow-2xl",
    `bg-${getTypeStyles(pokemon.types[0].type.name)}`,
    "relative",
    "bg-opacity-70",
  ]);
  const closeButton = createHTMLElement("h2", [
    "absolute",
    "top-2",
    "right-4",
    "text-red-600",
    "text-2xl",
    "cursor-pointer",
  ]);

  closeButton.textContent = "X";

  closeButton.addEventListener("click", () => {
    div.remove();
  });

  const name = createHTMLElement("h1", [
    "font-bold",
    "text-2xl",
    "text-center",
    "uppercase",
    "text-white",
    "z-10",
    "text-center",
  ]);

  name.textContent = pokemon.name;

  const img = createHTMLElement("img", [
    "drop-shadow-md",
    "h-1/3",
    "absolute",
    "-top-2",
  ]);
  img.src = pokemon.sprites.other.home.front_default;
  img.alt = pokemon.name;

  const divAtributes = createHTMLElement("div", [
    "flex",
    "justify-around",
    "items-center",
    "gap-2",
    "w-1/2",
  ]);

  const divHeight = createHTMLElement("div", [
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-2",
    "border-x-2",
    "border-solid",
    "border-gray-400",
    "w-full",
  ]);
  const divInfoHeight = createHTMLElement("div", [
    "flex",
    "justify-center",
    "w-full",
  ]);
  const imgHeight = createHTMLElement("img", []);
  const height = createHTMLElement("h2");
  height.textContent = `${pokemon.height} cm`;
  const h2Height = createHTMLElement("h2", [
    "font-bold",
    "text-[0.5rem]",
    "text-center",
  ]);
  h2Height.textContent = "Height";

  const divWeight = createHTMLElement("div", [
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-2",
    "w-full",
  ]);
  const divInfoWeight = createHTMLElement("div", [
    "flex",
    "justify-center",
    "w-full",
  ]);
  const imgWeight = createHTMLElement("img", []);
  const weigth = createHTMLElement("h2", []);
  weigth.textContent = `${pokemon.weight} gr`;
  const h2Weight = createHTMLElement("h2", [
    "font-bold",
    "text-[0.5rem]",
    "text-center",
  ]);
  h2Weight.textContent = "Weight";

  const divTypes = createHTMLElement("div", [
    "flex",
    "justify-center",
    "items-center",
    "gap-2",
  ]);

  const types = pokemon.types.map((type) => type.type.name);
  const type = types.map((type) => {
    const divType = createHTMLElement("div", [
      "shadow-2xl",
      `border-${getTypeStyles(type)}`,
      `shadow-${getTypeStyles(type)}`,
    ]);
    const h2 = createHTMLElement("h2", [
      "w-20",
      "font-bold",
      "text-center",
      "uppercase",
      "text-white",
      "rounded-lg",
      `bg-${getTypeStyles(type)}`,
    ]);
    div.classList.add(
      `border-${getTypeStyles(type)}`,
      `shadow-${getTypeStyles(type)}`
    );

    h2.textContent = type;
    divType.append(h2);
    return divType;
  });

  divTypes.append(...type);

  main.append(div);
  div.append(divModal);
  divModal.append(closeButton, name, img);

  const divInfo = createHTMLElement("div", [
    "flex",
    "flex-col",
    "gap-2",
    "items-center",
    "justify-center",
    "w-4/5",
    "bg-white",
    "h-3/4",
    "border-2",
    "border-solid",
    "shadow-2xl",
    "shadow-white",
    "rounded-lg",
  ]);

  const abilities = createHTMLElement("div", ["w-full"]);

  const allAbilities = pokemon.abilities.map((ability) => {
    const divAbility = createHTMLElement("div", ["gap-2", "py-2"]);
    const h2 = createHTMLElement("h2", [
      "w-20",
      "font-bold",
      "text-[0.625rem]",
      "text-center",
      "uppercase",
      "text-black",
      "rounded-lg",
    ]);
    console.log(ability.ability.name);
    h2.textContent = ability.ability.name;
    divAbility.append(h2);
    return divAbility;
  });

  const titleStats = createHTMLElement("h2", [
    "font-bold",
    "text-2xl",
    "text-center",
    "text-[#B8B8B8]",
  ]);

  titleStats.textContent = "Base Stats";

  const divStats = createHTMLElement("div", ["flex", "flex-col", "gap-2"]);
  const stats = pokemon.stats.map((stat) => {
    const divStat = createHTMLElement("div", [
      "flex",
      "justify-center",
      "items-center",
      "gap-2",
    ]);
    const h2 = createHTMLElement("h2", [
      "w-20",
      "font-bold",
      "text-[0.625rem]",
      "text-center",
      "uppercase",
      "text-black",
      "rounded-lg",
    ]);
    const statValue = createHTMLElement("h2", [
      "w-20",
      "font-bold",
      "text-[0.625rem]",
      "text-center",
      "uppercase",
      "text-black",
      "rounded-lg",
    ]);
    statValue.textContent = stat.base_stat;
    h2.textContent = stat.stat.name;
    divStat.append(h2, statValue);
    return divStat;
  });

  divModal.append(divInfo);
  divInfo.append(divTypes, divAtributes, titleStats, divStats);
  divAtributes.append(divWeight, divHeight, abilities);
  divWeight.append(divInfoWeight, h2Weight);
  divInfoWeight.append(weigth);
  divHeight.append(divInfoHeight, h2Height);
  divInfoHeight.append(height);
  abilities.append(...allAbilities);
  divStats.append(...stats);
};
