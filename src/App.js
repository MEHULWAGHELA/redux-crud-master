import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import TableComponents from './components/TableComponents';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from './redux/action/action';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/form' element={<FormComponent />} >
            <Route path=':number' />
          </Route>
          {/* <Route path='/' to={<Navigate to='/form' />} /> */}
          <Route path='/table' element={<TableComponents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
