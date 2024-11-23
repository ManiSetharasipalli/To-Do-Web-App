const API_BASE_URL = 'https://to-do-reminder-mock-apis.onrender.com';


export const api = {
  async getTasks() {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    return response.json();
  },
  async createTask(task) {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return response.json();
  },
  async updateTask(id, updatedTask) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    return response.json();
  },
  async deleteTask(id) {
    await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
  },
  async toggleTaskCompletion(id, completed) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    });
    return response.json();
  },
};
