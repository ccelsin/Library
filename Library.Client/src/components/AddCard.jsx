import {useNavigate} from 'react-router-dom';

function AddCard() {
    const navigate = useNavigate();

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="/rest.png"
                        alt="Add" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Ajouter un livre</h2>
                    <p>Ajoutez de nouveaux livres à votre collection en remplissant un formulaire.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate('/add')}>
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCard