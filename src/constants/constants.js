const constants = {
    API_PRODUCTS: 'http://59a0a1a9c89deb0011c337b3.mockapi.io/api/v1/products',

    currency: {
        euro: '€'
    },

    types: {
        ITEMS_HAS_ERRORED: Symbol('ITEMS_HAS_ERRORED'),
        ITEMS_IS_LOADING: Symbol('ITEMS_IS_LOADING'),
        GET_ITEMS_DATA: Symbol('GET_ITEMS_DATA'),
        DELETE_ITEM_BY_ID: Symbol('DELETE_ITEM_BY_ID'),
        UPDATE_ITEM: Symbol('UPDATE_ITEM')
    }
}

export default constants;