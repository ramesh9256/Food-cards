import React, { useEffect, useState } from "react";

const Card = ({ img, foodName, starRating, foods, place, distance, cost }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-80 text-center hover:shadow-xl transition-shadow">
      <img src={img} alt={foodName} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{foodName}</h3>
        <p className="text-yellow-500 text-lg">⭐ {starRating}</p>
        <p className="text-gray-600">Foods: {foods.join(", ")}</p>
        <p className="text-gray-500 font-medium">{place}</p>
        <p className="text-gray-400">{distance}</p>
        <p className="text-lg font-bold text-green-600">₹{cost}</p>
      </div>
    </div>
  );
};

const CardData = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://cards-full-stack.onrender.com/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-wrap gap-6 justify-center">
      {cards.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          foodName={item.foodName}
          starRating={item.starRating}
          foods={item.foods}
          place={item.place}
          distance={item.distance}
          cost={item.cost}
        />
      ))}
    </div>
  );
};

export default CardData;
