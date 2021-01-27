export const ColorFunctions = (value, cb) => {
  switch (value) {
    case "red":
      cb("red");
      break;
    case "blue":
      cb("blue");
      break;
    case "green":
      cb("green");
      break;
    case "yellow":
      cb("yellow");
      break;
    case "light":
      cb("dark");
      break;
    case "dark":
      cb("light");
      break;
    default:
      break;
  }
};

