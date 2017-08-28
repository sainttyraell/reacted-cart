import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading} from './cartItems';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
});