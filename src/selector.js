export default (columns, state) => {
    const cardIds = Object.keys(state)
    const cards = cardIds.map(id => state[id])
    return columns.reduce((cardsByColumn, column, columnIndex) => {
      if(undefined === cardsByColumn[columnIndex]) {
        cardsByColumn[columnIndex] = []
      }
      if(state !== undefined) {
        cardsByColumn[columnIndex] =
          cards.filter(card => columnIndex === card.columnIndex)
      }
      
      return cardsByColumn
    }, [])
  }