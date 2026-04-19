import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { updateBook } from '../services/api';


function UpdateBookForm() {
    const [book, setBook] = useState({
        id: '',
        title: '',
        author: '',
        releaseDate: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateBook(book.id, book);
        navigate('/books');
    };

    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Mettre à jour un livre</h1>
                <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Id du livre à mettre à jour
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="id"
                            type="number"
                            placeholder="Entrez l'ID du livre à mettre à jour"
                            value={book.id}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Titre
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Entrez le titre du livre"
                            value={book.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                            Auteur
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="author"
                            type="text"
                            placeholder="Entrez le nom de l'auteur"
                            value={book.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Date de publication
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="releaseDate"
                            type="date"
                            value={book.releaseDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Mettre à jour le livre
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateBookForm
                            