import { Calendar } from "./components/calendar/Calendar";
import { GlobalProvider } from "./components/util/globalContext/globalContext";

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <Calendar />
      </GlobalProvider>
    </div>
  );
};

export default App;
