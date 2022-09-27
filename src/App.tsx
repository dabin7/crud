import React from 'react';
import BoardList from './BoardList';
import Write from './Write';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <BoardList></BoardList>
      <Write></Write>
    </div>
  );
}

export default App;
