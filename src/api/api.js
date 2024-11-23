const API_BASE_URL = 'https://to-do-reminder-mock-apis.onrender.com';  // Mock API Hosted URL

export const api = {

  // Fetch all tasks
  async getTasks() {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      return response.json();
    } catch (err) {
      console.error('Error fetching tasks:', err);
      throw err;
    }
  },
  
  // Create a new task
  async createTask(task) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) throw new Error('Failed to create task');
      return response.json();
    } catch (err) {
      console.error('Error creating task:', err);
      throw err;
    }
  },

  // Update an existing task
  async updateTask(id, updatedTask) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) throw new Error('Failed to update task');
      return response.json();
    } catch (err) {
      console.error('Error updating task:', err);
      throw err;
    }
  },

  // Delete a task
  async deleteTask(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete task');
    } catch (err) {
      console.error('Error deleting task:', err);
      throw err;
    }
  },

  // Toggle task completion status
  async toggleTaskCompletion(id, completed) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
      });
      if (!response.ok) throw new Error('Failed to update task status');
      return response.json();
    } catch (err) {
      console.error('Error toggling task completion:', err);
      throw err;
    }
  },
};
