import constants from '../constants/constants';

class itemsService {
    static getItems() {
      return fetch(constants.API_PRODUCTS).then(response => {
        return response.json();
      }).catch(error => {
        return error
      });
    }
  
    static deleteItem(id) {
      const request = new Request(`${constants.API_PRODUCTS}/${id}`, {
        method: 'DELETE'
      });
  
      return fetch(request).then(response => response.json())
        .catch(error => error);
    }
  }
  
  export default itemsService;
  