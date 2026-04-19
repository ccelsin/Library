import {useNavigate} from 'react-router-dom';

function GetAllCard() {
    const navigate = useNavigate();
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="/rest.png"
                        alt="Get All" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Obtenir tous les livres</h2>
                    <p>Consultez la liste complète de vos livres disponibles en rayon</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate('/books')}>Obtenir tous</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetAllCard