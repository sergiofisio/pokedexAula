export const createHTMLElement = (tag, classes = []) => {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  return element;
};

export const getTypeStyles = (type) => {
  switch (type) {
    case "grass":
      return "green-500";
    case "fire":
      return "orange-500";
    case "water":
      return "blue-500";
    case "bug":
    case "poison":
      return "purple-500";
    case "electric":
      return "yellow-500";
    case "fairy":
      return "pink-500";
    case "psychic":
      return "indigo-500";
    case "dragon":
      return "red-500";
    default:
      return "gray-500";
  }
};
