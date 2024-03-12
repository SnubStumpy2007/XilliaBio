// first, try with an if/else statement block

// const submit = () => {
//   const ans = document.getElementById("answer").value;

//   if (ans === "Jude Mathis") {
//     const intro = document.getElementById("bio");
//     intro.textContent += "Jude Mathis is a Med Student";
//     const image = document.getElementById("character-image");
//     image.src = "jude.jpg";
//   } else if (ans === "Milla Maxwell") {
//     const intro = document.getElementById("bio");
//     intro.textContent += "Milla Maxwell is a god";
//     const image = document.getElementById("character-image");
//     image.src = "milla.jpg";
//   } else if (ans === "Leia Rolando") {
//     const intro = document.getElementById("bio");
//     intro.textContent += "Also a Med Student";
//     const image = document.getElementById("character-image");
//     image.src = "leia.jpg";
//   } else if (ans === "Elize Lutus") {
//     const intro = document.getElementById("bio");
//     intro.textContent += "Healer with Teepo";
//     const image = document.getElementById("character-image");
//     image.src = "elize.jpg";
//   } else if (ans === "Rowen J. Ilbert") {
//     const intro = document.getElementById("bio");
//     intro.textContent += "Old man";
//     const image = document.getElementById("character-image");
//     image.src = "rowen.jpg";
//   } else if (ans === "Alvin") {
//     const intro = document.getElementById("bio");
//     intro.textContent += "Traitor";
//     const image = document.getElementById("character-image");
//     image.src = "alvin.jpg";
//   } else {
//     const intro = document.getElementById("bio");
//     intro.textContent =
//       "Pick a valid character.  All selections are text sensitive";
//   }
// };

// switch statement
const submit = () => {
  const ans = document.getElementById("answer").value;
  switch (ans) {
    case "Jude Mathis":
      const introJude = document.getElementById("bio");
      introJude.textContent += "Jude Mathis is a Med Student";
      const imageJude = document.getElementById("character-image");
      imageJude.src = "jude.jpg";
      break;
    case "Milla Maxwell":
      const introMilla = document.getElementById("bio");
      introMilla.textContent += "Milla Maxwell is a god";
      const imageMilla = document.getElementById("character-image");
      imageMilla.src = "milla.jpg";
      break;
    case "Leia Rolando":
      const introLeia = document.getElementById("bio");
      introLeia.textContent += "Also a nursing student";
      const imageLeia = document.getElementById("character-image");
      imageLeia.src = "leia.jpg";
      break;
    case "Elize Lutus":
      const introElize = document.getElementById("bio");
      introElize.textContent += "Healer.  Her best friend is Teepo";
      const imageElize = document.getElementById("character-image");
      imageElize.src = "elize.jpg";
      break;
    case "Rowen J. Ilbert":
      const introRowen = document.getElementById("bio");
      introRowen.textContent += "Old man Tactician";
      const imageRowen = document.getElementById("character-image");
      imageRowen.src = "rowen.jpg";
      break;
    case "Alvin":
      const introAlvin = document.getElementById("bio");
      introAlvin.textContent += "Milla Maxwell is a god";
      const imageAlvin = document.getElementById("character-image");
      imageAlvin.src = "alvin.jpg";
      break;
  }
};

const reset = () => {
  location.reload();
};
