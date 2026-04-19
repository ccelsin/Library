import {useNavigate} from 'react-router-dom';

function UpdateCard() {
    const navigate = useNavigate();
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="/rest.png"
                        alt="Update" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Mettre à jour un livre</h2>
                    <p>Modifiez les informations d'un livre existant en remplissant un formulaire.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate('/update')}>Mettre à jour</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateCard