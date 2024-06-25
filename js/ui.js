// ui.js
import Details from "./details.js";

class Ui {
  constructor() {
    this.gameCard = document.querySelector("#gameCard");
    this.mainPage = document.getElementById("mainPage");
    this.details = document.getElementById("details");
  }

  displayData(games) {
    let box = "";
    games.forEach((game) => {
      box += `
        <div class="col-lg-3 col-md-4">
          <div class="item">
            <div class="card" data-id="${game.id}">
              <img
                src="${game.thumbnail}"
                class="card-img-top w-100"
                alt="${game.short_description}"
              />
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">${game.title}</h5>
                  <a href="#" class="btn btn-primary">free</a>
                </div>
                <p class="card-text text-center mt-3">
                  ${game.short_description.split(" ").slice(0, 10).join(" ")}
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <a href="#" class="btn ">${game.genre}</a>
                <a href="#" class="btn ">${game.platform}</a>
              </div>
            </div>
          </div>
        </div>`;
    });
    this.gameCard.innerHTML = box;

    const detailsGame = new Details(this);
    detailsGame.getDetailsById();
  }

  detailsGameData(details) {
    this.showDettailsData = document.querySelector("#showDettailsData");

    let box2 = ` <div class="col-md-4 ">
             <i class="fas fa-xmark position-absolute top-0 end-0 mt-5 pe-md-0 pe-5" id="closeBtn"></i>
              <h2 class="pt-5 ">Details Game</h2>
              <img class="w-100 pt-5" src="${details.thumbnail}" alt="">
            </div>
            <div class="col-md-8 pt-5">
              <p class="pt-5 mt-1 fs-2">Title: 
              <span class=fs-6>${details.title}</span></p> 

              <p class=" mt-2 fs-6">Category:
              <span class="bg-info p-2 rounded-4 text-black">${details.genre}</span></p> 

              <p class=" mt-5 fs-6">Platform:
              <span class="bg-info p-2 rounded-4 text-black">${details.platform}</span></p>  

              <p class=" mt-5 fs-6">Status:
              <span class="bg-info p-2 rounded-4 text-black">${details.status}</span></p>

              <div class="mt-5">
              ${details.description}
              </div>

              <a type="button" href="${details.game_url}" target="_blank" class="btn btn-outline-warning my-5">Show Game</a>
            </div>`;

    this.showDettailsData.innerHTML = box2;

    const detailsGame = new Details(this);
    detailsGame.closeDetails();
  }
}

export default Ui;
