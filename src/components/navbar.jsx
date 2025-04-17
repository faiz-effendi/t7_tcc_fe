import { useNavigate } from "react-router-dom";

function NavBar({ search, setSearch }) {
  const navigate = useNavigate();

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

        <button 
          className='bg-gray-400 hover:bg-green-500 cursor-default px-2 py-2 rounded font-semibold text-white flex gap-1 items-center'
          onClick={() => navigate('/add-note')}
        >
          <div className="left-3 flex items-center text-white">
            <i className="fas fa-plus"></i> {/* Ikon Search */}
          </div>
          <p>Add Note</p>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;  