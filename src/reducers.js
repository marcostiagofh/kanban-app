import * as actions from "./actions";
import deepFreeze from "deep-freeze";"

export default (state = {}, action) => {
  switch (action.type) {
    case actions.LOAD:
      return {
        1: { name: "Card A", id: 1, columnIndex: 0 },
        2: { name: "Card B", id: 2, columnIndex: 1 },
        3: { name: "Card C", id: 3, columnIndex: 2 }
      };
    case actions.MOVE: {
      deepFreeze(state)
      const { columnIndex, cardId, direction } = action;
      return{
        ...state, 
        [cardId]: {
          ...state[cardId],
          columnIndex: columnIndex + direction
        }
      }
    }
    case actions.ADD: {
      const { card } = action;
      return { ...state, [card.id]: ca};
    }
    default: return state
  }
};
