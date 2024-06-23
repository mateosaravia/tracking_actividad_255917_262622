import AchievementsForm from "./components/forms/AchievementsForm";
import GameSessionForm from "./components/forms/GameSessionForm";
import UnlockLevelForm from "./components/forms/UnlockLevelForm";

function App() {
  return (
    <div className="flex flex-col items-center h-full">
        <h1 className="text-3xl mt-20 mb-10">Steam Activity Tracking</h1>
        <div className="flex items-center space-x-16">
          <div className="flex flex-col items-center">
            <h2 className="text-xl mb-10">Register Game Session</h2>
            <GameSessionForm />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl mb-10">Register Achievements</h2>
            <AchievementsForm />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl mb-10">Unlock Level</h2>
            <UnlockLevelForm />
          </div>
        </div>
    </div>
  );
}

export default App;
