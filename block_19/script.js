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

const display = (arr) => {
  const body = document.querySelector("body");

  const heading = document.createElement("div");

  const title = document.createElement("h1");
  title.innerHTML = "Freelancer Forum";

  const averageStartingPrice = document.createElement("h2");

  const chartTitle = document.createElement("h1");
  chartTitle.innerText = "Available Freelancers";

  /*Break for my own eyes categorizing */
  const article = document.createElement("article");
  article.style.display = "flex";
  article.style.flexWrap = "wrap";

  const nameSection = document.createElement("section");
  nameSection.append(document.createElement("h3"));
  nameSection.innerText = "Name";
  nameSection.style.paddingRight = "15px";

  const priceSection = document.createElement("section");
  priceSection.append(document.createElement("h3"));
  priceSection.innerText = "Starting Price";
  priceSection.style.paddingRight = "15px";

  const occupationSection = document.createElement("section");
  occupationSection.append(document.createElement("h3"));
  occupationSection.innerText = "Occupation";

  arr.forEach((element) => {
    const nameDiv = document.createElement("div");
    const occupationDiv = document.createElement("div");
    const priceDiv = document.createElement("div");
    nameDiv.innerText = element.name;
    occupationDiv.innerText = element.occupation;
    priceDiv.innerText = element.price;
    nameSection.append(nameDiv);
    occupationSection.append(occupationDiv);
    priceSection.append(priceDiv);
  });

  averageStartingPrice.innerText = `The average starting price is  ${averagePrices(
    arr
  )} `;
  //Make Appends Section
  article.append(nameSection);
  article.append(priceSection);
  article.append(occupationSection);

  body.append(averageStartingPrice);
  heading.append(title);
  heading.append(averageStartingPrice);
  heading.append(chartTitle);

  body.append(heading);
  body.append(article);
};

let averagePrices = (arr) => {
  return Math.round(
    arr.map((element) => element.price).reduce((acc, price) => acc + price, 0) /
      arr.length
  );
};

// let randomizeFreelancers = () => {
//   return freelancers.filter(() => Math.round(Math.random()) === 1);
// };

let addRandomFreelancer = (arr) => {
  freelancers.forEach((element, index) => !arr[index]);
};

const init = () => {
  let randFreelancer = randomizeFreelancers();
  display(randFreelancer);
};

init();
setInterval(addRandomFreelancer(), 3000);
