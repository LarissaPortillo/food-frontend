import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' />
          <Route path='/login'/>
          <Route path='/food/:id' />
          <Route path='/:id'/>
          <Route path='/:id/edit' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
