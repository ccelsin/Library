import {useNavigate} from "react-router-dom";

function GetCard() {
    const navigate = useNavigate();

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="/rest.png"
                        alt="Get" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Obtenir un livre</h2>
                    <p>Consultez les détails d'un livre spécifique en utilisant son identifiant.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate('/book')}>
                            Voir un livre
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetCard