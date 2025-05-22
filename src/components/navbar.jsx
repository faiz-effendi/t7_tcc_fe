import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavBar({ search, setSearch }) {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleLogout = async() => {
    await axios
      .delete(`${API_URL}/logout`, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          console.log("Logout successful");
          localStorage.removeItem('localSavedUserData');
          navigate('/');
        } else {
          console.log("Logout failed: ", response.data.message);
        }
      })
      .catch((error) => {
        console.log("Error during logout: ", error.response.data.message);
      })
  }

  return (
    <nav className='flex items-center justify-center py-2.5 bg-gray-100 shadow-lg z-10 fixed top-0 left-0 w-full'>
      <div className='flex flex-col sm:flex-row gap-2 justify-between items-center w-full mx-10'>
        <h1 className='text-2xl font-bold text-gray-600 md:inline hidden'>MyNotes</h1>

        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search notes..."
            className="pl-10 pr-4 py-2 border border-gray-600 rounded-md w-96 flex-initial text-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
            <i className="fas fa-search"></i> {/* Ikon Search */}
          </span>
        </div>

        <div className="flex gap-4">
          <button 
            className='bg-gray-400 hover:bg-green-500 cursor-default px-2 py-2 rounded font-semibold text-white flex gap-1 items-center'
            onClick={() => navigate('/add-note')}
          >
            <div className="left-3 flex items-center text-white">
              <i className="fas fa-plus"></i> {/* Ikon Search */}
            </div>
            <p>Add Note</p>
          </button>

          <button 
            className='border-2 border-red-400 hover:bg-red-500  text-red-400 hover:text-white cursor-default px-3 py-2 rounded font-semibold flex gap-1 items-center'
            onClick={ handleLogout }
          >
            <p>Logout</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;  