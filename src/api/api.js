import axios from "axios";

const API_BASE_URL = 'https://todo-web-django-apis.onrender.com'
// const API_BASE_URL = 'http://127.0.0.1:8000'

export const api = {

  // Fetch all tasks
  async getTasks() {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tasks/`);
      return response.data;
    } catch (err) {
      console.error('Error fetching tasks:', err);
      throw err;
    }
  },
  
  // Create a new task
  async createTask(task) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/tasks/`, task);
      return response.data;
    } catch (err) {
      console.error('Error creating task:', err);
      throw err;
    }
  },

  // Update an existing task
  async updateTask(id, updatedTask) {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/tasks/${id}/`, updatedTask)
      return response.data;
    } catch (err) {
      console.error('Error updating task:', err);
      throw err;
    }
  },

  // Delete a task
  async deleteTask(id) {
    try {
      await axios.delete(`${API_BASE_URL}/api/tasks/${id}/`)
    } catch (err) {
      console.error('Error deleting task:', err);
      throw err;
    }
  },

  async deleteAllTasks() {
    try{
        await axios.delete(`${API_BASE_URL}/api/tasks/delete_all/`)
    } catch(err) {
      console.error('Error deleting task:', err)
      throw err;
    }
  },

  // Toggle task completion status
  async toggleTaskCompletion(id, is_completed) {
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/tasks/${id}/`,{is_completed}); // we have to wrap it in object
      if (!response.ok){console.log('error')}
      return response.data;
    } catch (err) {
      console.error('Error toggling task completion:', err);
      throw err;
    }
  },
};
