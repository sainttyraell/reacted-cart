import constants from '../constants/constants';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case constants.types.ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case constants.types.ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case constants.types.UPDATE_ITEM:
            return state.map((item) => {
                if (item.id === action.itemToUpdate.id) {
                    return action.itemToUpdate
                } else {
                    return item
                }
            })
        case constants.types.GET_ITEMS_DATA:
            return action.items;
        
        case constants.types.DELETE_ITEM_BY_ID:
            const newState = Object.assign([], state);
            const itemToDelete = state.findIndex(item => item.id === action.item);
            
            newState.splice(itemToDelete, 1);
            return newState;
        
        default:
            return state;
    }
}