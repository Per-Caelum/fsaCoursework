const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

class Roster {
  constructor() {
    this.pullFromFreelancerRoster = freelancers;
    this.pushToFreelancerRoster = [];

    //Display declarations
    this.body = document.querySelector("body");

    this.heading = document.createElement("div");

    this.title = document.createElement("h1");
    this.title.innerHTML = "Freelancer Forum";

    this.averageStartingPrice = document.createElement("h2");

    this.chartTitle = document.createElement("h1");
    this.chartTitle.innerText = "Available Freelancers";

    //Chart Display declarations
    this.article = document.createElement("article");
    this.article.style.display = "flex";
    this.article.style.flexWrap = "wrap";

    this.nameSection = document.createElement("section");
    this.nameSection.append(document.createElement("h3"));
    this.nameSection.innerText = "Name";
    this.nameSection.style.paddingRight = "15px";
    this.priceSection = document.createElement("section");
    this.priceSection.append(document.createElement("h3"));
    this.priceSection.innerText = "Starting Price";
    this.priceSection.style.paddingRight = "15px";
    this.occupationSection = document.createElement("section");
    this.occupationSection.append(document.createElement("h3"));
    this.occupationSection.innerText = "Occupation";
  }

  initialAppend = () => {
    //Make Appends Section
    this.update();
    this.update();
    this.article.append(this.nameSection);
    this.article.append(this.priceSection);
    this.article.append(this.occupationSection);
    this.body.append(this.averageStartingPrice);
    this.heading.append(this.title);
    this.heading.append(this.averageStartingPrice);
    this.heading.append(this.chartTitle);
    this.body.append(this.heading);
    this.body.append(this.article);
  };

  chartAppend = () => {
    const element = this.pushToFreelancerRoster.at(
      this.pushToFreelancerRoster.length - 1
    );
    this.nameDiv = document.createElement("div");
    this.occupationDiv = document.createElement("div");
    this.priceDiv = document.createElement("div");
    this.nameDiv.innerText = element.name;
    this.occupationDiv.innerText = element.occupation;
    this.priceDiv.innerText = element.price;
    this.nameSection.append(this.nameDiv);
    this.occupationSection.append(this.occupationDiv);
    this.priceSection.append(this.priceDiv);

    this.averageStartingPrice.innerText = `The average starting price is  ${this.averagePrices()} `;
  };

  addToRoster = () => {
    let index = Math.floor(
      Math.random() * (this.pullFromFreelancerRoster.length - 1)
    );
    const [freelancer] = this.pullFromFreelancerRoster.splice(index, 1);
    this.pushToFreelancerRoster.push(freelancer);
  };

  averagePrices = () => {
    return Math.round(
      this.pushToFreelancerRoster
        .map((element) => element.price)
        .reduce((acc, price) => acc + price, 0) /
        this.pushToFreelancerRoster.length
    );
  };

  update = () => {
    if (this.pullFromFreelancerRoster.length > 1) {
      this.addToRoster();
      this.chartAppend();
    }
  };
}

const init = () => {
  const roster = new Roster();
  roster.initialAppend();
  setInterval(roster.update, 3000);
};

init();
