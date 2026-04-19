import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import { getBookById } from '../services/api.js';
import BookCard from "../components/BookCard.jsx";

function BookPage() {
    const [book, setBook] = useState({
        id: '',
        title: '',
        author: '',
        releaseDate: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!book.id) return;
        try {
            const data = await getBookById(book.id);
            setBook(data);
        } catch (error) {
            console.error("Error fetching book:", error);
        }
    };

    return (<>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Rechercher un livre</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        Id du livre recherché
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="id"
                        type="number"
                        placeholder="Entrez l'ID du livre à rechercher"
                        value={book.id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Rechercher le livre
                </button>
            </form>
            <div className="mt-8">
                {book.title && <BookCard book={book} />}
            </div>
        </div>
    </>);
}

export default BookPage