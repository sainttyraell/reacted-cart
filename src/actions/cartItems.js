import itemService from '../services/item.service';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    }
}

export function getItemsData(items) {
    return {
        type: 'GET_ITEMS_DATA',
        items
    }
}

export function deleteItemSuccess(item) {
    return {type: 'DELETE_ITEM_BY_ID', item}
}

export function deleteItem(url, item) {
    return (dispatch) => {
        
        return itemService.deleteItem(url, item).then(() => {
            dispatch(deleteItemSuccess(item));
        return;
            }).catch(error => {
        throw(error);
        })
    }
}

export function updateItemSuccess(items, itemToUpdate) {
    return {
        type: 'UPDATE_ITEM',
        items,
        itemToUpdate
    }
}

export function updateItem(items, itemToUpdate) {
    return (dispatch) => {
         return dispatch(updateItemSuccess(items, itemToUpdate))
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    dispatch(itemsHasErrored(true));
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(getItemsData(items)));
    };
}