import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export class itemsAPI {
  static async getAllItems(itemsName, limit = 10, page = 1) {
    const response = await instance.get(`${itemsName}`, {
      params: {
        _limit: limit,
        _page: page,
      }
    });
    return response;
  }
}

export class postAPI {
  static async getPostById(id) {
    const response = await instance.get('posts/' + id);
    return response.data;
  }

  static async getComments(id) {
    const response = await instance.get(`posts/${id}/comments`);
    return response.data;
  }
}

export class todoAPI {
  static async createTodo(todo) {
    const response = await instance.post('todos/', todo);
    return response;
  }

  static async deleteTodo(id) {
    const response = await instance.delete('todos/' + id);
    return response;
  }

  static async updateTodo(todo, key) {
    const response = await instance.delete('todos/' + todo.id, {[key]: todo[key]});
    return response;
  }
}