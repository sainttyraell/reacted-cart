import itemService from '../services/item.service';
import constants from '../constants/constants';

export function itemsHasErrored(bool) {
    return {
        type: constants.types.ITEMS_HAS_ERRORED,
        hasErrored: bool
    }
}

export function itemsIsLoading(bool) {
    return {
        type: constants.types.ITEMS_IS_LOADING,
        isLoading: bool
    }
}

export function getItemsData(items) {
    return {
        type: constants.types.GET_ITEMS_DATA,
        items
    }
}

export function deleteItemSuccess(item) {
    return {type: constants.types.DELETE_ITEM_BY_ID, item
    }
}

export function deleteItem(item) {
    return (dispatch) => {
        
        // return itemService.deleteItem(item).then(() => { //this is hard api removal
        //         dispatch(deleteItemSuccess(item));
        //         return;
        //     })
        //     .catch(error => {
        //         throw(error);
        //     });
        
        //but i use soft one
        return dispatch(deleteItemSuccess(item))
    }
}

export function updateItemSuccess(itemToUpdate) {
    return {
        type: constants.types.UPDATE_ITEM,
        itemToUpdate
    }
}

export function updateItem(itemToUpdate) {
    return (dispatch) => {
         return dispatch(updateItemSuccess(itemToUpdate))
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

            return itemService.getItems().then((items) => { 
                if (typeof items !== 'object') {
                    dispatch(itemsHasErrored(true));
                    return;
                }
                dispatch(itemsIsLoading(false));
                dispatch(getItemsData(items));
                return;
            })
            .catch(() => {
                dispatch(itemsHasErrored(true));
            });
    };
}