// Messages Components

import { XMarkIcon } from "@heroicons/react/16/solid";


const ErrorNotification = ({ message, onClose }) => (
  <div className="absolute top-4 right-4">
    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
      {message}
      <button 
        onClick={onClose} 
        className="ml-2 text-red-500 hover:text-red-700"
      >
        <XMarkIcon className="h-6"/>
      </button>
    </div>
  </div>
  );
  
  export default ErrorNotification;
  