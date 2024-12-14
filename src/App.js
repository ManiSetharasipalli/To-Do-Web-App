import { useState, useEffect } from 'react';
import Button from './components/Button';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ErrorNotification from './components/ErrorNotification';
import LoadingSpinner from './components/LoadingSpinner';
import DeletionMessage from './components/DeletionMessage';
import { api } from './api/api';
import { PlusIcon, TrashIcon } from '@heroicons/react/16/solid';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletionMessage, setDeletionMessage] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

 // Fetch tasks from the mock API. 

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await api.getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (newtask) =>{
    try {
      const result = editingTask 
           ? await api.updateTask(editingTask.id, newtask)
           : await api.createTask(newtask);
      
      setTasks((prevTasks) =>
      editingTask 
      ? prevTasks.map((task) => (task.id === editingTask.id ? result : task))
      : [...prevTasks, result])
      setShowForm(false);
      setEditingTask(null)
    } catch (err) {
          setError(editingTask ? 'Failed to update task' : 'Failed to create task');
        }
}
  const deleteTask = async (id) => {
    try {
      
      await api.deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      setDeletionMessage('Task has been deleted');
      setTimeout(() => setDeletionMessage(null), 3000);
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const deleteAllTasks = async () => {
    try {
      await api.deleteAllTasks();
      setTasks([]);
      setDeletionMessage('All tasks have been deleted');
      setTimeout(() => setDeletionMessage(null), 3000);
    } catch (err) {
      console.error('Error deleting all tasks:', err);
    }
  };

  const toggleCompletion = async (id) => {
    try {
      const task = tasks.find(t => t.id === id);
      const updated = await api.toggleTaskCompletion(id, !task.is_completed);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === id ? updated : t))
      );
    } catch (err) {
      setError('Failed to update task status');
    }
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditingTask(taskToEdit);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">To-Do Reminder</h1>
          <p className="text-gray-600 mb-6">Stay organized, get more done</p>
          <div className='flex justify-center items-center'>
          {/* Button component for adding a new task */}
          <Button
            text="Add Task"
            onClick={() => setShowForm(true)}
            Icon={PlusIcon}
            className="bg-indigo-600 hover:bg-indigo-700"
          />
          </div>

        </div>
        {/* Messages components. */}
        {error && <ErrorNotification message={error} onClose={() => setError(null)} />}
        {deletionMessage && <DeletionMessage message={deletionMessage} />}

        {showForm && <TaskForm addTask={addTask} editingTask={editingTask} onClose={closeForm} />}

        {loading ? (
          <LoadingSpinner />
        ) : tasks.length === 0 ? (
          <div className="text-center text-gray-500 mt-12">
            <p>No tasks yet. Click "Add Task" to get started!</p>
          </div>
        ) : (
          <TaskList tasks={tasks} onComplete={toggleCompletion} onEdit={editTask} onDelete={deleteTask} />
        )}
      <div className='flex justify-end items-center'>
        <Button
          text="Delete All Tasks"
          onClick={deleteAllTasks}
          Icon={TrashIcon}
          className="bg-red-600 hover:bg-red-700 mt-4"
        />
      </div>
      </div>
    </div>
  );
}


export default App;
