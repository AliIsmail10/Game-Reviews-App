

// games.js
class GameFetcher {
  constructor(ui) {
    this.categoryElements = document.querySelectorAll(".category");
    this.apiKey = "a806eb39famsh237d4703e93318ap12e04ajsnf4d8344c89d5";
    this.apiHost = "free-to-play-games-database.p.rapidapi.com";
    this.defaultCategory = "mmorpg";
    this.ui = ui;
    this.spinner = document.getElementById("spinner"); // Reference the spinner element
  }

  async fetchGames(category = "mmorpg") {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.apiHost,
      },
    };

    this.spinner.classList.remove("d-none"); // Show spinner

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);

      this.ui.displayData(result);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      this.spinner.classList.add("d-none"); // Hide spinner
    }
  }

  attachEventListeners() {
    this.categoryElements.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const category = e.target.innerText;
        this.fetchGames(category);
        this.categoryElements.forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
      });
    });
  }

  setDefaultCategory() {
    this.fetchGames(this.defaultCategory);

    this.categoryElements.forEach((el) => {
      if (el.innerText.toLowerCase() === this.defaultCategory) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }
}

export default GameFetcher;


