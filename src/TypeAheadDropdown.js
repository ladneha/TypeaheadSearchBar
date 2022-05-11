import React, { useState } from "react";
import "./styles.css";

const TypeAheadDropdown = (props) => {
  const { items } = props;
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleOnTextChange = (e) => {
    const val = e.target.value;
    if (val.length > 0) {
      const regex = new RegExp(`^${val}`, `i`);
      setSuggestions(items.sort().filter((item) => regex.test(item)));
      setText(val);
    }
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }

    const suggestionSelected = (city) => {
      const suggestion = city;
      setText(suggestion);
      setSuggestions([]);
    };

    return (
      <ul>
        {suggestions.map((city) => (
          <li key={city} onClick={(e) => suggestionSelected(city)}>
            {city}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="TypeAheadDropdown">
      <input
        type="text"
        onChange={handleOnTextChange}
        placeholder="Enter search city"
        value={text}
      />
      {renderSuggestions()}
    </div>
  );
};

export default TypeAheadDropdown;
