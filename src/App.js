import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "banana",
    image:
      "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 5,
  },
  {
    id: 2,
    name: "apple",
    image:
      "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.3,
  },
  {
    id: 3,
    name: "orange",
    image:
      "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.9,
  },
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} width="200px" height="auto" />
    </div>
  );
}

Food.propType = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <>
      {foodILike.map(item => (
        <Food
          key={item.id}
          name={item.name}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </>
  );
}

export default App;
