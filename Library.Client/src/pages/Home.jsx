import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import AddCard from "../components/AddCard.jsx"
import UpdateCard from "../components/UpdateCard.jsx"
import GetCard from "../components/GetCard.jsx"
import DeleteCard from "../components/DeleteCard.jsx"
import GetAllCard from "../components/GetAllCard.jsx"


function Home(){
    const navigate = useNavigate();
    return(
        <>
            <Navbar/>
            <div className="flex flex-col items-center justify-center container mx-auto mt-1">
                <h1 className="text-3xl font-bold mb-4">Bienvenue à la bibliothèque</h1>
                <p className="text-lg text-gray-700">Gérez votre collection de livres facilement avec ce site.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center container mx-auto mt-8 gap-4">
                <AddCard/>
                <UpdateCard/>
                <GetCard/>
                <DeleteCard/>
                <GetAllCard/>
            </div>
            
        </>
    )

}
export default Home