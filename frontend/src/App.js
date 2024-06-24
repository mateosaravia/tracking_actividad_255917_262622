import AchievementsForm from "./components/forms/AchievementsForm";
import GameSessionForm from "./components/forms/GameSessionForm";
import IndicatorForm from "./components/forms/IndicatorForm";
import UnlockLevelForm from "./components/forms/UnlockLevelForm";
import SearchGameIndicator from "./components/panels/SearchGameIndicatorPanel";
import SearchUserInfoPanel from "./components/panels/SearchUserInfoPanel";

function App() {
  return (
    <div className="flex flex-col items-center h-full space-y-10">
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
          <div className="flex flex-col items-center">
            <h2 className="text-xl mb-10">Register Indicator</h2>
            <IndicatorForm />
          </div>
        </div>
        <div className="flex flex-col items-center space-x-16">
          <h2 className="text-xl mb-10">Search User Info</h2>
          <SearchUserInfoPanel />
        </div>
        <div className="flex flex-col items-center space-x-16">
          <h2 className="text-xl mb-10">Search Game Indicator</h2>
          <SearchGameIndicator />
        </div>
    </div>
  );
}

export default App;
