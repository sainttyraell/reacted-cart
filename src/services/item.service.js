class itemsService {
    static getItems(url) {
      return fetch('http://localhost:5000/api/v1/cats').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
    static deleteItem(url, id) {
      const request = new Request(`${url}/${id}`, {
        method: 'DELETE'
      });
  
      return fetch(request).then(response => response.json())
        .catch(error => error);
    }
  }
  
  export default itemsService;
  