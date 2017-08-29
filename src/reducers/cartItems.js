export function itemsHasErrored(state = false, action) {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.hasErrored;
      default:
          return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
      case 'ITEMS_IS_LOADING':
          return action.isLoading;
      default:
          return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
        case 'UPDATE_ITEM':
            const newItems = action.items.map((item) => {
                if (item.id === action.itemToUpdate.id) {
                    return action.itemToUpdate
                } else {
                    return item
                }
            })
            action.items = newItems;
            return action.items;
        case 'GET_ITEMS_DATA':
            return action.items;
        
        case 'DELETE_ITEM_BY_ID': 
            const newState = Object.assign([], state);
            const itemToDelete = state.findIndex(item => item.id === action.item);
            
            newState.splice(itemToDelete, 1);
            return newState;
        
      default:
          return state;
  }
}