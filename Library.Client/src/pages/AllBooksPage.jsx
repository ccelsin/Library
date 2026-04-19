import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import { getAllBooks } from '../services/api.js';
import BookCard from "../components/BookCard.jsx";

function AllBooksPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await getAllBooks();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    return (<>
        <Navbar />
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-6">Tous les livres</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
        
    </>

    )
}

export default AllBooksPage