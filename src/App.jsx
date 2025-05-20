import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddNote from './pages/add_note_page';
import EditNote from './pages/edit_note_page';
import Login from './pages/login_page';
import ProtectedRoute from './authorization/protected_route';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/add-note" element={
        <ProtectedRoute>
          <AddNote />
        </ProtectedRoute>
      } />
      <Route path="/edit-note/:id" element={
        <ProtectedRoute>
          <EditNote />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
