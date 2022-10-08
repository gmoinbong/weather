import React from 'react';
import Home from './pages/Home';
import st from './styles/App.module.scss'
function App() {

  return (
    <div className={st.container}>
      <Home />
    </div>
  );
}

export default App;
