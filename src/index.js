import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilteredList from './FilteredList';
import reportWebVitals from './reportWebVitals';

const starWarsChars = [
  { name: 'Дарт Вейдер', side: 'dark' },
  { name: 'Люк Скайвокер', side: 'light' },
  { name: 'Палпатин', side: 'dark' },
  { name: 'Обиван Кеноби', side: 'light' },
];

ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={starWarsChars} side="light" />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
