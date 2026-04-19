import { useNavigate } from 'react-router-dom';

function Navbar (){
    const navigate = useNavigate();
    return(
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                          tabIndex="-1"
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                          <li><a onClick={() => navigate('/books')}>Voir la liste de livre</a></li>
                          <li><a onClick={() => navigate('/book')}>Chercher un livre</a></li>
                          <li><a onClick={() => navigate('/add')}>Ajouter un livre</a></li>
                          <li><a onClick={() => navigate('/update')}>Modifier un livre</a></li>
                          <li><a onClick={() => navigate('/delete')}>Supprimer un livre</a></li>
                        </ul>
                </div>
                <div className="navbar-center">
                  <a className="btn btn-ghost text-xl" onClick={() => navigate('/')}>
                    Bibliothèque
                  </a>
                </div>
            </div>
        </>
    )
}

export default Navbar