import forza from "./assets/forza.jpg";
import superMario from "./assets/superMario.jpg";


export const games = [
    {
      id:1,
      title: "Super Mario",
      releaseDate: "2023-01-01",
      imageUrl: superMario,
      features: [
        "Immersive Storyline",
        "Multiplayer Mode",
        "High-Quality Graphics"
      ],
      price: 49.99,
      consoleVersions: ["PS5", "Xbox Series X", "PC"]
    },
    {
      id:2,
      title: "Forza Horizon",
      releaseDate: "2023-02-15",
      imageUrl: forza,
      features: [
        "Open World Exploration",
        "Co-op Gameplay",
        "Dynamic Environments"
      ],
      price: 59.99,
      consoleVersions: ["PS4", "Xbox One", "PC"]
    }
    // Add more game data as needed
  ];