import React from 'react';

const App = ({ list }) => {
  return (
    <ul>
      {list.map((char, index) => (
        <li key={char.name + index}>
          <strong>{char.name}</strong> -&nbsp;
          {char.side}
        </li>
      ))}
    </ul>
  );
};

export default App;
