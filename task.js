// pages/task.js
import { useState } from 'react';

export default function TaskPage() {
  const [taskComplete, setTaskComplete] = useState(false);

  const handleTask = () => {
    // Example Task: Type something
    setTaskComplete(true);
    // Here you will send earnings to database
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Arzenoidbot Task</h1>

      {!taskComplete ? (
        <div>
          <p>Type the following sentence exactly:</p>
          <p className="mt-2 font-mono bg-gray-200 p-2 rounded">I love earning with Arzenoidbot!</p>
          <input type="text" className="border mt-2 p-2 w-full" />
          <button onClick={handleTask} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit Task</button>
        </div>
      ) : (
        <div className="text-green-600 text-xl">✅ Task Complete! $5 Added to your wallet!</div>
      )}
    </div>
  );
}
