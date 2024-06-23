import GameSessionForm from "./components/forms/GameSessionForm";

function App() {
  return (
    <div className="flex flex-col items-center h-full">
        <h1 className='text-3xl mt-20 mb-10'>Steam Activity Tracking</h1>
        <div>
          <div>
            <h2>Register Game Session</h2>
            <GameSessionForm />
          </div>
        </div>
        <div className='flex'>
        </div>
    </div>
  );
}

export default App;
