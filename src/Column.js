import React from "react";
import Card from "./Card";

export default ({
  column,
  cards,
  columnIndex,
  onMoveLeft,
  onMoveRight,
  onAddCard
}) => (
  <div className="column">
    <h1>{column.name}</h1>
    {cards.map((card, cardIndex) => (
      <Card
        card={card}
        cardIndex={cardIndex}
        key={cardIndex}
        canMoveLeft={columnIndex !== 0}
        canMoveRight={columnIndex !== 2}
        onMoveLeft={() => onMoveLeft(card.id)}
        onMoveRight={() => onMoveRight(card.id)}
      />
    ))}
    <button onClick={onAddCard}>+</button>
  </div>
);
