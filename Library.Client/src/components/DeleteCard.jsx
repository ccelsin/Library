import {useNavigate} from 'react-router-dom';

function DeleteCard() {
    const navigate = useNavigate();
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="/rest.png"
                        alt="Delete" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Supprimer un livre</h2>
                    <p>Supprimez un livre de votre collection en utilisant son identifiant.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate('/delete')}>
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteCard