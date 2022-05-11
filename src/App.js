import cities from "./cities";
import "./styles.css";
import "./TypeAheadDropdown";
import TypeAheadDropdown from "./TypeAheadDropdown";

export default function App() {
  return (
    <div className="App">
      <h1>Typeahead search</h1>
      <TypeAheadDropdown items={cities} />
    </div>
  );
}
