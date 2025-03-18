import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
  {
    image: (
      <svg className="bd-placeholder-img rounded float-start" width="200" height="200" role="img" aria-label="Placeholder: 200x200" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em" textAnchor="middle" dominantBaseline="middle">500x325</text>
      </svg>
    ),
    title: "Card title",
    description: "Maecenas in tincidunt ante, vitae placerat odio. In felis justo, tempor sed gravida non.",
  },
  {
    image: (
      <svg className="bd-placeholder-img rounded float-start" width="200" height="200" role="img" aria-label="Placeholder: 200x200" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em" textAnchor="middle" dominantBaseline="middle">500x325</text>
      </svg>
    ),
    title: "Card title",
    description: "Vivamus urna eros, dapibus id eros quis, luctus dapibus odio. Donec eget velit aliquet.",
  },
  {
    image: (
      <svg className="bd-placeholder-img rounded float-start" width="200" height="200" role="img" aria-label="Placeholder: 200x200" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em"textAnchor="middle" dominantBaseline="middle">500x325</text>
      </svg>
    ),
    title: "Card title",
    description: "Nunc et lacinia risus. Donec euismod urna diam, eget laoreet tellus vehicula vitae.",
  },
  {
    image: (
      <svg className="bd-placeholder-img rounded float-start" width="200" height="200" role="img" aria-label="Placeholder: 200x200" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em"textAnchor="middle" dominantBaseline="middle">500x325</text>
      </svg>
    ),
    title: "Card title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae odio risus. ",
  }
];

const Home = () => {
  return (
    <div className="text-center">
      <Navbar />

      {/* Envolver Jumbotron en un container para alinearlo */}
      <div className="container">
        <Jumbotron />
      </div>

      {/* Sección de Cards */}
      <div className="container">
        <div className="row">
          {cards.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card cards={item} /> {/* Renderiza los cards con el SVG dentro */}
            </div>
          ))}
        </div>
      </div>        

      <Footer />
    </div>
  );
};

export default Home;

