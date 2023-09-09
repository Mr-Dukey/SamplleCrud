import logo from './logo.svg';
import './App.css';
import CreateUser from './CRUD MongoDB/Create User/CreateUser';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ViewUser from './CRUD MongoDB/View User/ViewUser';
import EditUser from './CRUD MongoDB/Edit User/EditUser';
import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/View' element={<ViewUser/>}/>
          <Route path='/create' element={<CreateUser/>} />
          <Route path='/edit/:id' element={<EditUser/>} />
          <Route  path="*" element={<Navigate to="/View" replace/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
