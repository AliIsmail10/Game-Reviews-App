class Details {
  constructor(ui) {
    this.apiKey = "a806eb39famsh237d4703e93318ap12e04ajsnf4d8344c89d5";
    this.apiHost = "free-to-play-games-database.p.rapidapi.com";
    this.mainPage = document.getElementById("mainPage");
    this.details = document.getElementById("details");
    this.ui = ui;
  }

  async showDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.apiHost,
      },
    };
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      this.ui.detailsGameData(result);
      this.details.classList.remove("d-none");
      this.mainPage.classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  }

  getDetailsById() {
    this.cards = document.querySelectorAll(".card");
    this.cards.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const getId = element.getAttribute("data-id");
        this.showDetails(getId);
        console.log("ID: ", getId);
      });
    });
  }

  closeDetails() {
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this.ui.details.classList.add("d-none");
      this.ui.mainPage.classList.remove("d-none");
    });
  }
}

export default Details;
