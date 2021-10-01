import axios from 'axios';

export default class TodosService {
  static async getAllTodos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
    return response.data;
  }

  static async getAllPosts(limit = 10, page = 1) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: limit,
        _page: page,
      }
    });
    return response;
  }

  static async getPostById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    return response.data;
  }

  static async getComments(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response.data;
  }
}