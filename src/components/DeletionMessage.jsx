// Messages Components
const DeletionMessage = ({ message }) => (
    <div className="absolute top-4 right-4">
        <div className="text-center w-60 mb-4 p-4 bg-green-50 border border-green-200 rounded-full text-green-700 shadow-lg">
            {message}
        </div>
    </div>
  );
  
  export default DeletionMessage;
  