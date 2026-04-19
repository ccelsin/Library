import { useState } from 'react'
import Home from "./pages/Home.jsx"
import "./App.css"
import AddBookForm from './pages/AddBookForm.jsx'
import AllBooksPage from './pages/AllBooksPage.jsx'
import UpdateBookForm from './pages/UpdateBookForm.jsx'
import DeleteBookForm from './pages/DeleteBookForm.jsx'
import BookPage from './pages/BookPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddBookForm />} />
                <Route path="/books" element={<AllBooksPage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="/update" element={<UpdateBookForm />} />
                <Route path="/delete" element={<DeleteBookForm />} />
            </Routes>
        </Router>
        

    </>
  )
}

export default App
