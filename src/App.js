import React from 'react';
import Character from './Character';

const App = ({ side }) => {
  if (!side) {
    side = 'light';
  }

  const characters = [
    { name: 'Дарт Вейдер', side: 'dark' },
    { name: 'Люк Скайвокер', side: 'light' },
    { name: 'Палпатин', side: 'dark' },
    { name: 'Обиван Кеноби', side: 'light' },
    { name: 'Йода', side: 'light' },
  ];

  const filteredChars = characters.filter((char) => char.side === side);

  return (
    <ul>
      {filteredChars.map((char, index) => (
        <Character key={char.name + index} name={char.name} side={char.side} />
      ))}
    </ul>
  );
};

export default App;
